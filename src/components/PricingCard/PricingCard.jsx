import { CircleCheck } from "lucide-react";
import React from "react";

const PricingCard = ({ price }) => {
  const { name, pricing, description, features } = price;
  return (
    <>
      <div className="flex flex-col text-center p-8 border-1 border-gray-300 rounded-xl">
        {/* card header */}
        <h1 className="text-3xl font-bold">{name}</h1>
        <h4 className="text-lg">{pricing}</h4>
        <p>{description}</p>

        <h1 className="mt-5 font-bold">Features:</h1>
        <div className="flex-1">
          {features.map((feature, i) => {
            return (
              <div key={i}>
                <p className="flex gap-2 mt-3">
                  <CircleCheck /> {feature}
                </p>
              </div>
            );
          })}
        </div>
        <button className="btn btn-primary mt-5 w-full">Buy Now</button>
      </div>
    </>
  );
};

export default PricingCard;
