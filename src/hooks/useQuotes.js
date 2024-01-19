import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useQuotes() {
  const { data, isLoading } = useQuery({
    queryKey: ["quotes"],
    retry: false,
    queryFn: async function getJokes() {
      try {
        const { data } = await axios.get(
          "https://api.quotable.io/quotes/random?limit=4"
        );
        return data;
      } catch (error) {
        toast.error("failed to get quotes");
        console.error(error);
      }
    },
  });

  return { data, isLoading };
}
