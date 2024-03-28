import InnerWrapper from "@components/ui/InnerWrapper";
import React from "react";
import { Container } from "react-bootstrap";
import BlogsWrapper from "./BlogsWrapper";

const Blogs = () => {
  return (
    <section className="blogs" style={{ background: "#f2f2f2" }}>
      <InnerWrapper>
        <Container>
          <h2>Blogs</h2>

          <div className="content-wrap">
            <BlogsWrapper />
          </div>
        </Container>
      </InnerWrapper>
    </section>
  );
};

export default Blogs;
