import * as React from "react";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "../layout/app-sidebar";

interface defaultContainer {
  children: React.ReactNode;
}

export const ContainerPages: React.FC<defaultContainer> = ({ children }) => {
  return (
    <SidebarProvider open={false}>
      <div className="w-full">
        {/* Conditionally render AppSidebar only on mobile size */}
        <div className="block sm:hidden">
          <AppSidebar />
        </div>
        {children}
      </div>
    </SidebarProvider>
  );
};

export const ContainerContent: React.FC<defaultContainer> = ({ children }) => {
  return (
    <div className="w-full flex justify-center h-full">
      <div className="max-w-screen-xl w-full px-4 sm:px-6 lg:px-8">
        {children}
      </div>
    </div>
  );
};
