import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";
import { SCOPE } from "../constants";
import toast from "react-hot-toast";

function Login() {
  // const navigate = useNavigate();
  // const { isAuthenticated, login, isLoading } = useLogin();
  // useAuth();

  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  if (isLoading) {
    return <p>Loading</p>;
  }

  // function handleLogin() {
  //   login();
  // }
  // useEffect(
  //   function () {
  //     if (isAuthenticated) {
  //       navigate("/response", { replace: true });
  //     }
  //   },
  //   [isAuthenticated, navigate]
  // );

  // if (isLoading) return <p>Loading.........</p>;
  // return <button onClick={handleLogin}>Login</button>;

  async function googleSignIn() {
    const { error } = await supabase.auth.signInWithOAuth({
      provider: "google",
      options: {
        scopes: SCOPE,
      },
    });
    if (error) {
      toast.error("Error logging in to Google provider with supabase");
      console.log(error);
    }
  }

  async function signOut() {
    await supabase.auth.signOut();
  }

  console.log(session);

  if (session)
    return (
      <>
        <div>{session.user.email}</div>;
        <button onClick={signOut}>Sign Out</button>
      </>
    );

  return <button onClick={googleSignIn}>Sign In With Google</button>;
}

export default Login;
