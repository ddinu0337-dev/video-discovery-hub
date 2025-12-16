import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import VideoThumbnail from "./VideoThumbnail";

interface VideoCardProps {
  video: Video;
  variant?: "default" | "compact";
  index?: number;
}

const VideoCard = ({ video, variant = "default", index = 0 }: VideoCardProps) => {
  const isCompact = variant === "compact";

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`group cursor-pointer ${isCompact ? "w-[280px] flex-shrink-0" : ""}`}
    >
      <VideoThumbnail
        src={video.thumbnail}
        alt={video.title}
        duration={video.duration}
      />

      {/* Info */}
      <div className={`mt-3 ${isCompact ? "space-y-1" : "space-y-1.5"}`}>
        <h3
          className={`font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors ${
            isCompact ? "text-sm" : "text-base"
          }`}
        >
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{video.channel}</span>
          <span>•</span>
          <span>{video.views}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default VideoCard;
