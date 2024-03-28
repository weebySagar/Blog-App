import BlogHeader from "@components/blogs/BlogHeader/BlogHeader";
import BlogHeroBanner from "@components/blogs/BlogHeroBanner/BlogHeroBanner";
import Blogs from "@components/blogs/Blogs/Blogs";
import React from "react";

import { getAllBlogs } from "../services/blogService";

const BlogPage = () => {
  return (
    <div>
      <BlogHeader />
      <BlogHeroBanner />
      <Blogs title={"Blogs"} fetchFunction={getAllBlogs} />
    </div>
  );
};

export default BlogPage;
