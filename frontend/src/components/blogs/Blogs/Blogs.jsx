import InnerWrapper from "@components/ui/InnerWrapper";
import React from "react";
import { Container } from "react-bootstrap";
import BlogsWrapper from "./BlogsWrapper";

const Blogs = ({ title, fetchFunction, isMyBlog }) => {
  return (
    <section className="blogs" style={{ background: "#f2f2f2" }}>
      <InnerWrapper>
        <Container>
          <h2>{title}</h2>

          <div className="content-wrap">
            <BlogsWrapper fetchFunction={fetchFunction} isMyBlog={isMyBlog} />
          </div>
        </Container>
      </InnerWrapper>
    </section>
  );
};

export default Blogs;
