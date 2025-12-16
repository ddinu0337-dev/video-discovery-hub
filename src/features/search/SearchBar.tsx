import { Search } from "lucide-react";
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
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: 0.08 }}
      className={className}
    >
      <div
        className={`relative flex items-center rounded-2xl border bg-card transition-all duration-200 ${
          isFocused
            ? "border-primary/40 shadow-md ring-2 ring-primary/10"
            : "border-border/70 hover:border-border"
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
          className="h-14 w-full bg-transparent pl-14 pr-5 text-base text-foreground placeholder:text-muted-foreground focus:outline-none"
        />
      </div>
    </motion.form>
  );
};

export default SearchBar;
