import {
  ContainerContent,
  ContainerPages,
} from "@/components/container/container";
import { Footer } from "@/components/layout/footer";
import Navbar from "@/components/layout/navbar";
import * as React from "react";

const Aboutpages = () => {
  return (
    <ContainerPages>
      <div>
        <section className="w-full h-screen bg-black">
          <Navbar />
          <div className="w-full h-full flex justify-center items-center flex-col px-4">
            <div className="relative mb-[220px] max-lg:mb-[120px]">
              <h1 className="uppercase text-white font-garamond text-[256px] max-md:leading-[60px] max-md:text-center max-md mb-[20px] max-lg:text-[128px] max-md:text-[64px]">
                about
                <br />
                <span className="hidden max-md:block">us</span>
              </h1>
              <div className="w-[800px] max-lg:w-auto top-[220px] max-lg:top-0 max-lg:relative absolute flex items-center">
                <div className="flex flex-col gap-4 max-lg:hidden">
                  <p className="text-white uppercase text-[16px]">
                    WE ARE HERE TO HELP YOU BUILD BUSINESS A SUSTAINABLE,
                    GROWING, AND WORLD CLASS BUSINESS
                  </p>
                  <p className="text-white uppercase text-[16px]">
                    LEVERAGING EXTREME MARKETING STRATEGY TAILORED TO BRING THE
                    BEST OUT OF YOUR BUSINESS
                  </p>
                </div>
                <h1 className="uppercase text-white font-garamond text-[256px] max-lg:text-[128px] max-md:hidden">
                  us
                </h1>
              </div>
              <div className="hidden max-lg:flex flex-col">
                <p className="text-white uppercase text-center text-[12px]">
                  WE ARE HERE TO HELP YOU BUILD BUSINESS A SUSTAINABLE, GROWING,
                  AND WORLD CLASS BUSINESS
                </p>
                <p className="text-white uppercase text-center text-[12px]">
                  LEVERAGING EXTREME MARKETING STRATEGY TAILORED TO BRING THE
                  BEST OUT OF YOUR BUSINESS
                </p>
              </div>
            </div>
          </div>
        </section>
        <section className="w-full py-[100px] bg-black">
          <ContainerContent>
            <div className="w-full">
              <h2 className=" font-garamond text-[40px] text-white mb-[40px]">
                How We Started: The Inspiration Behind luXzSales
              </h2>
              <p className="text-white text-justify">
                The journey that led to the creation of luXzSales began under
                the name "The Luxury Sales Trybe." Initially, I ventured into
                the online space, selling digital products, but I had little
                clarity on what I truly wanted. I recall the cycle of selling,
                only to end up broke again, constantly jumping from one social
                media platform to another. There were times when I even gave up
                on business altogether. My attempts at alternative routes,
                including trying fraudulent schemes, failed miserably.
                <br />
                <br />
                For a long time, my decisions were influenced by friends and
                external pressures, leaving me without a clear vision or
                direction, both as a business owner and as an individual.
                Everything seemed to continue on this path until one day, I
                decided to take a step back and ask myself, "What is it that I
                really want?"
                <br />
                <br />
                It was then that I discovered my true desires: I wanted to be
                powerful, relevant, and wealthy. I realized that these
                aspirations needed to be woven into the very fabric of my brand.
                That’s when I coined the name "Luxury Sales Trybe" and used it
                for a while, convinced I had finally found my purpose. But, as I
                later learned, I was mistaken.
                <br />
                <br />
                The turning point came when someone on X (formerly Twitter)
                asked me, "What is the core service of your offer?" That
                question forced me to reexamine who I truly wanted to serve and
                the value I intended to provide. From that moment, the idea of
                becoming a "Luxury Sales Strategist" was born. Over the months,
                I grew both personally and professionally, refining my vision.
                As I continued to evolve, I rebranded from "Luxury Sales Trybe"
                to luXzSales and transitioned from being merely a sales
                strategist to launching my own consulting agency.
                <br />
                <br />
                luXzSales wasn’t created overnight—it was the result of months
                of self-discovery and learning. While I haven’t yet achieved all
                my goals, I am confident that the journey will lead to success.
                I envision luXzSales as an agency that will shape the top 1% of
                business owners in the luxury market, and I hope that you, too,
                will be part of that elite group.
                <br />
                <br />
                My Advice to You: Start where you are. The beginning is never
                perfect, and it may even seem impossible at times (as I once
                thought), but know that it is possible. Keep pushing forward,
                and the results will follow.
              </p>
              <p className="mt-[40px] text-neutral-500 text-[20px]">
                — Peter Ndifreke David
              </p>
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

export default Aboutpages;
