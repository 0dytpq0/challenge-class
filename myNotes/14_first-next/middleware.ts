import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  console.log("미들에워 안에 있습니다.");

  let helloCookie = request.cookies.get("hello");

  if (
    helloCookie?.value === "world" &&
    request.nextUrl.pathname !== "my-profile"
  ) {
    return NextResponse.redirect("http://localhost:3000/my-profile");
  }
  return NextResponse.next();
}

export const config = {
  matcher: [],
};
