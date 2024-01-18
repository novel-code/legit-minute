import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className='relative h-screen '>
      <Outlet />
    </div>
  );
}

export default AppLayout;
