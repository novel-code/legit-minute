import { useEffect, useState } from "react";
import SegmentButtons from "../SegmentButtons";
import { useSwipeable } from "react-swipeable";
import List from "../ui/List";
import ResponseListItem from "../features/ResponseListItem";
import RewardListItem from "../features/RewardListItem";
import axios from "axios";
// api key:  AIzaSyAqvsIErWUE79WBKarIlAV8l4zHU8KToEQ
// client id:  291820083427-agaah4t9359vppoiidgg06dc4l9gecj8.apps.googleusercontent.com
const allContent = {
  songs: [
    {
      id: "c1",
      title: "Talha Anjum - Lost in Time | Prod. by Umair (Official Audio)",
      url: "https://www.youtube.com/embed/34PUt9M7dc8",
    },
    {
      id: "c2",
      title:
        "Talha Anjum - Glass Half Full feat. JJ47 & Talhah Yunus | Prod. by Umai (Official Audio)",
      url: "https://www.youtube.com/embed/avF5SdWVIRc?si=pQgbffIpqfIXhThz",
    },
    {
      id: "c3",
      title: "first Flight To Mars",
      url: "https://www.youtube.com/embed/aFzYQ68313w?si=1JQUg3YEgVoI8-0X",
    },
    {
      id: "c4",
      title: "4AM in Karachi - Talha Anjum | Prod. Umai (Official Audio)",
      url: "https://www.youtube.com/embed/UcU-yRIZ5DE?si=T7IRSHbhuV0sE5Zz",
    },
    {
      id: "c5",
      title: "Afsaney",
      url: "https://www.youtube.com/embed/_3TrUW-o2ns?si=dVpF5uWsWTYDEJtS",
    },
    {
      id: "c6",
      title: "Lane Boy",
      url: "https://www.youtube.com/embed/ISy7bQ0xaoQ?si=zpuIAh5yV1B4Bdqn",
    },
    {
      id: "c7",
      title: "Laga Reh",
      url: "https://www.youtube.com/embed/DTjibK1z0Vo?si=BUxCez0ju4BEr_vW",
    },
    {
      id: "c8",
      title: "Desperation",
      url: "https://www.youtube.com/embed/n_NC-ZmQC50?si=x9lI5HcBuRZGRMyT",
    },
    {
      id: "c9",
      title: "Love me again",
      url: "https://www.youtube.com/embed/JWzag7a9afU?si=ZIHThZgDlzkfWYiI",
    },
    {
      id: "c10",
      title: "Can't buy me loving",
      url: "https://www.youtube.com/embed/ANqXlzC6Wug?si=FLYqybXlEJy_suza",
    },
    {
      id: "C11",
      title: "Talk to me",
      url: "https://www.youtube.com/embed/a78ncm421xg?si=840fNTHXME9C8vzS",
    },
    {
      id: "C12",
      title: "Raabta",
      url: "https://www.youtube.com/embed/ljllVH71Cgo?si=v3a6XeRLwnSwJnw1",
    },
  ],
  youtube: [
    {
      id: "v1",
      title: "Adblock broke youtube",
      url: "https://www.youtube.com/embed/iBTEibxAi7I?si=yZW806pY4uYYl-DK",
    },
    {
      id: "v2",
      title: "HTMX lesseon",
      url: "https://www.youtube.com/embed/f2wYvIVWR6M?si=iaT_jRmFClXkaZp-",
    },
    {
      id: "v3",
      title: "Mkbhd",

      url: "https://www.youtube.com/embed/vfUfSwwhjeg?si=GLqGkszXZCA3WOyQ",
    },
    {
      id: "v4",
      title: "Achieve Your Most Ambitious goals",
      url: "https://www.youtube.com/embed/cAUSWHQXtkI?si=2DKy5I00Jo52Z2rR",
    },
  ],
  reddits: [],
  twitters: [],
  linkedins: [],
};

