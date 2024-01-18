import { useGoogleLogin } from "@react-oauth/google";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import axios from "axios";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import {
  API_KEY,
  CLIENT_ID,
  REDIRECT_URI,
  SCOPE,
  SECRET_KEY,
} from "../constants";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const loginG = useGoogleLogin({
  //   onSuccess: (tokenResponse) => console.log(tokenResponse),
  // });
  const { mutate: login, isLoading } = useMutation({
    // mutationFn: () => "test",
    mutationFn: useGoogleLogin({
      scope: SCOPE,
      onSuccess: async (tokenResponse) => {
        try {
          const response = await axios.get(
            `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${API_KEY}`,
            {
              headers: {
                Authorization: "Bearer " + tokenResponse.access_token,
                Accept: "application/json",
              },
            }
          );

          console.log(response);

          queryClient.setQueryData(
            ["youtubeSubscriptions"],
            response.data.items
          );
          navigate("/response", { replace: true });
        } catch (error) {
          console.error("useLogin Error", error.message);
          toast.error("Failed to signin");
        }
      },
    }),
  });

  return { login, isLoading };
}
