import { ReactNode } from "react";
import Header from "./Header";

interface ShellProps {
  children: ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50">
        <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
          <Header />
        </div>
      </div>
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16">
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Shell;
