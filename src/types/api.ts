export interface VideoThumbnail {
  static: string;
  rich: string;
}

export interface ApiVideo {
  id: number;
  title: string;
  link: string;
  channel: string;
  views: number;
  length: string;
  description: string;
  thumbnail: VideoThumbnail;
}

export interface VideoSearchRequest {
  query: string;
}

export interface VideoSearchResponse {
  status: string;
  optimized_query: string;
  max_results: number;
  videos: ApiVideo[];
}
