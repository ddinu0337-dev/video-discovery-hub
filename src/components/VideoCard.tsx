import { Play } from "lucide-react";
import { motion } from "framer-motion";

export interface Video {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  duration: string;
  views: string;
}

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
      {/* Thumbnail */}
      <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary">
        <img
          src={video.thumbnail}
          alt={video.title}
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
        
        {/* Duration badge */}
        <div className="absolute bottom-2 right-2 rounded-md bg-foreground/80 px-1.5 py-0.5 text-xs font-medium text-background">
          {video.duration}
        </div>

        {/* Play overlay */}
        <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/10">
          <motion.div
            initial={{ scale: 0, opacity: 0 }}
            whileHover={{ scale: 1, opacity: 1 }}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-card/95 text-foreground shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300"
          >
            <Play className="h-6 w-6 fill-current ml-1" />
          </motion.div>
        </div>
      </div>

      {/* Info */}
      <div className={`mt-3 ${isCompact ? "space-y-1" : "space-y-1.5"}`}>
        <h3 className={`font-medium text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors ${isCompact ? "text-sm" : "text-base"}`}>
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
