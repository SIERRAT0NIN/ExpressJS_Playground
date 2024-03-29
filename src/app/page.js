"use client";

import Header from "./components/Header";
import Footer from "./components/Footer";
import LandingPage from "./components/LandingPage";

export default function Home() {
  return (
    <div className="container mx-auto h-screen ">
      <Header />
      <LandingPage />
      <Footer />
    </div>
  );
}
