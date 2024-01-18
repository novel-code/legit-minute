// import { useQuery } from "@tanstack/react-query";
import { SCOPE } from "../constants";
import toast from "react-hot-toast";
import {
  useSession,
  useSessionContext,
  useSupabaseClient,
} from "@supabase/auth-helpers-react";

export function useAuth() {
  const session = useSession(); // tokens
  const supabase = useSupabaseClient(); // talk to supabase!
  const { isLoading } = useSessionContext();

  async function signIn() {
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

  // const { isLoading, data: user } = useQuery({
  //   queryKey: ["user"],
  //   queryFn: async function googleSignIn() {
  //     const { error } = await supabase.auth.signInWithOAuth({
  //       provider: "google",
  //       options: {
  //         scopes: SCOPE,
  //       },
  //     });
  //     if (error) {
  //       toast.error("Error logging in to Google provider with supabase");
  //       console.log(error);
  //     }
  //   },
  // });

  // return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
  // return {
  //   isLoading,
  //   isAuthenticated: session.user.role === "authenticated",
  //   login,
  //   logout,
  // };
  return {
    isAuthenticated: session?.user?.role === "authenticated",
    isLoading,
    signIn,
    signOut,
  };
}

// async function getCurrentUser() {
//   const { data: session } = await supabase.auth.getSession();
//   if (!session.session) return null;
//   const { data, error } = await supabase.auth.getUser();
//   if (error) throw new Error(error.message);
//   return data?.user;
// }
