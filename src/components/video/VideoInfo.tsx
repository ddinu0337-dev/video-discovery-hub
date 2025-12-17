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
  description,
}: VideoInfoProps) => {
  return (
    <div className="mt-2 sm:mt-3 space-y-1.5">
      {/* Title */}
      <h1 className="text-sm sm:text-base font-medium text-foreground leading-snug line-clamp-2">
        {title}
      </h1>

      {/* Channel & Stats Row */}
      <div className="flex items-center gap-1.5 text-xs sm:text-sm text-muted-foreground">
        <span className="font-medium text-foreground/80">{channelName}</span>
        <span>•</span>
        <span>{views}</span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
};

export default VideoInfo;