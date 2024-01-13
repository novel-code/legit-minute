import { useState } from "react";

const defaultData = [
  {
    id: 1,
    Response: "praying", // AH
    Reward: "playing football", // NAH
  },
  {
    id: 2,
    Response: "working out in gym",
    Reward: "listening music",
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
  {
    id: 16,
    Response: "68 hours of sleeping",
    Reward: "tnine",
  },
  {
    id: 17,
    Response: "78 hours of sleeping",
    Reward: "tnine",
  },
  {
    id: 18,
    Response: "88 hours of sleeping",
    Reward: "tnine",
  },
  {
    id: 19,
    Response: "89 hours of sleeping",
    Reward: "tnine",
  },
  {
    id: 20,
    Response: "82 hours of sleeping",
    Reward: "tnine",
  },
];

function Home() {
  const [segment, setSegment] = useState("Response");
  const [responseReward] = useState(defaultData);

  function handleSegmentChange(e) {
    setSegment(e.target.innerText);
  }

  return (
    <div className='min-h-full pt-10 pb-20 bg-stone-950'>
      <div>
        {responseReward.map((list) => (
          <div
            className='border-[1px] border-r-0 text-nowrap cursor-default border-l-0 border-stone-800 min-h-10 first:border-t-0 last:border-b-0 pl-3 flex items-center'
            key={list.id}
            title={list[segment]}
          >
            <p className='overflow-hidden text-ellipsis'>{list[segment]}</p>
          </div>
        ))}
      </div>

      <div className='fixed inset-x-0 ml-auto mr-auto text-center bottom-5'>
        <button
          onClick={handleSegmentChange}
          className={
            "w-24 py-2 duration-300  rounded-tl-lg rounded-bl-lg bg-stone-800 hover:bg-stone-900" +
            ` ${segment === "Response" ? "bg-stone-900" : ""}`
          }
        >
          Response
        </button>
        <button
          onClick={handleSegmentChange}
          className={
            "w-24 py-2 duration-300  rounded-tr-lg rounded-br-lg bg-stone-800 hover:bg-stone-900" +
            ` ${segment === "Reward" ? "bg-stone-900" : ""}`
          }
        >
          Reward
        </button>
      </div>
    </div>
  );
}
export default Home;
