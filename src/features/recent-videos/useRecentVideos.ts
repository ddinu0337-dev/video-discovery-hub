import { useState, useEffect } from "react";
import { videoService } from "@/services/video.service";
import type { Video } from "@/types/video";

export function useRecentVideos() {
  const [videos, setVideos] = useState<Video[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchRecentVideos = async () => {
      try {
        const data = await videoService.getRecentVideos();
        setVideos(data);
      } catch (error) {
        console.error("Failed to fetch recent videos:", error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchRecentVideos();
  }, []);

  return { videos, isLoading };
}
