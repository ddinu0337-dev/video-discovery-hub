import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import type { Video } from "@/types/video";
import { VideoGrid } from "@/components/video";
import { EmptyState, VideoSkeletonGrid } from "@/components/common";
import SearchBar from "./SearchBar";

interface SearchResultsProps {
  query: string;
  videos: Video[];
  isLoading: boolean;
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchResults = ({
  query,
  videos,
  isLoading,
  onSearch,
  onClear,
}: SearchResultsProps) => {
  return (
    <div className="py-8">
      {/* Search bar sticky on mobile */}
      <div className="sticky top-[73px] z-40 bg-background/80 backdrop-blur-xl py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8 border-b border-border/30">
        <div className="max-w-2xl mx-auto">
          <SearchBar onSearch={onSearch} />
        </div>
      </div>

      {/* Results header */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="flex items-center justify-between mt-8 mb-6"
      >
        <div className="flex items-center gap-3">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-accent">
            <Search className="h-4 w-4 text-accent-foreground" />
          </div>
          <div>
            <h2 className="font-medium text-foreground">Results for "{query}"</h2>
            <p className="text-sm text-muted-foreground">
              {videos.length} videos found
            </p>
          </div>
        </div>
        <button
          onClick={onClear}
          className="flex items-center gap-1.5 rounded-lg bg-secondary px-3 py-2 text-sm text-secondary-foreground hover:bg-secondary/80 transition-colors"
        >
          <X className="h-4 w-4" />
          Clear
        </button>
      </motion.div>

      {/* Loading skeleton */}
      {isLoading && <VideoSkeletonGrid />}

      {/* Results grid */}
      {!isLoading && videos.length > 0 && <VideoGrid videos={videos} />}

      {/* No results */}
      {!isLoading && videos.length === 0 && (
        <EmptyState
          icon={Search}
          title="No videos found"
          description="Try adjusting your search terms"
        />
      )}
    </div>
  );
};

export default SearchResults;
