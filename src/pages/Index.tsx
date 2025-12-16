import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Layout from "@/components/Layout";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import RecentVideos from "@/components/RecentVideos";
import SearchResults from "@/components/SearchResults";
import { recentVideos, searchResults } from "@/data/mockVideos";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSearch = (query: string) => {
    setIsLoading(true);
    setSearchQuery(query);
    
    // Simulate API call
    setTimeout(() => {
      setIsSearching(true);
      setIsLoading(false);
    }, 800);
  };

  const handleClear = () => {
    setSearchQuery("");
    setIsSearching(false);
  };

  return (
    <Layout>
      <Header />
      
      <AnimatePresence mode="wait">
        {!isSearching ? (
          <motion.div
            key="home"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Hero onSearch={handleSearch} />
            <RecentVideos videos={recentVideos} />
          </motion.div>
        ) : (
          <motion.div
            key="results"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
          >
            <SearchResults
              query={searchQuery}
              videos={searchResults}
              isLoading={isLoading}
              onSearch={handleSearch}
              onClear={handleClear}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Index;
