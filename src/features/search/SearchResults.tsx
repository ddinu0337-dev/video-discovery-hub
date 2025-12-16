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
    <div className="min-h-screen bg-secondary/50 flex flex-col">
      {/* Top Header Bar with gradient */}
      <div className="w-full bg-gradient-to-r from-primary to-[hsl(187_85%_53%)] h-14" />

      {/* Chat-like Content Area */}
      <div className="flex-1 overflow-y-auto pb-28">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 py-6">
          {/* Chat Header - Query bubble aligned right */}
          <div className="flex items-center justify-end gap-3 mb-8">
            <button
              onClick={onClear}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:text-foreground hover:bg-secondary transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
            
            <div className="flex items-center gap-2 rounded-full bg-gradient-to-r from-primary to-[hsl(187_85%_53%)] px-5 py-2.5 shadow-md">
              <span className="text-sm font-medium text-primary-foreground">
                {query}
              </span>
            </div>
            
            <div className="h-10 w-10 rounded-full bg-card border border-border overflow-hidden shadow-sm">
              <div className="h-full w-full flex items-center justify-center text-muted-foreground">
                <User className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Video Results */}
          {isLoading && <VideoSkeletonGrid count={8} />}

          {!isLoading && (
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
