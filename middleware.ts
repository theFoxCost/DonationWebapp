import { NextResponse } from "next/server"
import { auth } from "./auth" // 👈 make sure this path matches your auth.ts

export async function middleware(req: { nextUrl: { pathname: string }; url: string | URL | undefined }) {
  const session = await auth() // get user session

  // If not signed in and visiting protected pages:
  if (!session && req.nextUrl.pathname.startsWith("/dashboard")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (!session && req.nextUrl.pathname.startsWith("/profile")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  if (!session && req.nextUrl.pathname.startsWith("/donate")) {
    return NextResponse.redirect(new URL("/login", req.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ["/dashboard/:path*", "/profile/:path*", "/donate/:path*"],
}
