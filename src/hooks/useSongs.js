import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export function useSongs() {
  const { isLoading, data: songs } = useQuery({
    queryKey: ["songs"],
    retry: false,
    queryFn: async function getSongsYoutube() {
      const response = await axios.get(
        `https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PL3pwXopP0Ty9_1wyh6EG2Q_Bb3mSqVaZm&key=${
          import.meta.env.VITE_API_KEY
        }`
      );
      const songs = response.data.items.map((el) => {
        const id = el.id;
        const title = el.snippet.title;
        const url = `https://www.youtube.com/embed/${el.snippet.resourceId.videoId}`;

        return {
          id,
          title,
          url,
        };
      });

      return songs;
    },
  });

  return { isLoading, songs };
}
