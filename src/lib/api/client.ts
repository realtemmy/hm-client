import axios, { type AxiosInstance, type AxiosError } from "axios";
import { config } from "@/lib/config";

// Create axios instance
export const apiClient: AxiosInstance = axios.create({
  // baseURL: config.api.baseUrl,
  baseURL: "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true, // Important for cookies
});

// Request interceptor - Add auth token
apiClient.interceptors.request.use(
  (config) => {
    // Get token from cookie or localStorage
    const accessToken = getAuthToken();
    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Response interceptor - Handle errors and token refresh
apiClient.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error: AxiosError) => {
    const originalRequest = error.config as any;

    console.log("Axios Error: ", error.config);

    // Handle 401 Unauthorized
    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        // Try to refresh token
        const refreshToken = getRefreshToken();
        console.log("Refresh token: ", refreshToken);
        if (refreshToken) {
          const response = await axios.post(
            // `${config.api.baseUrl}/auth/refresh`,
            "http://localhost:3300/api/user/auth/refresh",
            {},
            { withCredentials: true }
          );
          const { accessToken } = response.data.data;

          setAuthToken(accessToken);

          // Retry original request with new token
          originalRequest.headers.authorization = `Bearer ${accessToken}`;
          return apiClient(originalRequest);
        }
      } catch (refreshError) {
        // Refresh failed, redirect to login
        clearAuth();
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
        return Promise.reject(refreshError);
      }
    }

    return Promise.reject(error);
  }
);

// Helper functions for token management (using cookies for SSR compatibility)
export function getAuthToken(): string | null {
  return localStorage.getItem("auth-token");
}

export function setAuthToken(accessToken: string): void {
  if (!accessToken) return;
  localStorage.setItem("auth-token", accessToken);
}

export function getRefreshToken(): string | null {
  if (typeof window === "undefined") return null;
  const name = "refresh_token=";
  const decodedCookie = decodeURIComponent(document.cookie);
  const ca = decodedCookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    const c = ca[i].trim();
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return null;
}

export function setRefreshToken(token: string): void {
  if (typeof window === "undefined") return;
  // Store refresh token with 1 day expiry
  document.cookie = `refresh_token=${token}; path=/; max-age=86400; SameSite=Strict`;
}

export function clearAuth(): void {
  if (!localStorage.getItem("auth-token")) return;
  // Clear both tokens by setting max-age to 0
  localStorage.removeItem("auth-token");
}
