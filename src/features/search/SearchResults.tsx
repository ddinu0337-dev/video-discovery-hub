import { Send, Plus, User } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import type { Video } from "@/types/video";
import { SearchVideoCard } from "@/components/video";
import { VideoSkeletonGrid } from "@/components/common";

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
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onSearch(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <div className="min-h-screen bg-secondary/30">
      {/* Header */}
      <div className="sticky top-0 z-50 bg-background/95 backdrop-blur-lg border-b border-border/40">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={onClear}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              ← Back
            </button>
            
            <div className="flex items-center gap-3">
              <button className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors">
                <Plus className="h-4 w-4" />
              </button>
              
              <div className="flex items-center gap-2 rounded-full bg-primary px-4 py-2">
                <span className="text-sm font-medium text-primary-foreground">
                  {query}
                </span>
              </div>
              
              <div className="h-9 w-9 rounded-full bg-secondary overflow-hidden">
                <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                  <User className="h-4 w-4" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-8 pb-28">
        {isLoading && <VideoSkeletonGrid count={8} />}

        {!isLoading && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3 }}
            className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            {videos.map((video, index) => (
              <SearchVideoCard key={video.id} video={video} index={index} />
            ))}
          </motion.div>
        )}
      </div>

      {/* Floating Input */}
      <div className="fixed bottom-6 left-1/2 -translate-x-1/2 w-full max-w-2xl px-4">
        <motion.form
          onSubmit={handleSubmit}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="relative"
        >
          <div className="flex items-center rounded-full bg-card border border-border shadow-lg">
            <input
              type="text"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              placeholder="Ask to find videos..."
              className="h-12 flex-1 bg-transparent pl-5 pr-14 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none"
            />
            <button
              type="submit"
              className="absolute right-2 flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground hover:bg-primary/90 transition-colors"
            >
              <Send className="h-4 w-4" />
            </button>
          </div>
        </motion.form>
      </div>
    </div>
  );
};

export default SearchResults;
