import { Outlet } from "react-router-dom";

function AppLayout() {
  // <div className="overflow-scroll">
  // <main className="max-w-3xl mx-auto">
  //  sm:max-w-sm md:max-w-screen-md lg:max-w-screen-lg
  /*
<span
  className="inline-flex -space-x-px overflow-hidden bg-white border rounded-md shadow-sm dark:border-gray-800 dark:bg-gray-900"
>
  <button
    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
  >
    Edit
  </button>

  <button
    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
  >
    View
  </button>

  <button
    className="inline-block px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50 focus:relative dark:text-gray-200 dark:hover:bg-gray-800"
  >
    Delete
  </button>
</span>
  */

  return (
    <div className='relative h-screen bg-red-400'>
      {/* <h3>Legit Minute</h3> */}
      {/* <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/avF5SdWVIRc?si=d6p_M16zKyzj5HN5'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe>
      <iframe
        width='560'
        height='315'
        src='https://www.youtube.com/embed/avF5SdWVIRc?si=d6p_M16zKyzj5HN5'
        title='YouTube video player'
        frameborder='0'
        allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
        allowfullscreen
      ></iframe> */}
      <Outlet />
    </div>
  );

  // <div className='flex flex-col justify-center h-dvh bg-slate-300'>

  /* <main className='self-center bg-slate-200'> */

  /* </main> */

  // </div>
}

export default AppLayout;
