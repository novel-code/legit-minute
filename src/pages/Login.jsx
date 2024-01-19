import { useEffect } from "react";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";

function Login() {
  const { isAuthenticated, isLoading, signIn } = useAuth();
  const navigate = useNavigate();

  useEffect(
    function () {
      if (isAuthenticated) {
        navigate("/response", { replace: true });
      }
    },
    [isAuthenticated, navigate]
  );

  function googleSignIn() {
    signIn();
  }

  // function googleSignOut() {
  //   signOut();
  // }

  // console.log(session);

  // if (session)
  //   return (
  //     <>
  //       <div>{session.user.email}</div>;
  //       <button onClick={googleSignOut}>Sign Out</button>
  //     </>
  //   );

  // if (isLoading) {
  //   return <p>Loading</p>;
  // }

  return (
    <div>
      <div className='mt-20 text-center '>
        <h1 className='text-2xl'>Take action and avoid FOMO!</h1>
        <h3 className='w-[80%] mt-10 ml-auto mr-auto text-sm '>
          Every minute is legit, so respond and get YouTube videos as a reward.
        </h3>
        <p className='fixed text-xs bottom-20 inset-x-10'>
          {"(youtube permission required)"}
        </p>
      </div>
      <button
        disabled={isLoading}
        className='fixed px-2 py-2 text-center duration-300 rounded-lg inset-x-10 bottom-8 lg:hover:bg-stone-900 bg-stone-800'
        onClick={googleSignIn}
      >
        {isLoading ? "Loading..." : "Sign In With Google"}
      </button>
    </div>
  );
}

export default Login;
