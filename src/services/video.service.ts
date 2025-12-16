import { API_CONFIG } from "@/config/api";
import { apiClient } from "@/lib/apiClient";
import { recentVideos } from "@/data/mockVideos";
import type { Video } from "@/types/video";
import type { VideoSearchRequest, VideoSearchResponse } from "@/types/api";

const mapApiVideoToVideo = (apiVideo: VideoSearchResponse["videos"][0]): Video => ({
  id: String(apiVideo.id),
  title: apiVideo.title,
  description: apiVideo.description,
  thumbnail: apiVideo.thumbnail.static,
  channel: apiVideo.channel,
  duration: apiVideo.length,
  views: formatViews(apiVideo.views),
  link: apiVideo.link,
});

const formatViews = (views: number): string => {
  if (views >= 1_000_000) {
    return `${(views / 1_000_000).toFixed(1)}M views`;
  }
  if (views >= 1_000) {
    return `${(views / 1_000).toFixed(0)}K views`;
  }
  return `${views} views`;
};

export const videoService = {
  async getRecentVideos(): Promise<Video[]> {
    // For now, return mock data for recent videos
    return recentVideos;
  },

  async searchVideos(query: string): Promise<Video[]> {
    const response = await apiClient.post<VideoSearchRequest, VideoSearchResponse>(
      API_CONFIG.endpoints.videoSearch,
      { query }
    );

    return response.videos.map(mapApiVideoToVideo);
  },
};
