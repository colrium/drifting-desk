/** @type {import('next').NextConfig} */
const nextConfig = {
	experimental: {
		serverActions: true
	},
	async rewrites() {
		return [
			{
				source: '/api/users',
				destination: 'https://randomuser.me/api'
			},
			{
				source: '/api/comments',
				destination: 'https://jsonplaceholder.typicode.com/comments'
			},
			{
				source: '/api/posts',
				destination: 'https://jsonplaceholder.typicode.com/posts'
			}
		];
	}
};

export default nextConfig;
