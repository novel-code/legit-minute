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

  return {
    isAuthenticated: session?.user?.role === "authenticated",
    isLoading,
    signIn,
    signOut,
  };
}
