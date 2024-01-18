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

  if (isLoading) {
    return <p>Loading</p>;
  }

  return <button onClick={googleSignIn}>Sign In With Google</button>;
}

export default Login;
