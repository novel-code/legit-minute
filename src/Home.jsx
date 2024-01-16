import { useState } from "react";
import SegmentButtons from "./SegmentButtons";
import { useSwipeable } from "react-swipeable";
import List from "./ui/List";
import ResponseListItem from "./features/ResponseListItem";
import RewardListItem from "./features/RewardListItem";
const songs = [
  {
    title: "Talha Anjum - Lost in Time | Prod. by Umair (Official Audio)",
    url: "https://www.youtube.com/embed/34PUt9M7dc8?si=54TC2wJ_HuZMDWbP",
  },
  {
    title: "twenty one pilots: Lane Boy [OFFICIAL VIDEO]",
    url: "https://www.youtube.com/embed/ywvRgGAd2XI?si=elXJ5q8LqVbz2ChN",
  },
  {
    title: "first Flight To Mars",
    url: "https://www.youtube.com/embed/aFzYQ68313w?si=1JQUg3YEgVoI8-0X",
  },
  {
    title: "Numb (Official Music Video) [4K UPGRADE] -- Linkin Park",
    url: "https://www.youtube.com/embed/kXYiU_JCYtU?si=EefkyI8uGS007b0v",
  },
];

const defaultData = [
  {
    id: 1,
    Response: "praying fajr", // AH
    Reward: "4 songs", // NAH
    Content: [
      {
        id: "c1",
        title: "Talha Anjum - Lost in Time | Prod. by Umair (Official Audio)",
        url: "https://www.youtube.com/embed/34PUt9M7dc8?si=54TC2wJ_HuZMDWbP",
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
    ],
  },
  {
    id: 2,
    Response: "running 4 km",
    Reward: "4 reddit posts",
    Content: [],
  },
  {
    id: 3,
    Response: "host worldwise",
    Reward: "1 youtube video",
  },
  {
    id: 4,
    Response:
      "research remote jobs on https://thecodedose.com/blog/websites-to-find-remote-tech-jobs/",
    Reward: "3 songs",
    Content: [
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
    ],
  },
  {
    id: 5,
    Response:
      "note the linkedin accouts which post javascript/react js (content/ courses)",
    Reward: "4 twitter posts",
  },
  {
    id: 6,
    Response:
      "search on youtube for --> reactjs turing test, react js uplers interview questions, react js interview questions.",
    Reward: "1 youtube video",
  },
  {
    id: 7,
    Response: "study html/css documents",
    Reward: "3 songs",
    Content: [
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
    ],
  },
  {
    id: 8,
    Response:
      "find good react blog post for interviews and learn for interview",
    Reward: "4 LinkedIn posts",
  },
  {
    id: 9,
    Response: "study js documents",
    Reward: "1 youtube video",
  },
  {
    id: 10,
    Response: "practice coding challenges in react js",
    Reward: "2 songs",
    Content: [
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
  },
  {
    id: 11,
    Response: "study react documents",
    Reward: "3 posts",
  },
  {
    id: 12,
    Response: "attend turing test / uplears ",
    Reward: "1 youtube video",
  },
  {
    id: 13,
    Response: "8 hours of sleeping",
    Reward: "random photo of yours",
  },
];

function Home() {
  const [currentSegment, setCurrentSegment] = useState("Response");
  const [responseReward] = useState(defaultData);

  function handleSegmentChange(e) {
    setCurrentSegment(e.target.innerText);
  }

  const segmentBtnTextList = Object.keys(
    responseReward.at(0) ? responseReward.at(0) : {}
  ).filter((el) => el !== "id" && el !== "Content");

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

  return (
    <div className='min-h-full pb-20 bg-stone-950'>
      <h1 className='p-3 text-lg text-center '>Legit Minute</h1>
      <List
        handlers={handlers}
        responseReward={responseReward}
        render={(listItem) => (
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
                contentList={listItem["Content"]}
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
