import React from "react";
import { useParams } from "react-router-dom";

import BlogHeader from "@components/blogs/BlogHeader/BlogHeader";
import BlogDetails from "@components/blogs/Blogs/BlogDetails";
import useFetch from "@hooks/useFetch";
import { getBlog } from "../services/blogService";
import { Spinner } from "react-bootstrap";

const BlogDetailPage = () => {
  const { blogId } = useParams();
  const { data, isLoading } = useFetch(getBlog, blogId);

  return (
    <>
      <BlogHeader className={"shadow"} />
      {isLoading ? (
        <div className="vh-100 w-100 d-flex justify-content-center align-items-center">
          <Spinner animation="border" variant="dark" />
        </div>
      ) : (
        <div style={{ paddingTop: "85px" }}>
          <BlogDetails blog={data} />
        </div>
      )}
    </>
  );
};

export default BlogDetailPage;
