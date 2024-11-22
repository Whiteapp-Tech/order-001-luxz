"use client";

import * as React from "react";
import { CardOffers } from "./card";

const OffersList: React.FC = () => {
  const [expandedCardId, setExpandedCardId] = React.useState<string | null>(
    null
  );

  const handleToggle = (id: string) => {
    setExpandedCardId((prev) => (prev === id ? null : id));
  };

  return (
    <div>
      <div className="w-full flex justify-end">
        <CardOffers
          id="offer1"
          direction="right"
          title="What we are offer"
          text="At Luxz, we specialize in empowering luxury brands to achieve unprecedented growth and market dominance. Our tailored strategies and premium solutions are designed to elevate your brand, ensuring it resonates with exclusivity and excellence."
          size="text-[64px]"
          font="font-garamond"
          isExpanded={expandedCardId === "offer1"}
          onToggle={handleToggle}
        />
      </div>
      <CardOffers
        id="offer2"
        direction="left"
        title="Brand Audit"
        text="We help position your brand as a leader in the luxury market through bespoke marketing and branding strategies. By understanding your unique value, we craft a narrative that resonates with affluent audiences, ensuring your brand becomes synonymous with sophistication and exclusivity."
        size="text-[64px]"
        font="font-garamond"
        isExpanded={expandedCardId === "offer2"}
        onToggle={handleToggle}
      />
      <div className="w-full flex justify-end">
        <CardOffers
          id="offer3"
          direction="right"
          title="Marketing Strategy"
          text="Our expert insights unlock new opportunities in high-potential markets, enabling you to expand your reach while maintaining your brand’s prestige. Whether it’s entering emerging regions or strengthening your presence in established ones, we create a roadmap for sustainable, impactful growth."
          size="text-[64px]"
          font="font-garamond"
          isExpanded={expandedCardId === "offer3"}
          onToggle={handleToggle}
        />
      </div>
      <CardOffers
        id="offer4"
        direction="left"
        title="Customer Engagement"
        text="Building strong, lasting relationships with discerning clients is at the heart of what we do. From personalized experiences to innovative loyalty programs, we ensure every interaction with your brand reflects the care, attention, and luxury your customers expect."
        size="text-[64px]"
        font="font-garamond"
        isExpanded={expandedCardId === "offer4"}
        onToggle={handleToggle}
      />
      <div className="w-full flex justify-end">
        <CardOffers
          id="offer5"
          direction="right"
          title="Digital Excellence"
          text="In today’s digital world, luxury brands must shine online. Our cutting-edge digital campaigns, innovative social media strategies, and seamless e-commerce solutions position your brand as a leader in the digital space. We help you dominate with precision, driving both awareness and conversions while staying true to your luxury identity."
          size="text-[64px]"
          font="font-garamond"
          isExpanded={expandedCardId === "offer5"}
          onToggle={handleToggle}
        />
      </div>
    </div>
  );
};

export default OffersList;
