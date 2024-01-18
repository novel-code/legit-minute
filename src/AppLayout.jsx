import { NavLink, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className='relative h-screen '>
      <Outlet />
      <div className='fixed inset-x-0 ml-auto mr-auto text-center bottom-5 '>
        <NavLink
          to={"/response"}
          className={({ isActive }) =>
            isActive
              ? "inline-block w-24 py-2 duration-300 lg:hover:bg-stone-900 rounded-tl-lg rounded-bl-lg bg-stone-900"
              : "inline-block w-24 py-2 duration-300 lg:hover:bg-stone-900 rounded-tl-lg rounded-bl-lg bg-stone-800 "
          }
        >
          Response
        </NavLink>
        <NavLink
          to={"/reward"}
          className={({ isActive }) =>
            isActive
              ? "inline-block w-24 py-2 duration-300 lg:hover:bg-stone-900 rounded-tr-lg rounded-br-lg bg-stone-900"
              : "inline-block w-24 py-2 duration-300 lg:hover:bg-stone-900 rounded-tr-lg rounded-br-lg bg-stone-800 "
          }
        >
          Reward
        </NavLink>
      </div>
    </div>
  );
}

export default AppLayout;
