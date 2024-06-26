import React from "react";

import useFetch from "@hooks/useFetch";
import { Col, Row, Spinner } from "react-bootstrap";
import BlogItem from "./BlogItem";

const BlogsWrapper = ({ fetchFunction, isMyBlog }) => {
  const { data, isLoading, error, refetch } = useFetch(fetchFunction);

  if (isLoading)
    return (
      <div className="d-flex justify-content-center">
        <Spinner animation="border" variant="dark" />
      </div>
    );

  return (
    <div>
      <Row className="row-gap-4">
        {data?.map(blog => (
          <Col md={6} lg={4} xl={3} key={blog._id}>
            <BlogItem {...blog} isMyBlog={isMyBlog} refetch={refetch} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default BlogsWrapper;
