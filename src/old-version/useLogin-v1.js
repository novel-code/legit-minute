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
      // redirect_uri: REDIRECT_URI,
      // flow: "auth-code",
      onSuccess: async (tokenResponse) => {
        // console.log("codeResponse", codeResponse);

        // const resp = await axios.post(
        //   "https://www.googleapis.com/oauth2/v4/token",
        //   {
        //     code: codeResponse.code,
        //     redirect_uri: REDIRECT_URI,
        //     client_secret: SECRET_KEY,
        //     client_id: CLIENT_ID,
        //     scope: SCOPE,
        //     grant_type: "authorization_code",
        //   },
        //   {
        //     headers: {
        //       Accept: "json",
        //     },
        //   }
        // );

        // console.log("resp", resp);

        const response = await axios.get(
          `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${API_KEY}`,
          {
            headers: {
              Authorization: "Bearer " + tokenResponse.access_token,
              // Authorization: "Bearer " + resp.data.access_token,
              Accept: "application/json",
            },
          }
        );

        console.log("subs", response);

        // console.log(codeResponse);
        // const tokens = await axios.post("http://localhost:3001/auth/google", {
        //   code: codeResponse.code,
        // });

        // console.log(tokens);
      },
      // onSuccess: (tokenResponse) => {
      //   // queryClient.setQueryData(["user"], user.user);
      //   queryClient.setQueryData(["tokenResponse"], tokenResponse.access_token);

      //   console.log(tokenResponse);

      //   const response = axios.get(
      //     `https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet%2CcontentDetails&mine=true&key=${API_KEY}`,
      //     {
      //       headers: {
      //         Authorization: "Bearer " + tokenResponse.access_token,
      //         Accept: "application/json",
      //       },
      //     }
      //   );

      //   console.log("subs", response);

      //   navigate("/response", { replace: true });
      // },
    }),
    onError: (err) => {
      console.log("err", err);
      toast.error("Failed to signin");
    },
  });

  return { login, isLoading };
}
