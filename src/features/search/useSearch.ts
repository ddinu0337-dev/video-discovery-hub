import { useState, useCallback } from "react";
import { videoService } from "@/services/video.service";
import type { Video, SearchState } from "@/types/video";

export function useSearch() {
  const [state, setState] = useState<SearchState>({
    query: "",
    isSearching: false,
    isLoading: false,
  });
  const [results, setResults] = useState<Video[]>([]);
  const [error, setError] = useState<string | null>(null);

  const search = useCallback(async (query: string) => {
    setState((prev) => ({ ...prev, query, isSearching: true, isLoading: true }));
    setError(null);

    try {
      const videos = await videoService.searchVideos(query);
      setResults(videos);
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (err) {
      console.error("Search failed:", err);
      setError("Failed to search videos. Please try again.");
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const clear = useCallback(() => {
    setState({ query: "", isSearching: false, isLoading: false });
    setResults([]);
    setError(null);
  }, []);

  const retry = useCallback(() => {
    if (state.query) {
      search(state.query);
    }
  }, [state.query, search]);

  return {
    ...state,
    results,
    error,
    search,
    clear,
    retry,
  };
}
