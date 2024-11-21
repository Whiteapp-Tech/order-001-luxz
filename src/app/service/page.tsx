import * as React from "react";
import {
  ContainerContent,
  ContainerPages,
} from "@/components/container/container";
import Navbar from "@/components/layout/navbar";
import Image from "next/image";

import hero_img from "@/assets/image/background/service-hero.jpg";
import { CardOffers } from "@/components/custom/card";
import { Footer } from "@/components/layout/footer";

const Servicepages = () => {
  return (
    <ContainerPages>
      <div>
        <section className="w-full h-screen bg-black">
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
          <div className="w-full absolute top-0 left-0 z-30 h-full flex justify-center items-center">
            <h1 className="text-white uppercase text-[64px] text-center">OUR SERVICES</h1>
          </div>
        </section>
        <section className="w-full py-[100px] bg-black">
          <ContainerContent>
            <div className="flex w-full flex-col mt-[64px] gap-[80px]">
              <CardOffers
                direction="left"
                title={"Brand Audit by Luxz"}
                text="At Luxz, our Brand Audit service is a comprehensive evaluation of your brand’s current state in the market. We conduct a thorough analysis of your brand’s identity, messaging, customer perception, and competitive position to identify strengths and areas for improvement. Through a detailed review of your brand’s assets—visual elements, communication channels, and customer experiences—we offer strategic insights on how to refine and elevate your brand to meet market demands and enhance its presence. This audit provides a roadmap for enhancing your brand’s impact, ensuring it resonates deeply with your target audience while staying ahead of competitors in the luxury sector."
                size="text-[32px]"
              />
              <div className="w-full flex justify-end">
                <CardOffers
                  direction="right"
                  title={"Marketing Strategy by Luxz"}
                  text="A robust Marketing Strategy is the cornerstone of any successful luxury brand, and Luxz excels in crafting customized strategies that deliver tangible results. We focus on understanding your brand’s unique value proposition and aligning it with the needs of your target market. By leveraging market research, consumer insights, and competitive analysis, we design integrated marketing plans that elevate brand awareness, drive customer loyalty, and generate sustainable revenue growth. Whether it's through traditional marketing channels or innovative new approaches, our strategies are tailored to create a lasting impact in the luxury market, positioning your brand as a leader in the industry."
                  size="text-[32px]"
                />
              </div>
              <CardOffers
                direction="left"
                title={"Customer Engagement by Luxz"}
                text="At Luxz, we believe in building lasting relationships with customers through authentic Customer Engagement strategies. We focus on creating personalized, meaningful experiences that resonate with your audience at every touchpoint. By understanding your customers' needs and behaviors, we design tailored communication strategies that foster trust and loyalty, ensuring your brand remains top-of-mind. From personalized messaging and exclusive offerings to loyalty programs and customer service enhancements, we help your brand cultivate a strong, dedicated customer base that is passionate about your products and services, driving both retention and advocacy."
                size="text-[32px]"
              />
              <div className="w-full flex justify-end">
                <CardOffers
                  direction="right"
                  title={"Digital Excellence by Luxz"}
                  text="In the digital age, achieving Digital Excellence is essential for luxury brands to remain relevant and competitive. Luxz helps brands dominate online spaces with innovative digital marketing campaigns, social media strategies, and state-of-the-art e-commerce solutions. We ensure that your brand's digital presence is optimized to engage with modern consumers across platforms, from social media channels to your website and beyond. Through advanced analytics, targeted digital strategies, and compelling content, we drive online visibility, enhance user experience, and maximize conversion rates. Our approach integrates cutting-edge tools and techniques to ensure your brand excels in the digital realm, delivering exceptional results that align with your business goals."
                  size="text-[32px]"
                />
              </div>
            </div>
          </ContainerContent>
        </section>
        <footer className="w-full bg-black">
          <Footer />
        </footer>
      </div>
    </ContainerPages>
  );
};

export default Servicepages;
