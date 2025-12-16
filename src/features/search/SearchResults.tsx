import { Send, AlertCircle, RefreshCw } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Video } from "@/types/video";
import { SearchVideoCard } from "@/components/video";
import { RotatingCircleLoader } from "@/components/common/Loaders";
import { Header } from "@/components/layout";
import { Button } from "@/components/ui/button";

interface SearchResultsProps {
  query: string;
  videos: Video[];
  isLoading: boolean;
  error?: string | null;
  onSearch: (query: string) => void;
  onClear: () => void;
  onRetry?: () => void;
}

const SearchResults = ({
  query,
  videos,
  isLoading,
  error,
  onSearch,
  onClear,
  onRetry,
}: SearchResultsProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-secondary/50 flex flex-col">
      {/* Fixed Header */}
      <div className="sticky top-0 z-50 bg-background border-b border-border/50">
        <div className="mx-auto w-full max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Header showPlus onPlusClick={onClear} />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
          {/* Loading State */}
          {isLoading && (
            <div className="flex items-center justify-center py-12">
              <RotatingCircleLoader />
            </div>
          )}

          {/* Error State */}
          {!isLoading && error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col items-center justify-center py-12 text-center"
            >
              <div className="rounded-full bg-destructive/10 p-3 mb-4">
                <AlertCircle className="h-6 w-6 text-destructive" />
              </div>
              <h3 className="text-lg font-medium text-foreground mb-2">Search Failed</h3>
              <p className="text-sm text-muted-foreground mb-4 max-w-md">{error}</p>
              {onRetry && (
                <Button variant="outline" onClick={onRetry} className="gap-2">
                  <RefreshCw className="h-4 w-4" />
                  Try Again
                </Button>
              )}
            </motion.div>
          )}

          {/* Video Results */}
          {!isLoading && !error && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
            >
              {videos.map((video, index) => (
                <SearchVideoCard key={video.id} video={video} index={index} />
              ))}
            </motion.div>
          )}
        </div>
      </div>

      {/* Fixed Bottom Input */}
      <div className="fixed bottom-0 left-0 right-0 bg-gradient-to-t from-secondary via-secondary to-transparent pt-8 pb-6">
        <div className="mx-auto max-w-2xl px-4">
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <div className="relative flex items-center rounded-full bg-card border border-border shadow-elevated">
              <input
                type="text"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                placeholder="Ask to find videos..."
                className="h-14 flex-1 bg-transparent pl-6 pr-16 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
              />
              <button
                type="submit"
                className="absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-[hsl(200_80%_60%)] text-primary-foreground hover:opacity-90 transition-opacity shadow-md"
              >
                <Send className="h-4 w-4" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </div>
  );
};

export default SearchResults;
