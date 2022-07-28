import React, { useContext } from "react";
import { BlogProvider } from "../../context/blogs";
import BlogListings from "../BlogListings/BlogListings";

export default function Blog() {
  return (
    <BlogProvider>
      <BlogListings />
    </BlogProvider>
  );
}
