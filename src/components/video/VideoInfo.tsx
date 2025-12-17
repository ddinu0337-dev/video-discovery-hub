interface VideoInfoProps {
  title?: string;
  channelName?: string;
  views?: string;
  description?: string;
}

const VideoInfo = ({
  title = "Video Title",
  channelName = "Channel Name",
  views = "1.2M views",
  description = "This is a video description. More details about the video content will appear here.",
}: VideoInfoProps) => {
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
      </div>

      {/* Description */}
      <div className="bg-muted/50 rounded-lg p-3">
        <p className="text-sm text-foreground/90 whitespace-pre-line">
          {description}
        </p>
      </div>
    </div>
  );
};

export default VideoInfo;