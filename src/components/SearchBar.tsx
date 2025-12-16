import { Search, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

interface SearchBarProps {
  onSearch: (query: string) => void;
  className?: string;
}

const SearchBar = ({ onSearch, className = "" }: SearchBarProps) => {
  const [query, setQuery] = useState("");
  const [isFocused, setIsFocused] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (query.trim()) {
      onSearch(query.trim());
    }
  };

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={className}
    >
      <div
        className={`relative flex items-center rounded-2xl border bg-card transition-all duration-300 ${
          isFocused
            ? "border-primary/30 shadow-elevated ring-4 ring-primary/5"
            : "border-border/60 shadow-subtle hover:border-border"
        }`}
      >
        <Search className="absolute left-5 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search videos, topics, or concepts…"
          className="h-14 w-full bg-transparent pl-14 pr-14 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <div className="absolute right-4 flex items-center gap-2">
          {query && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex h-8 items-center gap-1.5 rounded-lg bg-primary px-3 text-sm font-medium text-primary-foreground cursor-pointer hover:bg-primary/90 transition-colors"
              onClick={handleSubmit}
            >
              <Sparkles className="h-3.5 w-3.5" />
              Search
            </motion.div>
          )}
        </div>
      </div>
    </motion.form>
  );
};

export default SearchBar;
