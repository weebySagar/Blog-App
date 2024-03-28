import React from "react";
import { Col, Container, Row } from "react-bootstrap";

import InnerWrapper from "@components/ui/InnerWrapper";
import formatDate from "../../../utils/formattedDate";
import ParseContent from "@components/parsecontent/ParseContent";

const BlogDetails = ({ blog }) => {
  return (
    <section className="blog-details">
      <InnerWrapper>
        <Container>
          <Row className="justify-content-center">
            <Col md={6}>
              <h2>{blog?.title}</h2>
              <div className="mt-4 d-flex justify-content-between">
                <p className="fs-6">{formatDate(blog?.createdAt)}</p>
                <p className="fst-italic fs-6 fw-medium">{blog?.author.name}</p>
              </div>
              <hr />

              <div className="content-wrap">
                <ParseContent>{blog?.content}</ParseContent>
              </div>
            </Col>
          </Row>
        </Container>
      </InnerWrapper>
    </section>
  );
};

export default BlogDetails;
