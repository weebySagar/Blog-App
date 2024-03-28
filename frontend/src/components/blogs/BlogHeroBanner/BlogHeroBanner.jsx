import React from "react";

import "@styles/herobanner/_blog-herobanner.scss";
import { Container } from "react-bootstrap";

const BlogHeroBanner = () => {
  return (
    <div className="blog-hero-banner">
      <div className="hero-banner-inner">
        <Container>
          <div className="title">
            <h1>Welcome to Our Blog</h1>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default BlogHeroBanner;
