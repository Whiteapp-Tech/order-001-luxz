"use client";
import * as React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import Image, { StaticImageData } from "next/image";

interface CardOffersProps {
  direction: "left" | "right";
  title: string;
  text: string;
  font?: string;
  size?: string;
}

export const CardOffers: React.FC<CardOffersProps> = ({
  direction,
  title,
  text,
  font,
  size,
}) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="w-2/3 max-md:w-full">
      <h4
        className={`
            w-full text-white uppercase max-md:text-[24px]
            ${size ? size : "text-[24px]"}
            ${font ? font : "font-outfit"}
            ${direction === "right" ? "text-end" : "text-start"}
        `}
        data-aos={direction === "right" ? "fade-left" : "fade-right"}
      >
        {title}
      </h4>
      <p
        className="text-neutral-500 text-justify max-md:text-[12px]"
        data-aos={direction === "right" ? "fade-left" : "fade-right"}
        data-aos-delay={100}
      >
        {text}
      </p>
    </div>
  );
};

interface CardExpertiseProps {
  data: dataType;
  index: number;
}

type dataType = {
  title: string;
  text: string;
  img: StaticImageData;
};

export const CardExpertise: React.FC<CardExpertiseProps> = ({
  data,
  index,
}) => {
  React.useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div
      className="w-full relative overflow-hidden"
      data-aos="fade-up"
      data-aos-delay={100 * index}
    >
      <div className="w-full h-[200px] rounded overflow-hidden relative">
        <div className="w-full h-full absolute top-0 left-0 bg-black/60 z-10" />
        <div className="w-full h-full absolute top-0 left-0 flex justify-end items-end p-4 z-20">
          <h6 className="text-white uppercase font-medium">{data.title}</h6>
        </div>
        <Image
          src={data.img}
          alt={data.title}
          className="w-full h-full object-cover"
        />
      </div>
      <div>
        <p className="text-neutral-600">
          {data.text}
        </p>
      </div>
    </div>
  );
};
