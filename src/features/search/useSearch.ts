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

  const search = useCallback(async (query: string) => {
    setState((prev) => ({ ...prev, query, isSearching: true, isLoading: true }));

    try {
      const videos = await videoService.searchVideos(query);
      setResults(videos);
      setState((prev) => ({ ...prev, isLoading: false }));
    } catch (error) {
      console.error("Search failed:", error);
      setState((prev) => ({ ...prev, isLoading: false }));
    }
  }, []);

  const clear = useCallback(() => {
    setState({ query: "", isSearching: false, isLoading: false });
    setResults([]);
  }, []);

  return {
    ...state,
    results,
    search,
    clear,
  };
}
