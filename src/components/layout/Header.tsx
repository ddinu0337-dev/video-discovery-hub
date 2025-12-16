import { Play, User } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

const Header = () => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="sticky top-0 z-50 bg-background/80 backdrop-blur-xl border-b border-border/50 py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary text-primary-foreground">
            <Play className="h-4 w-4 fill-current" />
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            {siteConfig.name}
          </span>
        </div>

        {/* Profile */}
        <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors">
          <User className="h-4 w-4" />
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
