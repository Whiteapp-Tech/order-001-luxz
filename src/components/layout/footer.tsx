import * as React from "react";
import { ContainerContent } from "../container/container";

import Image from "next/image";
import logo from "@/assets/logo/logo.svg";
import { Instagram, Mail } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import Link from "next/link";

export const Footer = () => {
  return (
    <div className="w-full">
      <ContainerContent>
        <div className="w-full flex h-[200px] flex-col justify-between items-center">
          <div className="w-full flex flex-col justify-center items-center">
            <Image src={logo} alt="logo" className="w-[80px]" />
            <p className="font-extralight font-poppins text-neutral-400 mt-2 text-[20px] max-md:text-[14px]">
              “We help luxury brands grow and dominate”
            </p>
            <div>
              <p className="text-white ">phone : +234 916 168 3740</p>
            </div>
            <div className="flex gap-2 mt-4 text-white">
              <Link href={"https://wa.me/+2349161683740"}>
                <FaWhatsapp size={24} />
              </Link>
              <Link href={"https://www.instagram.com/luxzsales/"}>
                <Instagram size={24} />
              </Link>
              <Link href={"/"}>
                <Mail size={24} />
              </Link>
            </div>
          </div>
          <div className="w-full border-t h-[50px] border-neutral-700 flex justify-center items-center">
            <p className="text-neutral-500 max-md:text-[12px]">
              © 2024 LuxzSales Corps & WhiteappTechnology. All rights reserved.
            </p>
          </div>
        </div>
      </ContainerContent>
    </div>
  );
};
