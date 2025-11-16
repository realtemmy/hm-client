export const config = {
  api: {
    baseUrl: process.env.NEXT_PUBLIC_API_URL || "http://localhost:3300/api",
  },
  auth: {
    cookieName:
      process.env.NEXT_PUBLIC_AUTH_COOKIE_NAME || "auth-token",
  },
  app: {
    name: process.env.NEXT_PUBLIC_APP_NAME || "Housing Management System",
    url: process.env.NEXT_PUBLIC_APP_URL || "http://localhost:3000",
  },
  upload: {
    maxFileSize: Number(process.env.NEXT_PUBLIC_MAX_FILE_SIZE) || 5242880, // 5MB
    allowedFileTypes:
      process.env.NEXT_PUBLIC_ALLOWED_FILE_TYPES ||
      "image/jpeg,image/png,image/webp,application/pdf",
  },
  features: {
    notifications:
      process.env.NEXT_PUBLIC_ENABLE_NOTIFICATIONS === "true",
    analytics: process.env.NEXT_PUBLIC_ENABLE_ANALYTICS === "true",
  },
} as const;
