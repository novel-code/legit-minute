import { useQuery } from "@tanstack/react-query";
import { API_KEY } from "../constants";
import axios from "axios";
import { useSession } from "@supabase/auth-helpers-react";

export function useYoutubeContent() {
  const session = useSession();
  const { isLoading, data } = useQuery({
    queryKey: ["youtubeSubscriptions"],
    retry: false,
    queryFn: async function getYoutubeContent() {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&maxResults=35&key=${API_KEY}`,
        {
          headers: {
            Authorization: "Bearer " + session.provider_token,
            Accept: "application/json",
          },
        }
      );

      if (!response.data)
        throw new Error("Failed to get youtube subscriptions");

      const currentDay = new Date().getDay() + 1;
      if (localStorage.getItem("day")) {
        if (localStorage.getItem("day") == currentDay) {
          console.log("localStorage.getItem(day) == currentDay", currentDay);
        } else {
          localStorage.setItem("day", currentDay);
        }
      } else {
        localStorage.setItem("day", currentDay);
      }
      const slice = currentDay * 5;

      const helpr = response.data.items.map(
        (el) => el.snippet.resourceId.channelId
      );

      const allChannelIds = helpr.slice(slice).slice(-5);

      let allUploadIds = [];
      let allYoutubeVids = [];

      await axios
        .all(
          allChannelIds.map((channelId) =>
            axios.get(
              `https://youtube.googleapis.com/youtube/v3/channels?part=contentDetails&id=${channelId}&key=${API_KEY}`
            )
          )
        )
        .then((data) => {
          allUploadIds = data.map(
            (el) => el.data.items.at(0).contentDetails.relatedPlaylists.uploads
          );
        });

      await axios
        .all(
          allUploadIds.map((uploadId) =>
            axios.get(
              `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=1&playlistId=${uploadId}&key=${API_KEY}`
            )
          )
        )
        .then((data) => {
          allYoutubeVids = data.map((el) => {
            return {
              title: el.data.items.at(0).snippet.title,
              id: el.data.items.at(0).snippet.resourceId.videoId,
              url: `https://www.youtube.com/embed/${
                el.data.items.at(0).snippet.resourceId.videoId
              }`,
            };
          });
        });

      return { data: allYoutubeVids };
    },
  });

  return { data, isLoading };
}
