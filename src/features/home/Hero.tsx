import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SearchBar } from "@/features/search";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  return (
    <section className="py-12 sm:py-16">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-2xl sm:text-3xl lg:text-4xl font-semibold tracking-tight text-foreground"
        >
          Search and interact with{" "}
          <span className="text-primary">videos using AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="mt-3 text-base text-muted-foreground"
        >
          {siteConfig.tagline}
        </motion.p>

        <SearchBar onSearch={onSearch} className="mt-8" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="mt-4 flex items-center justify-center gap-2 text-sm text-muted-foreground"
        >
          <span>Try:</span>
          {siteConfig.suggestedSearches.map((term) => (
            <button
              key={term}
              onClick={() => onSearch(term)}
              className="rounded-full bg-secondary px-2.5 py-1 text-xs text-secondary-foreground hover:bg-secondary/80 transition-colors"
            >
              {term}
            </button>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
