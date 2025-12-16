import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";
import { SearchBar } from "@/features/search";

interface HeroProps {
  onSearch: (query: string) => void;
}

const Hero = ({ onSearch }: HeroProps) => {
  return (
    <section className="py-16 sm:py-24">
      <div className="mx-auto max-w-2xl text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground"
        >
          Search and interact with
          <br />
          <span className="text-primary">videos using AI</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mt-4 text-lg text-muted-foreground"
        >
          {siteConfig.tagline}
        </motion.p>

        <SearchBar onSearch={onSearch} className="mt-10" />

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-6 flex items-center justify-center gap-4 text-sm text-muted-foreground"
        >
          <span>Try:</span>
          {siteConfig.suggestedSearches.map((term) => (
            <button
              key={term}
              onClick={() => onSearch(term)}
              className="rounded-full bg-secondary px-3 py-1.5 text-secondary-foreground hover:bg-secondary/80 transition-colors"
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
