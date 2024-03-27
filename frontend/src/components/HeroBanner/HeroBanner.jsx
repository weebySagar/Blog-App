import React from "react";

import "@styles/herobanner/_herobanner.scss";
import { Container } from "react-bootstrap";

const HeroBanner = () => {
  return (
    <section className="hero-banner">
      <div className="hero-banner-img"></div>
      <div className="overlay"></div>

      <div className="hero-banner-inner">
        <Container>
          <div className="title">
            <h1>Dive Into the StoryVerse</h1>
          </div>
          <div className="content-wrap">
            <p> "Where Stories Unfold and Dreams Take Flight"</p>
          </div>
        </Container>
      </div>
    </section>
  );
};

export default HeroBanner;
