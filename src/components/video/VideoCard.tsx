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
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.03 }}
      className="group cursor-pointer rounded-xl bg-card border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <VideoThumbnail
        src={video.thumbnail}
        alt={video.title}
        duration={video.duration}
        className="rounded-none"
      />

      {/* Info */}
      <div className={`p-3 ${isCompact ? "space-y-1" : "space-y-1.5"}`}>
        <h3
          className={`font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors ${
            isCompact ? "text-sm" : "text-base"
          }`}
        >
          {video.title}
        </h3>
        <div className="flex items-center gap-2 text-xs text-muted-foreground">
          <span>{video.channel}</span>
          <span>•</span>
          <span>{video.views}</span>
        </div>
      </div>
    </motion.article>
  );
};

export default VideoCard;
