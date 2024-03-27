import React from "react";

import HeroImg from "@images/hero-banner-img.jpg";
import HeroBanner from "@components/HeroBanner/HeroBanner";
import Header from "@components/Header/Header";

const Homepage = () => {
  return (
    <main>
      <Header />
      <HeroBanner />
    </main>
  );
};

export default Homepage;
