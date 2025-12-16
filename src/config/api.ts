export const API_CONFIG = {
  baseUrl: import.meta.env.VITE_API_BASE_URL || "http://localhost:8000",
  endpoints: {
    videoSearch: "/api/v1/search/video_search",
  },
} as const;
