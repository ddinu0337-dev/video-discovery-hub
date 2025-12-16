import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import VideoCard from "./VideoCard";

interface VideoGridProps {
  videos: Video[];
  variant?: "default" | "compact";
}

const VideoGrid = ({ videos, variant = "default" }: VideoGridProps) => {
  if (variant === "compact") {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-5">
        {videos.map((video, index) => (
          <VideoCard key={video.id} video={video} variant="compact" index={index} />
        ))}
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3 }}
      className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
    >
      {videos.map((video, index) => (
        <VideoCard key={video.id} video={video} index={index} />
      ))}
    </motion.div>
  );
};

export default VideoGrid;
