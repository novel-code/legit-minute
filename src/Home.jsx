import { useState } from "react";
import SegmentButtons from "./SegmentButtons";

const defaultData = [
  {
    id: 1,
    Response: "praying fajr", // AH
    Reward: "30 minutes music/10 songs", // NAH
  },
  {
    id: 2,
    Response: "running 4 km",
    Reward: "5 reddit/twitter/linked post",
  },
  {
    id: 3,
    Response: "creating content on LinkedIn",
    Reward: "watching youtube",
  },
  {
    id: 4,
    Response: "creating content for novel code",
    Reward: "scrolling on LinkedIn",
  },
  {
    id: 5,
    Response: "creating personal projects",
    Reward: "eating food processed food",
  },
  {
    id: 6,
    Response: "books/articles/blogs/linkedin implementing immediately on any A",
    Reward: "two",
  },
  {
    id: 7,
    Response: "gathering info through books",
    Reward: "five",
  },
  {
    id: 8,
    Response: "creating software based of book summary",
    Reward: "eight",
  },
  {
    id: 9,
    Response: "eating healty food",
    Reward: "eleven",
  },
  {
    id: 10,
    Response: "netwoking/connecting/socializing/talking ",
    Reward: "fourteen",
  },
  {
    id: 11,
    Response: "helping people",
    Reward: "seventeen",
  },
  {
    id: 12,
    Response: "working on busines",
    Reward: "twenty",
  },
  {
    id: 13,
    Response: "solving own problems",
    Reward: "tthree",
  },
  {
    id: 14,
    Response: "learning new stuff through building",
    Reward: "tsix",
  },
  {
    id: 15,
    Response: "8 hours of sleeping",
    Reward: "tnine",
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

  return (
    <div className='min-h-full pt-10 pb-20 bg-stone-950'>
      <div>
        {responseReward.map((list) => (
          <div
            className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 last:border-b-0 pl-3 flex items-center'
            key={list.id}
            title={list[currentSegment]}
          >
            <p className='overflow-hidden text-ellipsis'>
              {list[currentSegment]}
            </p>
          </div>
        ))}
      </div>
      <SegmentButtons
        segmentBtnTextList={segmentBtnTextList}
        handleSegmentChange={handleSegmentChange}
        currentSegment={currentSegment}
      />
    </div>
  );
}
export default Home;
