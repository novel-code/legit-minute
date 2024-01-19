import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateResponseItem() {
  const supabase = useSupabaseClient();
  const queryClient = useQueryClient();

  const { mutate: updateResponseItem, isLoading } = useMutation({
    mutationFn: async function apiIsCompleted({ isCompleted, id, response }) {
      // response is response item's text (task)
      let query = supabase.from("response-reward");

      if (!response) query = query.update({ isCompleted }).eq("id", id);
      if (response?.trim()) {
        if (response?.trim()?.length > 60)
          throw new Error("less than 60 charecters please");
        query = query.update({ response, isCompleted: false }).eq("id", id);
      }

      const { error } = await query;

      if (error) {
        console.error(error);
        throw new Error("Response could not be updated");
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ["alldata"],
      });
      toast.success("Updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateResponseItem, isLoading };
}
