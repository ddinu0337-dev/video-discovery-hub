import { Shell } from "@/components/layout";
import { Clapperboard } from "lucide-react";

const Studio = () => {
  return (
    <Shell>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-primary/10 mb-4">
          <Clapperboard className="h-8 w-8 text-primary" />
        </div>
        <h1 className="text-2xl font-semibold text-foreground mb-2">Studio</h1>
        <p className="text-muted-foreground">Coming soon...</p>
      </div>
    </Shell>
  );
};

export default Studio;
