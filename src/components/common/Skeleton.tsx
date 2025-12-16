interface SkeletonProps {
  className?: string;
}

const Skeleton = ({ className = "" }: SkeletonProps) => {
  return (
    <div
      className={`rounded bg-gradient-to-r from-secondary via-secondary/50 to-secondary animate-shimmer bg-[length:200%_100%] ${className}`}
    />
  );
};

interface VideoSkeletonGridProps {
  count?: number;
}

export const VideoSkeletonGrid = ({ count = 8 }: VideoSkeletonGridProps) => {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {[...Array(count)].map((_, i) => (
        <div key={i} className="space-y-3">
          <Skeleton className="aspect-video rounded-xl" />
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-3 w-1/2" />
        </div>
      ))}
    </div>
  );
};

export default Skeleton;
