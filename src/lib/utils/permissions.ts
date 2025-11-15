import type { User, UserRole } from "@/types/user";

/**
 * Check if user has a specific role
 */
export function hasRole(user: User | null, role: UserRole | UserRole[]): boolean {
  if (!user) return false;

  if (Array.isArray(role)) {
    return role.includes(user.role);
  }

  return user.role === role;
}

/**
 * Check if user is admin
 */
export function isAdmin(user: User | null): boolean {
  return hasRole(user, "ADMIN");
}

/**
 * Check if user is tenant (USER role)
 */
export function isTenant(user: User | null): boolean {
  return hasRole(user, "USER");
}

/**
 * Check if user is a regular user (tenant)
 */
export function isUser(user: User | null): boolean {
  return hasRole(user, "USER");
}

/**
 * Get dashboard URL based on user role
 */
export function getDashboardUrl(user: User | null): string {
  if (!user) return "/login";

  switch (user.role) {
    case "ADMIN":
      return "/admin/dashboard";
    case "USER":
      return "/tenant/dashboard";
    default:
      return "/";
  }
}
