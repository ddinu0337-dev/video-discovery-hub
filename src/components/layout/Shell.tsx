import { ReactNode } from "react";
import Header from "./Header";

interface ShellProps {
  children: ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
        <Header />
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Shell;
