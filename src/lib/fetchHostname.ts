export const fetchWrapper = async (path: string, options: RequestInit = {}) => {
	const baseURL =
		process.env.NODE_ENV== "production" ? "" : "http://localhost:8000" // production
			? "http://localhost:8000"
			: "https://your-production-hostname.com";

	const url = `${baseURL}${path}`;

	return fetch(url, options);
};