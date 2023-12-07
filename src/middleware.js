import { getToken } from "next-auth/jwt";
import { NextResponse } from "next/server";


export async function middleware(request) {
  const { pathname } = request.nextUrl;

  const token = await getToken({ req: request });

  // * Protected routes for user
  const userProtectedRoutes = [];

  // * Protected routes for admin
  const adminProtectedRoutes = ["/admin/dashboard","/api/properties/admin"];

  if (
    token == null &&
    (userProtectedRoutes.includes(pathname) ||
      adminProtectedRoutes.includes(pathname))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  //   * Get user from token
  const user = token?.user;

  // * if user try to access admin routes
  if (adminProtectedRoutes.includes(pathname) && user.role == "User") {
    console.log(pathname)
    console.log(user)
    return NextResponse.redirect(new URL("/", request.url));
  }
  
  //   * If Admin try to access user routes
  if (userProtectedRoutes.includes(pathname) && user.role == "Admin") {
    console.log(user)
    return NextResponse.redirect(
      new URL(
        "/login?error=Please login first to access this route.",
        request.url
      )
    );
  }
}
