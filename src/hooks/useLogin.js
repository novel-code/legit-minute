import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();
  const queryClient = useQueryClient();
  // const { mutate: login, isLoading } = useMutation({
  //   mutationFn:
  // });

  return { login, isLoading, isAuthenticated };
}
