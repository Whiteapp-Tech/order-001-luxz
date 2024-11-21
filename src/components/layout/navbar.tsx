"use client";

import * as React from "react";
import { ContainerContent } from "../container/container";
import Link from "next/link";
import styles from "./navbar.module.css";
import { Facebook, Instagram, Mail, Menu } from "lucide-react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import logo_dark from "@/assets/logo/logo - dark.svg";

const navigation_constant = [
  {
    link: "/about",
    title: "About",
  },
  {
    link: "/service",
    title: "Service",
  },
  {
    link: "/contact",
    title: "Contact",
  },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);

  // Handle scroll event to toggle `isScrolled` state
  React.useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full fixed top-0 z-50 transition-all flex items-center justify-between duration-300
        ${styles.navbar} 
        ${
          isScrolled
            ? "bg-white text-black shadow-lg h-[60px]"
            : " text-white h-[80px]"
        }
          `}
    >
      <ContainerContent>
        <div className="w-full flex justify-between items-center h-full">
          <div className="flex items-center gap-4">
            <Link href={"/"} className="pr-8 border-r border-white/20">
              {isScrolled ? (
                <Image src={logo_dark} alt="logo" className="" />
              ) : (
                <Image src={logo} alt="logo" className="" />
              )}
            </Link>

            <div className="flex gap-6 max-lg:hidden">
              {navigation_constant.map((item, i) => (
                <NavigationLink
                  key={i}
                  link={item.link}
                  isScrolled={isScrolled}
                >
                  {item.title}
                </NavigationLink>
              ))}
            </div>
          </div>
          <div className="max-lg:flex hidden">
            <SidebarTrigger>
              <Menu size={32} />
            </SidebarTrigger>
          </div>
          <div className="flex items-center gap-4 max-lg:hidden">
            <Link href="/">
              <Mail size={16} />
            </Link>
            <Link
              href={"/"}
            >
              <Facebook size={16} />
            </Link>
            <Link href={"https://www.instagram.com/luxzsales/"}>
              <Instagram size={16} />
            </Link>
          </div>
        </div>
      </ContainerContent>
    </nav>
  );
};

const NavigationLink = ({
  children,
  link,
  isScrolled,
}: {
  children: React.ReactNode;
  link: string;
  isScrolled: boolean;
}) => {
  return (
    <Link href={link} className="cta">
      <span
        className={`hover-underline-animation font-medium transition-colors duration-150 ease-out pb-2 uppercase tracking-[2px] text-[12px] px-1 ${
          isScrolled
            ? "text-neutral-700 hover:text-black after:bg-black"
            : "text-neutral-300 hover:text-white after:bg-white"
        }`}
      >
        {children}
      </span>
    </Link>
  );
};

export default Navbar;
