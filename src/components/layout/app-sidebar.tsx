"use client";
import * as React from "react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";
import Image from "next/image";
import logo from '@/assets/logo/logo - dark.svg';
import { usePathname } from "next/navigation";

interface NavItem {
  title: string;
  url: string;
  isActive?: boolean; // Add isActive as an optional property
}

interface NavSection {
  title: string;
  url: string;
  items: NavItem[];
}

interface SidebarData {
  navMain: NavSection[];
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  const pathname = usePathname();
  const [data, setData] = React.useState<SidebarData>({
    navMain: [
      {
        title: "Navigation",
        url: "#",
        items: [
          { title: "Home", url: "/" },
          { title: "About", url: "/about" },
          { title: "Service", url: "/service" },
          { title: "Contact", url: "/contact" },
        ],
      },
    ],
  });

  // Update isActive state based on the current pathname
  React.useEffect(() => {
    setData((prevData) => ({
      ...prevData,
      navMain: prevData.navMain.map((section) => ({
        ...section,
        items: section.items.map((item) => ({
          ...item,
          isActive: item.url === pathname,
        })),
      })),
    }));
  }, [pathname]);

  return (
    <Sidebar {...props} side="right" variant="floating">
      <SidebarHeader>
        <div className="p-2 flex items-center gap-2">
          <Image src={logo} alt="logo" className="w-[32px]" />
          <p className="font-semibold">LuxzSales</p>
        </div>
      </SidebarHeader>
      <SidebarContent>
        {data.navMain.map((section) => (
          <SidebarGroup key={section.title}>
            <SidebarGroupLabel>{section.title}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {section.items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild isActive={item.isActive}>
                      <a href={item.url}>{item.title}</a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
}
