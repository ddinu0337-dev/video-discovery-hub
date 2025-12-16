import { recentVideos, searchResults } from "@/data/mockVideos";
import type { Video } from "@/types/video";

// Simulated API delay
const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const videoService = {
  async getRecentVideos(): Promise<Video[]> {
    await simulateDelay(300);
    return recentVideos;
  },

  async searchVideos(query: string): Promise<Video[]> {
    await simulateDelay(800);
    // In real implementation, this would call the FastAPI backend
    // For now, return mock results filtered by query
    return searchResults.filter(
      (video) =>
        video.title.toLowerCase().includes(query.toLowerCase()) ||
        video.channel.toLowerCase().includes(query.toLowerCase())
    );
  },
};
