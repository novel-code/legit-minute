import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";

export function useJokes() {
  // https://official-joke-api.appspot.com/random_ten

  const { data, isLoading } = useQuery({
    queryKey: ["jokes"],
    retry: false,
    queryFn: async function getJokes() {
      try {
        const { data } = await axios.get(
          "https://v2.jokeapi.dev/joke/Any?amount=8"
        );
        return data.jokes;
      } catch (error) {
        toast.error("failed to get jokes");
        console.error(error);
      }
    },
  });

  return { data, isLoading };
}
