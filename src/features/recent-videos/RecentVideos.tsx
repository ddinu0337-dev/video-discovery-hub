import { Clock, Play } from "lucide-react";
import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import { VideoGrid } from "@/components/video";

interface RecentVideosProps {
  videos: Video[];
}

const RecentVideos = ({ videos }: RecentVideosProps) => {
  if (videos.length === 0) {
    return (
      <section className="py-16">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/10">
            <Play className="h-7 w-7 text-primary" />
          </div>
          <p className="mt-5 text-base text-muted-foreground">
            No recent videos yet. Start searching to explore.
          </p>
        </div>
      </section>
    );
  }

  return (
    <motion.section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.3 }}
      className="pb-16"
    >
      <div className="flex items-center gap-3 mb-6">
        <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-br from-primary/20 to-accent/20">
          <Clock className="h-4 w-4 text-primary" />
        </div>
        <h2 className="text-xl font-semibold text-foreground">Recent Videos</h2>
      </div>

      <VideoGrid videos={videos} variant="compact" />
    </motion.section>
  );
};

export default RecentVideos;