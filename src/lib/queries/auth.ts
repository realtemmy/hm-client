import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { authApi } from "@/lib/api/auth";
import type { LoginCredentials, RegisterData } from "@/types/user";
import { useRouter } from "next/navigation";

/**
 * Get current user
 */
export function useMe() {
  return useQuery({
    queryKey: ["user", "me"],
    queryFn: async () => {
      const response = await authApi.me();
      console.log("User hook: ", response.data);
      return response.data ?? null;
    },
    retry: false,
    staleTime: Infinity, // User data doesn't change often
  });
}

/**
 * Login mutation
 */
export function useLogin() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (credentials: LoginCredentials) => authApi.login(credentials),
    onSuccess: (data) => {
      const { user } = data.data;
      // Update user cache
      queryClient.setQueryData(["user", "me"], user);

      // Redirect based on role (ADMIN or USER)
      switch (user.role) {
        case "ADMIN":
          router.push("/admin/dashboard");
          break;
        case "USER":
          router.push("/tenant/dashboard");
          break;
        default:
          router.push("/");
      }
    },
  });
}

/**
 * Register mutation
 */
export function useRegister() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: (data: RegisterData) => authApi.register(data),
    onSuccess: (data) => {
      const { user } = data.data;

      // Update user cache
      queryClient.setQueryData(["user", "me"], user);

      // Users (tenants) can self-register, redirect to tenant dashboard
      router.push("/tenant/dashboard");
    },
  });
}

/**
 * Logout mutation
 */
export function useLogout() {
  const queryClient = useQueryClient();
  const router = useRouter();

  return useMutation({
    mutationFn: () => authApi.logout(),
    onSuccess: () => {
      // Clear all queries
      queryClient.clear();

      // Redirect to login
      router.push("/login");
    },
  });
}

/**
 * Forgot password mutation
 */
export function useForgotPassword() {
  return useMutation({
    mutationFn: (email: string) => authApi.forgotPassword(email),
  });
}

/**
 * Reset password mutation
 */
export function useResetPassword() {
  const router = useRouter();

  return useMutation({
    mutationFn: ({ token, password }: { token: string; password: string }) =>
      authApi.resetPassword(token, password),
    onSuccess: () => {
      // Redirect to login after successful password reset
      router.push("/login");
    },
  });
}
