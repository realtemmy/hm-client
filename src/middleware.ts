import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Note: JWT verification would typically be done here with jose library
// However, since we're using localStorage for tokens (client-side only),
// we'll implement a simpler version that checks for token existence
// In production with HTTP-only cookies, you'd verify the JWT here

// Define public routes that don't require authentication
const publicRoutes = ["/", "/login", "/register/tenant", "/forgot-password"];

// Define role-based route prefixes (only ADMIN and USER/tenant)
const roleRoutes = {
  admin: "/admin",
  tenant: "/tenant",
};

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Allow public routes
  if (publicRoutes.some((route) => pathname === route || pathname.startsWith("/reset-password"))) {
    return NextResponse.next();
  }

  // Check for auth token in cookies
  const token = request.cookies.get("hms_auth_token")?.value;

  // If no token and trying to access protected route, redirect to login
  if (!token && !publicRoutes.includes(pathname)) {
    const loginUrl = new URL("/login", request.url);
    loginUrl.searchParams.set("from", pathname);
    return NextResponse.redirect(loginUrl);
  }

  // If has token and trying to access login/register, redirect to appropriate dashboard
  if (token && (pathname === "/login" || pathname.startsWith("/register"))) {
    // In a real implementation, you'd decode the JWT to get the role
    // For now, we'll just redirect to a generic dashboard
    // The client-side auth will handle the correct redirection
    return NextResponse.redirect(new URL("/", request.url));
  }

  return NextResponse.next();
}

// Configure which routes use this middleware
export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public files (images, etc.)
     */
    "/((?!api|_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)",
  ],
};
