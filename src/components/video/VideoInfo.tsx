interface VideoInfoProps {
  title?: string;
  channelName?: string;
  views?: string;
  description?: string;
}

const parseDescriptionWithLinks = (text: string) => {
  const urlRegex = /(https?:\/\/[^\s]+)/g;
  const parts = text.split(urlRegex);
  
  return parts.map((part, index) => {
    if (urlRegex.test(part)) {
      urlRegex.lastIndex = 0;
      return (
        <a
          key={index}
          href={part}
          target="_blank"
          rel="noopener noreferrer"
          className="text-primary hover:underline"
        >
          {part.length > 40 ? part.slice(0, 40) + '...' : part}
        </a>
      );
    }
    return part;
  });
};

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
      <div className="flex items-center gap-2 text-xs sm:text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full bg-muted/60 hover:bg-muted transition-colors cursor-pointer">
          <span className="hidden sm:flex w-5 h-5 rounded-full bg-gradient-to-br from-primary/80 to-accent/80 items-center justify-center text-[10px] font-semibold text-primary-foreground">
            {channelName.charAt(0).toUpperCase()}
          </span>
          <span className="font-medium text-foreground/90">{channelName}</span>
        </span>
        <span>•</span>
        <span>{views}</span>
      </div>

      {/* Description */}
      {description && (
        <p className="text-xs text-muted-foreground leading-relaxed">
          {parseDescriptionWithLinks(description)}
        </p>
      )}
    </div>
  );
};

export default VideoInfo;