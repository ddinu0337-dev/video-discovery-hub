import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Shell } from "@/components/layout";
import { Hero } from "@/features/home";
import { RecentVideos, useRecentVideos } from "@/features/recent-videos";
import { SearchResults, useSearch } from "@/features/search";

const Index = () => {
  const { videos: recentVideos } = useRecentVideos();
  const { query, isSearching, isLoading, results, error, search, clear, retry } = useSearch();

  const scrollToVideos = () => {
    document.getElementById("recent-videos")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <AnimatePresence mode="wait">
      {!isSearching ? (
        <motion.div
          key="home"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <Shell>
            <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center relative">
              <Hero onSearch={search} />
              <motion.button
                onClick={scrollToVideos}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: 0.3 }}
                className="absolute bottom-8 flex flex-col items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              >
                <span className="text-xs">Recent Videos</span>
                <ChevronDown className="h-5 w-5 animate-bounce" />
              </motion.button>
            </div>
            <div id="recent-videos">
              <RecentVideos videos={recentVideos} />
            </div>
          </Shell>
        </motion.div>
      ) : (
        <motion.div
          key="results"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <SearchResults
            query={query}
            videos={results}
            isLoading={isLoading}
            error={error}
            onSearch={search}
            onClear={clear}
            onRetry={retry}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
