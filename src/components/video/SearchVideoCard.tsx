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
      className="group cursor-pointer"
    >
      <VideoThumbnail
        src={video.thumbnail}
        alt={video.title}
        duration={video.duration}
      />

      <div className="mt-3 space-y-2">
        <h3 className="font-semibold text-foreground line-clamp-2 leading-snug group-hover:text-primary transition-colors">
          {video.title}
        </h3>
        
        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
          {video.description}
        </p>

        <p className="text-sm font-medium text-foreground">
          {video.channel}
        </p>

        <div className="flex items-center gap-4 text-xs text-muted-foreground">
          <span className="flex items-center gap-1">
            <Eye className="h-3.5 w-3.5" />
            {video.views}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3.5 w-3.5" />
            {video.duration}
          </span>
        </div>
      </div>
    </motion.article>
  );
};

export default SearchVideoCard;
