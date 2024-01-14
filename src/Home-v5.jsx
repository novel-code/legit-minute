import { useState } from "react";
import SegmentButtons from "./SegmentButtons";
import { useSwipeable } from "react-swipeable";
import List from "./ui/List";

const defaultData = [
  {
    id: 1,
    Response: "praying fajr", // AH
    Reward: "4 songs", // NAH
  },
  {
    id: 2,
    Response: "running 4 km",
    Reward: "4 reddit posts",
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
  ).filter((el) => el !== "id");

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
        currentSegment={currentSegment}
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
