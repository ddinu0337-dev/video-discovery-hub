import { Play, User, Plus } from "lucide-react";
import { motion } from "framer-motion";
import { siteConfig } from "@/config/site";

interface HeaderProps {
  showPlus?: boolean;
  onPlusClick?: () => void;
}

const Header = ({ showPlus, onPlusClick }: HeaderProps) => {
  return (
    <motion.header
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="py-4"
    >
      <div className="flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-2.5">
          <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-r from-primary to-[hsl(187_85%_53%)] text-primary-foreground">
            <Play className="h-4 w-4 fill-current" />
          </div>
          <span className="text-lg font-semibold text-foreground tracking-tight">
            {siteConfig.name}
          </span>
        </div>

        {/* Right side */}
        <div className="flex items-center gap-3">
          {showPlus && (
            <button 
              onClick={onPlusClick}
              className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
            >
              <Plus className="h-4 w-4" />
            </button>
          )}
          <button className="flex h-9 w-9 items-center justify-center rounded-full bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground transition-colors">
            <User className="h-4 w-4" />
          </button>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;
