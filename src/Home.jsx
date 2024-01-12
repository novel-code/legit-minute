import { useEffect, useReducer, useState } from "react";

const defaultData = [
  {
    response: "praying", // AH
    reward: "playing football", // NAH
  },
  {
    response: "working out in gym",
    reward: "listening music",
  },
  {
    response: "creating content on LinkedIn",
    reward: "watching youtube",
  },
  {
    response: "creating content for novel code",
    reward: "scrolling on LinkedIn",
  },
  {
    response: "creating personal projects",
    reward: "eating food processed food",
  },
  {
    response: "books/articles/blogs/linkedin implementing immediately on any A",
    reward: "two",
  },
  {
    response: "gathering info through books",
    reward: "five",
  },
  {
    response: "creating software based of book summary",
    reward: "eight",
  },
  {
    response: "eating healty food",
    reward: "eleven",
  },
  {
    response: "netwoking/connecting/socializing/talking ",
    reward: "fourteen",
  },
  {
    response: "helping people",
    reward: "seventeen",
  },
  {
    response: "working on busines",
    reward: "twenty",
  },
  {
    response: "solving own problems",
    reward: "tthree",
  },
  {
    response: "learning new stuff through building",
    reward: "tsix",
  },
  {
    response: "8 hours of sleeping",
    reward: "tnine",
  },
];

function Home() {
  console.log("rendering");
  return (
    // <div className='h-full bg-stone-950 sm:bg-red-600 md:bg-blue-600 lg:bg-green-500'>
    <div className='h-full bg-stone-950'>
      <div className='absolute inset-x-0 ml-auto mr-auto text-center bottom-5'>
        <button className='w-24 py-2 rounded-tl-lg rounded-bl-lg bg-stone-800 hover:bg-stone-900 '>
          Response
        </button>
        <button className='w-24 py-2 rounded-tr-lg rounded-br-lg bg-stone-800 hover:bg-stone-900'>
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
