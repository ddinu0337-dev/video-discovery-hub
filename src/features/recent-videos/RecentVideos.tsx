import { Clock } from "lucide-react";
import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import { VideoGrid } from "@/components/video";

interface RecentVideosProps {
  videos: Video[];
}

const RecentVideos = ({ videos }: RecentVideosProps) => {
  if (videos.length === 0) {
    return (
      <section className="py-10">
        <div className="text-center">
          <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-secondary">
            <Clock className="h-5 w-5 text-muted-foreground" />
          </div>
          <p className="mt-3 text-sm text-muted-foreground">
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
      transition={{ duration: 0.3, delay: 0.15 }}
      className="pb-12"
    >
      <div className="flex items-center gap-2 mb-4">
        <Clock className="h-4 w-4 text-muted-foreground" />
        <h2 className="text-base font-medium text-foreground">Recent</h2>
      </div>

      <VideoGrid videos={videos} variant="compact" />
    </motion.section>
  );
};

export default RecentVideos;
