import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";
import { cn } from "@/lib/utils";

interface VideoInfoProps {
  title?: string;
  channelName?: string;
  views?: string;
  description?: string;
  publishedAt?: string;
}

const VideoInfo = ({
  title = "Video Title",
  channelName = "Channel Name",
  views = "1.2M views",
  description = "This is a video description. More details about the video content will appear here.",
  publishedAt = "2 days ago",
}: VideoInfoProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="mt-3 space-y-2">
      {/* Title */}
      <h1 className="text-base font-semibold text-foreground leading-tight">
        {title}
      </h1>

      {/* Channel & Stats Row */}
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="font-medium text-foreground">{channelName}</span>
        <span>•</span>
        <span>{views}</span>
        <span>•</span>
        <span>{publishedAt}</span>
      </div>

      {/* Description */}
      <div
        className={cn(
          "bg-muted/50 rounded-lg p-3 cursor-pointer transition-all",
          "hover:bg-muted/70"
        )}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        <p
          className={cn(
            "text-sm text-foreground/90 whitespace-pre-line",
            !isExpanded && "line-clamp-2"
          )}
        >
          {description}
        </p>
        <button className="flex items-center gap-1 text-xs font-medium text-muted-foreground mt-2 hover:text-foreground transition-colors">
          {isExpanded ? (
            <>
              Show less <ChevronUp className="h-3 w-3" />
            </>
          ) : (
            <>
              Show more <ChevronDown className="h-3 w-3" />
            </>
          )}
        </button>
      </div>
    </div>
  );
};

export default VideoInfo;