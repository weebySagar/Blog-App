import React from "react";

import BlogHeader from "@components/blogs/BlogHeader/BlogHeader";
import Blogs from "@components/blogs/Blogs/Blogs";
import { getBlogByUser } from "../services/blogService";

const MyBlogs = () => {
  return (
    <>
      <BlogHeader className={"shadow"} />
      <div style={{ paddingTop: "85px" }}>
        <Blogs
          title={"My Blogs"}
          fetchFunction={getBlogByUser}
          isMyBlog={true}
        />
      </div>
    </>
  );
};

export default MyBlogs;
