// Public routes
export const PUBLIC_ROUTES = {
  HOME: "/",
  LOGIN: "/login",
  REGISTER_TENANT: "/register/tenant",
  FORGOT_PASSWORD: "/forgot-password",
  RESET_PASSWORD: "/reset-password",
} as const;

// Admin routes
export const ADMIN_ROUTES = {
  DASHBOARD: "/admin/dashboard",
  PROPERTIES: "/admin/properties",
  PROPERTIES_NEW: "/admin/properties/new",
  BUILDINGS: "/admin/buildings",
  UNITS: "/admin/units",
  UNITS_NEW: "/admin/units/new",
  TENANTS: "/admin/tenants",
  TENANTS_NEW: "/admin/tenants/new",
  LEASES: "/admin/leases",
  LEASES_NEW: "/admin/leases/new",
  INVOICES: "/admin/invoices",
  INVOICES_NEW: "/admin/invoices/new",
  PAYMENTS: "/admin/payments",
  MAINTENANCE: "/admin/maintenance",
  NOTIFICATIONS: "/admin/notifications",
  SETTINGS: "/admin/settings",
} as const;

// Tenant routes (USER role)
export const TENANT_ROUTES = {
  DASHBOARD: "/tenant/dashboard",
  MY_UNIT: "/tenant/my-unit",
  LEASE: "/tenant/lease",
  LEASE_RENEW: "/tenant/lease/renew",
  INVOICES: "/tenant/invoices",
  PAYMENTS: "/tenant/payments",
  MAINTENANCE: "/tenant/maintenance",
  MAINTENANCE_NEW: "/tenant/maintenance/new",
  DOCUMENTS: "/tenant/documents",
  PROFILE: "/tenant/profile",
} as const;
