import * as React from "react";
import Image from "next/image";

import {
  ContainerContent,
  ContainerPages,
} from "@/components/container/container";

import Navbar from "@/components/layout/navbar";
import hero_img from "@/assets/image/background/hero.jpg";
import { ContactSection } from "@/components/section/contact";

const Contactpages = () => {
  return (
    <ContainerPages>
      <div>
        <section className="w-full h-screen bg-black relative">
          <Navbar />
          <Image
            src={hero_img}
            alt="hero-pages"
            className="w-full h-full object-cover"
            priority
          />
          <div
            className="absolute top-0 left-0 z-10 w-full h-full"
            style={{
              background:
                "radial-gradient(circle, rgba(0,0,0,0) 0%, rgba(0,0,0,0.62) 100%)",
            }}
          />
          <div className="absolute top-0 left-0 z-20 w-full h-full bg-black/[78%]" />
          <div className="w-full h-full absolute top-0 left-0 z-30 flex justify-center items-center">
            <ContactSection />
          </div>
        </section>
      </div>
    </ContainerPages>
  );
};

export default Contactpages