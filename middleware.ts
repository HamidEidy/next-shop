'use server'
import { NextResponse } from "next/server";
export function middleware(req:any) {     
    const token = req.cookies.get('token');
    if (!token) {
        return NextResponse.redirect(new URL('/auth', req.url));
    }

}
export const config = {
    matcher: ['/profile/:path*', '/cart/:path*'],
}