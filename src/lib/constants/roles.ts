import type { UserRole } from "@/types/user";

export const ROLES: Record<string, UserRole> = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export const ROLE_LABELS: Record<UserRole, string> = {
  ADMIN: "Administrator",
  USER: "Tenant",
} as const;
