// Replace with your deployed API URL or ngrok URL
// Example: "https://your-api.railway.app" or "https://abc123.ngrok.io"
export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "https://your-api-url.com",
  endpoints: {
    videoSearch: "/api/v1/search/video_search",
  },
} as const;
