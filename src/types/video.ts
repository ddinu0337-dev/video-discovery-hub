export interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  channel: string;
  duration: string;
  views: string;
  link?: string;
}

export interface SearchState {
  query: string;
  isSearching: boolean;
  isLoading: boolean;
}
