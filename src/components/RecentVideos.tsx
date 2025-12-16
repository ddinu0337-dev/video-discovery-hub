import { Clock, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import VideoCard, { Video } from "./VideoCard";

interface RecentVideosProps {
  videos: Video[];
}

const RecentVideos = ({ videos }: RecentVideosProps) => {
  if (videos.length === 0) {
    return (
      <section className="py-12">
        <div className="text-center">
          <div className="mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-secondary">
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-4 text-muted-foreground">
            No recent videos yet. Start searching to explore.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 }}
      className="py-8"
    >
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <Clock className="h-4 w-4 text-muted-foreground" />
          <h2 className="text-lg font-medium text-foreground">Recent Videos</h2>
        </div>
        <button className="flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors">
          View all
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      {/* Horizontal scroll on mobile, grid on desktop */}
      <div className="relative">
        <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide lg:grid lg:grid-cols-4 lg:overflow-visible lg:pb-0">
          {videos.map((video, index) => (
            <VideoCard
              key={video.id}
              video={video}
              variant="compact"
              index={index}
            />
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default RecentVideos;
