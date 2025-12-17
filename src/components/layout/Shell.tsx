import { ReactNode } from "react";
import Header from "./Header";
import { AppSidebar } from "./AppSidebar";
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";

interface ShellProps {
  children: ReactNode;
}

const Shell = ({ children }: ShellProps) => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full bg-background">
        {/* Sidebar - hidden on mobile */}
        <div className="hidden lg:block">
          <AppSidebar />
        </div>

        {/* Main content */}
        <SidebarInset className="flex-1">
          <div className="fixed top-0 left-0 right-0 z-50 bg-background border-b border-border/50 lg:left-[var(--sidebar-width)]">
            <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8">
              <Header />
            </div>
          </div>
          <div className="mx-auto max-w-[1400px] px-4 sm:px-6 lg:px-8 pt-16">
            <main>{children}</main>
          </div>
        </SidebarInset>
      </div>
    </SidebarProvider>
  );
};

export default Shell;
