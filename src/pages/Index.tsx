import { AnimatePresence, motion } from "framer-motion";
import { Shell } from "@/components/layout";
import { Hero } from "@/features/home";
import { RecentVideos, useRecentVideos } from "@/features/recent-videos";
import { SearchResults, useSearch } from "@/features/search";

const Index = () => {
  const { videos: recentVideos } = useRecentVideos();
  const { query, isSearching, isLoading, results, search, clear } = useSearch();

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
            <div className="flex min-h-[calc(100vh-4rem)] flex-col items-center justify-center">
              <Hero onSearch={search} />
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
            onSearch={search}
            onClear={clear}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Index;
