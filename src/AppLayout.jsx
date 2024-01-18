import { Link, Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <div className='relative h-screen '>
      <Outlet />
      <Link to={"/reward"}>reward</Link>
    </div>
  );
}

export default AppLayout;
