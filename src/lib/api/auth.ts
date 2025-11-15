import { apiClient, setAuthToken, setRefreshToken, clearAuth } from "./client";
import type {
  LoginCredentials,
  RegisterData,
  AuthResponse,
  User,
} from "@/types/user";
import type { ApiResponse } from "@/types/api";

export const authApi = {
  /**
   * Login user
   */
  login: async (
    credentials: LoginCredentials
  ): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      "/auth/login",
      credentials
    );

    // Store tokens
    const { token, refreshToken } = response.data.data;
    setAuthToken(token);
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }

    return response.data;
  },

  /**
   * Register new user (tenant)
   */
  register: async (data: RegisterData): Promise<ApiResponse<AuthResponse>> => {
    const response = await apiClient.post<ApiResponse<AuthResponse>>(
      "/auth/register",
      { ...data, role: "USER" }
    );

    // Store tokens
    const { token, refreshToken } = response.data.data;
    setAuthToken(token);
    if (refreshToken) {
      setRefreshToken(refreshToken);
    }

    return response.data;
  },

  /**
   * Get current user
   */
  me: async (): Promise<ApiResponse<{ user: User }>> => {
    const response = await apiClient.get<ApiResponse<{ user: User }>>(
      "/auth/me"
    );
    return response.data;
  },

  /**
   * Logout user
   */
  logout: async (): Promise<ApiResponse<{ message: string }>> => {
    const response = await apiClient.post<ApiResponse<{ message: string }>>(
      "/auth/logout"
    );
    clearAuth();
    return response.data;
  },

  /**
   * Refresh access token
   */
  refreshToken: async (
    refreshToken: string
  ): Promise<ApiResponse<{ token: string }>> => {
    const response = await apiClient.post<ApiResponse<{ token: string }>>(
      "/auth/refresh",
      { refreshToken }
    );

    const { token } = response.data.data;
    setAuthToken(token);

    return response.data;
  },

  /**
   * Request password reset
   */
  forgotPassword: async (
    email: string
  ): Promise<ApiResponse<{ message: string }>> => {
    const response = await apiClient.post<ApiResponse<{ message: string }>>(
      "/auth/forgot-password",
      { email }
    );
    return response.data;
  },

  /**
   * Reset password with token
   */
  resetPassword: async (
    token: string,
    password: string
  ): Promise<ApiResponse<{ message: string }>> => {
    const response = await apiClient.post<ApiResponse<{ message: string }>>(
      "/auth/reset-password",
      { token, password }
    );
    return response.data;
  },
};
