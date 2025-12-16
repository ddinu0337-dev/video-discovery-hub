import { ArrowLeft, Search } from "lucide-react";
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
    <div className="py-6">
      {/* Header with back button and search */}
      <div className="sticky top-[73px] z-40 bg-background/95 backdrop-blur-lg py-4 -mx-4 px-4 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
        <div className="flex items-center gap-3 max-w-3xl mx-auto">
          <button
            onClick={onClear}
            className="flex h-10 w-10 items-center justify-center rounded-xl bg-secondary text-muted-foreground hover:text-foreground hover:bg-secondary/80 transition-colors shrink-0"
          >
            <ArrowLeft className="h-4 w-4" />
          </button>
          <div className="flex-1">
            <SearchBar onSearch={onSearch} />
          </div>
        </div>
      </div>

      {/* Results info */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="mt-6 mb-5 text-sm text-muted-foreground"
      >
        {isLoading ? "Searching..." : `${videos.length} results for "${query}"`}
      </motion.p>

      {/* Loading skeleton */}
      {isLoading && <VideoSkeletonGrid count={8} />}

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
