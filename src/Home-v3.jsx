import { useEffect, useReducer, useState } from "react";

const defaultData = [
  {
    id: 1,
    response: "praying", // AH
    reward: "playing football", // NAH
  },
  {
    id: 2,
    response: "working out in gym",
    reward: "listening music",
  },
  {
    id: 3,
    response: "creating content on LinkedIn",
    reward: "watching youtube",
  },
  {
    id: 4,
    response: "creating content for novel code",
    reward: "scrolling on LinkedIn",
  },
  {
    id: 5,
    response: "creating personal projects",
    reward: "eating food processed food",
  },
  {
    id: 6,
    response: "books/articles/blogs/linkedin implementing immediately on any A",
    reward: "two",
  },
  {
    id: 7,
    response: "gathering info through books",
    reward: "five",
  },
  {
    id: 8,
    response: "creating software based of book summary",
    reward: "eight",
  },
  {
    id: 9,
    response: "eating healty food",
    reward: "eleven",
  },
  {
    id: 10,
    response: "netwoking/connecting/socializing/talking ",
    reward: "fourteen",
  },
  {
    id: 11,
    response: "helping people",
    reward: "seventeen",
  },
  {
    id: 12,
    response: "working on busines",
    reward: "twenty",
  },
  {
    id: 13,
    response: "solving own problems",
    reward: "tthree",
  },
  {
    id: 14,
    response: "learning new stuff through building",
    reward: "tsix",
  },
  {
    id: 15,
    response: "8 hours of sleeping",
    reward: "tnine",
  },
];

function Home() {
  const [segment, setSegment] = useState("Response");

  function handleSegmentChange(e) {
    setSegment(e.target.innerText);
  }

  return (
    // <div className='h-full bg-stone-950 sm:bg-red-600 md:bg-blue-600 lg:bg-green-500'>
    <div className='h-full bg-stone-950'>
      {defaultData.map((list) => (
        <div key={list.id}>{list.reward}</div>
      ))}
      <div className='absolute inset-x-0 ml-auto mr-auto text-center bottom-5'>
        <button
          onClick={handleSegmentChange}
          className={
            "w-24 py-2 duration-300 rounded-tl-lg rounded-bl-lg bg-stone-800 hover:bg-stone-900" +
            ` ${segment === "Response" ? "bg-stone-900" : ""}`
          }
        >
          Response
        </button>
        <button
          onClick={handleSegmentChange}
          className={
            "w-24 py-2 duration-300 rounded-tr-lg rounded-br-lg bg-stone-800 hover:bg-stone-900" +
            ` ${segment === "Reward" ? "bg-stone-900" : ""}`
          }
        >
          Reward
        </button>
        {/* <span className='inline-flex -space-x-px overflow-hidden bg-white border rounded-md shadow-sm dark:border-gray-800 dark:bg-gray-900'>
          <button className='inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800'>
            Response
          </button>
          <button className='inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800'>
            Reward
          </button>
        </span> */}
      </div>
    </div>
  );
}
export default Home;
