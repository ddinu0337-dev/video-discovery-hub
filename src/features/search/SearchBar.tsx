import { Search, Send } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.08 }}
      className={cn("relative", className)}
    >
      {/* Gradient glow effect */}
      <div
        className={cn(
          "absolute -inset-[2px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-md transition-all duration-500",
          isFocused && "opacity-70 animate-pulse"
        )}
      />
      <div
        className={cn(
          "absolute -inset-[1px] rounded-2xl bg-gradient-to-r from-primary via-accent to-primary opacity-0 transition-all duration-300",
          isFocused && "opacity-100"
        )}
      />
      <div
        className={cn(
          "relative flex items-center rounded-2xl border bg-card transition-all duration-200",
          isFocused
            ? "border-transparent shadow-lg"
            : "border-border/70 hover:border-border"
        )}
      >
        <Search className="absolute left-5 h-5 w-5 text-muted-foreground" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onFocus={() => setIsFocused(true)}
          onBlur={() => setIsFocused(false)}
          placeholder="Search videos, topics, or concepts…"
          className="h-14 w-full rounded-2xl bg-card pl-14 pr-16 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
        <button
          type="submit"
          disabled={!query.trim()}
          className={cn(
            "absolute right-2 flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-r from-primary to-accent text-primary-foreground transition-all shadow-md",
            query.trim() ? "hover:opacity-90" : "opacity-40 cursor-not-allowed"
          )}
        >
          <Send className="h-4 w-4" />
        </button>
      </div>
    </motion.form>
  );
};

export default SearchBar;
