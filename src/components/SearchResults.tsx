import { Search, X } from "lucide-react";
import { motion } from "framer-motion";
import VideoCard, { Video } from "./VideoCard";
import SearchBar from "./SearchBar";

interface SearchResultsProps {
  query: string;
  videos: Video[];
  isLoading: boolean;
  onSearch: (query: string) => void;
  onClear: () => void;
}

const SearchResults = ({ query, videos, isLoading, onSearch, onClear }: SearchResultsProps) => {
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
            <h2 className="font-medium text-foreground">
              Results for "{query}"
            </h2>
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
      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="space-y-3">
              <div className="aspect-video rounded-xl bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-shimmer bg-[length:200%_100%]" />
              <div className="h-4 w-3/4 rounded bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-shimmer bg-[length:200%_100%]" />
              <div className="h-3 w-1/2 rounded bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-shimmer bg-[length:200%_100%]" />
            </div>
          ))}
        </div>
      )}

      {/* Results grid */}
      {!isLoading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
        >
          {videos.map((video, index) => (
            <VideoCard key={video.id} video={video} index={index} />
          ))}
        </motion.div>
      )}

      {/* No results */}
      {!isLoading && videos.length === 0 && (
        <div className="py-16 text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-secondary">
            <Search className="h-7 w-7 text-muted-foreground" />
          </div>
          <h3 className="mt-4 font-medium text-foreground">No videos found</h3>
          <p className="mt-1 text-muted-foreground">
            Try adjusting your search terms
          </p>
        </div>
      )}
    </div>
  );
};

export default SearchResults;