const defaultData = [
  {
    id: 1,
    Response: "praying fajr", // AH
    Reward: "4 songs", // NAH
    Completed: false,
  },
  {
    id: 2,
    Response: "running 4 km",
    Reward: "4 reddits",
    Completed: false,
  },
  {
    id: 3,
    Response: "host worldwise",
    Reward: "1 youtube",
    Completed: false,
  },
  {
    id: 4,
    Response:
      "research remote jobs on https://thecodedose.com/blog/websites-to-find-remote-tech-jobs/",
    Reward: "7 songs",
    Completed: true,
  },
  {
    id: 5,
    Response:
      "note the linkedin accouts which post javascript/react js (content/ courses)",
    Reward: "4 twitters",
    Completed: false,
  },
  {
    id: 6,
    Response:
      "search on youtube for --> reactjs turing test, react js uplers interview questions, react js interview questions.",
    Reward: "2 youtube",
    Completed: true,
  },
  {
    id: 7,
    Response: "study html/css documents",
    Reward: "10 songs",
    Completed: false,
  },
  {
    id: 8,
    Response:
      "find good react blog post for interviews and learn for interview",
    Reward: "4 linkedins",
    Completed: false,
  },
  {
    id: 9,
    Response: "study js documents",
    Reward: "3 youtube",
    Completed: false,
  },
  {
    id: 10,
    Response: "practice coding challenges in react js",
    Reward: "12 songs",
    Completed: false,
  },
  {
    id: 11,
    Response: "study react documents",
    Reward: "8 reddits",
    Completed: false,
  },
  {
    id: 12,
    Response: "attend turing test / uplears ",
    Reward: "4 youtube",
    Completed: false,
  },
  {
    id: 13,
    Response: "8 hours of sleeping",
    Reward: "5 youtube",
    Completed: false,
  },
];

function Home() {
  const [currentSegment, setCurrentSegment] = useState("Response");
  const [responseReward] = useState(defaultData);
  const [allContentResp, setAllContentResp] = useState({
    songs: [],
    youtube: [],
    reddits: [],
    twitters: [],
    linkedins: [],
  });

  function handleSegmentChange(e) {
    setCurrentSegment(e.target.innerText);
  }

  const segmentBtnTextList = Object.keys(
    responseReward.at(0) ? responseReward.at(0) : {}
  ).filter((el) => el !== "id" && el !== "Content" && el !== "Completed");

  const handlers = useSwipeable({
    onSwipedLeft: handleSwipeLeft,
    onSwipedRight: handleSwipeRight,
    preventScrollOnSwipe: true,
    trackMouse: true,
  });

  function handleSwipeLeft() {
    setCurrentSegment((prev) => {
      const index = segmentBtnTextList.indexOf(prev);
      if (index === segmentBtnTextList.length - 1) return prev;
      return segmentBtnTextList[index + 1];
    });
  }

  function handleSwipeRight() {
    setCurrentSegment((prev) => {
      const index = segmentBtnTextList.indexOf(prev);
      if (index === 0) return prev;
      return segmentBtnTextList[index - 1];
    });
  }

  const content = responseReward.map((el) => {
    const helper = el.Reward.split(" ");

    const qty = Number(helper.at(0));
    const contentType = helper.at(1);

    const releventContent = allContentResp[contentType].slice(0, qty);

    return releventContent;
  });

  useEffect(function () {
    async function getSongs() {
      try {
        const response = await axios.get(
          "https://youtube.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=15&playlistId=PL3pwXopP0Ty9_1wyh6EG2Q_Bb3mSqVaZm&key=AIzaSyAqvsIErWUE79WBKarIlAV8l4zHU8KToEQ"
        );

        setAllContentResp((prev) => {
          const songs = response.data.items.map((el) => {
            const id = el.id;
            const title = el.snippet.title;

            // console.log(el.snippet.resourceId.videoId);

            const url = `https://www.youtube.com/embed/${el.snippet.resourceId.videoId}`;

            return {
              id,
              title,
              url,
            };
          });

          return { ...prev, songs };
        });
      } catch (error) {
        console.error(error);
      }
    }
    getSongs();
  }, []);

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <h1 className='p-3 text-lg text-center '>Legit Minute</h1>
      <List
        handlers={handlers}
        responseReward={responseReward}
        render={(listItem, index) => (
          <div
            className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 border-b-0 pl-3 flex items-center'
            key={listItem.id}
            title={listItem[currentSegment]}
          >
            {currentSegment === "Response" ? (
              <ResponseListItem responseTextValue={listItem[currentSegment]} />
            ) : (
              <RewardListItem
                rewardTextValue={listItem[currentSegment]}
                contentList={content.at(index)}
              />
            )}
          </div>
        )}
      />
      <SegmentButtons
        segmentBtnTextList={segmentBtnTextList}
        handleSegmentChange={handleSegmentChange}
        currentSegment={currentSegment}
      />
    </div>
  );
}
export default Home;
