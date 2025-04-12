import React, { Suspense } from "react";
import DaisyNav from "./components/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/PricingOptions/Pricing";

const App = () => {
  const pricingPromise = fetch("pricing.json").then((res) => res.json());

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <Pricing pricingPromise={pricingPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;
