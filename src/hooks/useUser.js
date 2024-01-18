import { useQuery } from "@tanstack/react-query";

export function useUser() {
  const { isLoading, data: user } = useQuery({
    queryKey: ["user"],
    queryFn: async (getCurrentUser) => {},
  });

  return { isLoading, user, isAuthenticated: user?.role === "authenticated" };
}
