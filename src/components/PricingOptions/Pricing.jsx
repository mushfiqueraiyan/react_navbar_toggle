import React, { use } from "react";
import PricingCard from "../PricingCard/PricingCard";

const Pricing = ({ pricingPromise }) => {
  const pricingData = use(pricingPromise);
  return (
    <>
      <h2 className="text-5xl my-5 text-center">Get Our Membership</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 px-5">
        {pricingData.map((price, i) => (
          <PricingCard key={i} price={price} />
        ))}
      </div>
    </>
  );
};

export default Pricing;
