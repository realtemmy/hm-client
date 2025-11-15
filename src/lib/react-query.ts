import { QueryClient } from "@tanstack/react-query";

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      gcTime: 10 * 60 * 1000, // 10 minutes (matches access token expiry)
      refetchOnWindowFocus: false,
      retry: 1,
    },
    mutations: {
      retry: false,
    },
  },
});

// Token expiry configuration (based on backend)
export const TOKEN_CONFIG = {
  ACCESS_TOKEN_EXPIRY: 10 * 60 * 1000, // 10 minutes
  REFRESH_TOKEN_EXPIRY: 24 * 60 * 60 * 1000, // 1 day
  REFRESH_BEFORE_EXPIRY: 9 * 60 * 1000, // Refresh at 9 minutes (before 10min expiry)
} as const;
