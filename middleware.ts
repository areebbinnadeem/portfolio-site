import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const adminToken = process.env.NEXT_PUBLIC_ADMIN_TOKEN;
  const token = request.headers.get("Authorization");

  if (token !== `Bearer ${adminToken}`) {
    console.log("Unauthorized access attempt");
    return NextResponse.redirect(new URL("/unauthorized", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/dashboard/:path*",
  
};
