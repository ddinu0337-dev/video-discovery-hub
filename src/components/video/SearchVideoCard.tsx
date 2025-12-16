import { Eye, Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import VideoThumbnail from "./VideoThumbnail";

interface SearchVideoCardProps {
  video: Video;
  index?: number;
}

const SearchVideoCard = ({ video, index = 0 }: SearchVideoCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: index * 0.04 }}
      className="group cursor-pointer rounded-xl bg-card border border-border/50 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
    >
      <VideoThumbnail
        src={video.thumbnail}
        alt={video.title}
        duration={video.duration}
        className="rounded-none"
      />

      <div className="p-3 space-y-1.5">
        <h3 className="font-semibold text-foreground text-sm leading-snug line-clamp-2 group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {video.description}
        </p>

        <p className="text-xs font-medium text-foreground">
          {video.channel}
        </p>

        <div className="flex items-center gap-3 text-xs text-muted-foreground pt-0.5">
          <span className="flex items-center gap-1">
            <Eye className="h-3 w-3" />
            {video.views}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {video.duration}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default SearchVideoCard;
