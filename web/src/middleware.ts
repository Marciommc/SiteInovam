import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
    // Check if the request is for the admin dashboard
    if (request.nextUrl.pathname.startsWith('/admin')) {
        // Skip checking for the login page itself to avoid redirect loops
        if (request.nextUrl.pathname === '/admin/login') {
            return NextResponse.next()
        }

        // Check for session cookie
        const session = request.cookies.get('session')

        // If no session, redirect to login
        if (!session) {
            return NextResponse.redirect(new URL('/admin/login', request.url))
        }
    }

    return NextResponse.next()
}

export const config = {
    matcher: '/admin/:path*',
}
