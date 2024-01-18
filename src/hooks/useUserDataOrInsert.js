import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useQuery } from "@tanstack/react-query";
import { defaultData } from "../defaultData";
import toast from "react-hot-toast";

export function useUserDataOrInsert() {
  const session = useSession();
  const supabase = useSupabaseClient();
  const { data, isLoading } = useQuery({
    retry: false,
    queryKey: ["alldata"],
    queryFn: async function alldata() {
      if (session?.user?.role !== "authenticated") return [];
      const user_id = session.user.id;

      const { data, error } = await supabase
        .from("response-reward")
        .select("id,response,reward,isCompleted")
        .eq("user_id", user_id);
      if (error)
        throw new Error("Error occured while getting data for existing user");

      if (data.length === 0) {
        const { data, error } = await supabase
          .from("response-reward")
          .insert(defaultData)
          .select("id,response,reward,isCompleted");
        if (error)
          throw new Error("Error occured while inserting data for new user");
        return data;
      }

      return data;
    },
    onError: (error) => {
      console.error(error);
      toast.error(error.message);
    },
    onSuccess: () => {
      toast.success("Data loaded successfully");
    },
  });

  return { data, isLoading };
}
