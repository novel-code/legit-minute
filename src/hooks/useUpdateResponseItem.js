import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export function useUpdateResponseItem() {
  const supabase = useSupabaseClient();
  const queryClient = useQueryClient();

  const { mutate: updateIsCompleted, isLoading } = useMutation({
    mutationFn: async function apiIsCompleted({ isCompleted, id }) {
      const { error } = await supabase
        .from("response-reward")
        .update({ isCompleted: isCompleted })
        .eq("id", id);

      if (error) {
        console.error(error);
        throw new Error("Response could not be updated");
      }
      queryClient.invalidateQueries({
        queryKey: ["alldata"],
      });
    },
    onSuccess: () => {
      toast.success("Updated successfully");
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  return { updateIsCompleted, isLoading };
}
