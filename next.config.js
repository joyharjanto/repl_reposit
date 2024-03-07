/** @type {import('next').NextConfig} */
const nextConfig = {
	async redirects() {
		return [
			{
				source: "/sign-in",
				destination: "/api/auth/login",
				permanent: true,
			},
			{
				source: "/sign-up",
				destination: "/api/auth/register",
				permanent: true,
			},
			{
				source: "/sign-out",
				destination: "/api/auth/logout",
				permanent: true,
			},
			{
				source: "/api/videos/:path*",
				destination:
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:8000/api/videos/:path*"
						: "/api/videos/create",
				permanent: false,
				basePath: false,
			},
			{
				source: "/api/users/:path*",
				destination:
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:8000/api/users/:path*"
						: "/api/users/:path*",
				permanent: false,
				basePath: false,
			},
			{
				source: "/api/shorts/:path*",
				destination:
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:8000/api/shorts/:path*"
						: "/api/shorts/:path*",
				permanent: false,
				basePath: false,
			},
			{
				source: "/docs",
				destination:
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:8000/docs"
						: "/api/docs",
				permanent: false,
			},
			{
				source: "/openapi.json",
				destination:
					process.env.NODE_ENV === "development"
						? "http://127.0.0.1:8000/openapi.json"
						: "/api/openapi.json",
				permanent: false,
			},
		];
	},
	reactStrictMode: false,
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.resolve.alias.canvas = false;
		config.resolve.alias.encoding = false;
		return config;
	},
	images: {
		remotePatterns: [
			{ hostname: "lh3.googleusercontent.com" },
			// Add other domains as objects with hostname properties
		],
	},
	
};

module.exports = nextConfig;
