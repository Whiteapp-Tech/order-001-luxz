import * as React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Link from "next/link";

// Container
import {
  ContainerContent,
  ContainerPages,
} from "@/components/container/container";

// Component
import Navbar from "@/components/layout/navbar";
import { CardOffers } from "@/components/custom/card";
import { ContactSection } from "@/components/section/contact";
import { Footer } from "@/components/layout/footer";

// Image
import hero_img from "@/assets/image/background/hero.jpg";
import wave_img from "@/assets/image/illustration/wave.svg";

const App = () => {
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
          <div className="w-full h-full absolute top-0 left-0 z-30">
            <ContainerContent>
              <div className="w-full h-full flex flex-col justify-center max-md:items-center gap-4">
                <h1 className="text-white text-[24px] max-md:text-[12px] max-md:text-center uppercase max-md:leading-[40px] leading-[60px]">
                  <span className={`ml-2  max-md:ml-0 ${styles.fade_right}`}>
                    We help luxury brand grows and
                  </span>
                  <br />
                  <span
                    className={`text-[128px] max-md:text-[40px] font-bold ${styles.fade_right}`}
                  >
                    dominate
                  </span>
                </h1>
                <Link
                  href={"https://wa.me/+2349161683740"}
                  className={`w-[200px] border border-white h-[64px] max-md:w-[120px] max-md:h-[40px] max-md:border-0 max-md:border-b ${styles.fade_right}`}
                >
                  <p className="text-white w-full h-full flex justify-center items-center max-md:text-[12px]">
                    Let's get started
                  </p>
                </Link>
              </div>
            </ContainerContent>
          </div>
        </section>
        <section className="w-full py-[100px] max-md:py-[40px] bg-black">
          <ContainerContent>
            <div className="flex w-full flex-col mt-[64px] gap-[80px] max-md:gap-[40px]">
              <div className="w-full flex justify-end">
                <CardOffers
                  direction="right"
                  title={"What we are offer"}
                  text="At Luxz, we specialize in empowering luxury brands to achieve unprecedented growth and market dominance. Our tailored strategies and premium solutions are designed to elevate your brand, ensuring it resonates with exclusivity and excellence."
                  size="text-[64px]"
                  font="font-garamond"
                />
              </div>
              <CardOffers
                direction="left"
                title={"Brand Audit"}
                text="We help position your brand as a leader in the luxury market through bespoke marketing and branding strategies. By understanding your unique value, we craft a narrative that resonates with affluent audiences, ensuring your brand becomes synonymous with sophistication and exclusivity."
                size="text-[64px]"
                font="font-garamond"
              />
              <div className="w-full flex justify-end">
                <CardOffers
                  direction="right"
                  title={"Marketing Strategy"}
                  text="Our expert insights unlock new opportunities in high-potential markets, enabling you to expand your reach while maintaining your brand’s prestige. Whether it’s entering emerging regions or strengthening your presence in established ones, we create a roadmap for sustainable, impactful growth."
                  size="text-[64px]"
                  font="font-garamond"
                />
              </div>
              <CardOffers
                direction="left"
                title={"Customer Engagement"}
                text="Building strong, lasting relationships with discerning clients is at the heart of what we do. From personalized experiences to innovative loyalty programs, we ensure every interaction with your brand reflects the care, attention, and luxury your customers expect."
                size="text-[64px]"
                font="font-garamond"
              />
              <div className="w-full flex justify-end">
                <CardOffers
                  direction="right"
                  title={"Digital Excellence"}
                  text="In today’s digital world, luxury brands must shine online. Our cutting-edge digital campaigns, innovative social media strategies, and seamless e-commerce solutions position your brand as a leader in the digital space. We help you dominate with precision, driving both awareness and conversions while staying true to your luxury identity."
                  size="text-[64px]"
                  font="font-garamond"
                />
              </div>
            </div>
          </ContainerContent>
        </section>
        <div className="w-full bg-black">
          <Image src={wave_img} alt="wave" className="w-full" />
        </div>
        <section className="w-full py-[100px] bg-white">
          <ContainerContent>
            <div className="w-full h-full flex flex-col gap-[80px] max-md:px-4">
              <div>
                <h4 className="font-bold text-[32px] max-md:text-[24px] max-md:text-center">
                  Why Choose Luxz?
                </h4>
                <p className="text-[#676767] text-justify ">
                  At Luxz, we are passionate about helping luxury brands achieve
                  sustainable and authentic growth. While we are just starting
                  out, our dedication to understanding the nuances of the luxury
                  market enables us to create tailored strategies that resonate
                  with affluent audiences and position your brand for long-term
                  success. We believe in crafting bespoke solutions that reflect
                  your brand’s unique identity, ensuring it stands out in a
                  competitive landscape. Our commitment to excellence drives us
                  to deliver strategies that enhance your brand’s reputation and
                  foster lasting customer loyalty. Partner with us to elevate
                  your brand’s presence and build a foundation for success in
                  the luxury market.
                </p>
              </div>
            </div>
          </ContainerContent>
        </section>
        <section className="w-full py-[100px] bg-black">
          <ContactSection />
        </section>
        <footer className="w-full bg-black">
          <Footer />
        </footer>
      </div>
    </ContainerPages>
  );
};

export default App;
