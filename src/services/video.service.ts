import { recentVideos, searchResults } from "@/data/mockVideos";
import type { Video } from "@/types/video";

// Simulated API delay
const simulateDelay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export const videoService = {
  async getRecentVideos(): Promise<Video[]> {
    await simulateDelay(300);
    return recentVideos;
  },

  async searchVideos(_query: string): Promise<Video[]> {
    await simulateDelay(600);
    // In real implementation, this would call the FastAPI backend
    // For now, return all mock results
    return searchResults;
  },
};
