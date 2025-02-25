import { NextResponse } from 'next/server';

const endpoints = {
	users: 'https://randomuser.me/api',
	comments: 'https://jsonplaceholder.typicode.com/comments',
	posts: 'https://jsonplaceholder.typicode.com/posts'
};
export function middleware(request) {
	const userAccessToken = request.cookies.get('accessToken');
	const parts = request.url.split('/');
	const context = parts[1];
	let endpoint = endpoints[context];
	/* request.url = endpoint;
	if (context) {
		if (request.nextUrl?.pathname && !request.nextUrl.pathname.startsWith('/dashboard')) {
			return NextResponse.redirect(new URL('/dashboard/overview', request.url));
		}
	} */
	return NextResponse.next();
}

export const config = {
	matcher: '/api/:path*'
};
