import React from "react";
import LandingDetail from "./LandingDetail";

const LandingPage = () => {
  return (
    <>
      <div className="bg-green-100 h-1/2 w-full rounded-lg shadow-xl mt-10 landingPageColored opacity-20"></div>
      <div className=" h-96 grid grid-flow-col justify-around w-full">
        <LandingDetail />
        <LandingDetail />
        <LandingDetail />
      </div>
    </>
  );
};

export default LandingPage;
