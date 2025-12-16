import { Play } from "lucide-react";

interface VideoThumbnailProps {
  src: string;
  alt: string;
  duration: string;
}

const VideoThumbnail = ({ src, alt, duration }: VideoThumbnailProps) => {
  return (
    <div className="relative aspect-video overflow-hidden rounded-xl bg-secondary">
      <img
        src={src}
        alt={alt}
        className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
      />

      {/* Duration badge */}
      <div className="absolute bottom-2 right-2 rounded-md bg-foreground/80 px-1.5 py-0.5 text-xs font-medium text-background">
        {duration}
      </div>

      {/* Play overlay */}
      <div className="absolute inset-0 flex items-center justify-center bg-foreground/0 transition-all duration-300 group-hover:bg-foreground/10">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-card/95 text-foreground shadow-card opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <Play className="h-6 w-6 fill-current ml-1" />
        </div>
      </div>
    </div>
  );
};

export default VideoThumbnail;
