export type UserRole = "ADMIN" | "USER";

export interface User {
  id: string;
  email: string;
  name: string;
  phone?: string;
  bio?: string;
  photo?: string;
  role: UserRole;
  provider: string;
  providerId?: string;
  createdAt: string;
  updatedAt: string;
}

export interface Tenant {
  id: string;
  userId: string;
  movedInAt?: string;
  movedOutAt?: string;
  emergencyContact?: string;
  metadata?: Record<string, unknown>;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  email: string;
  password: string;
  name: string;
  phone?: string;
  role: "ADMIN" | "USER";
}

export interface AuthResponse {
  user: User;
  accessToken: string;
  refreshToken?: string;
}
