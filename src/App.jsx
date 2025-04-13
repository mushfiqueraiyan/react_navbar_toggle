import React, { Suspense } from "react";
import DaisyNav from "./components/DaisyNav";
import Navbar from "./components/Navbar/Navbar";
import Pricing from "./components/PricingOptions/Pricing";
import Chart from "./components/resultChart/Chart";
import AxiosChart from "./components/AxiosChart/AxiosChart";
import axios from "axios";

const App = () => {
  const pricingPromise = fetch("pricing.json").then((res) => res.json());
  const marksPromise = axios.get("marks.json");

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

        <Chart />

        <Suspense
          fallback={
            <span className="loading loading-infinity loading-xl"></span>
          }
        >
          <AxiosChart marksPromise={marksPromise} />
        </Suspense>
      </main>
    </>
  );
};

export default App;
