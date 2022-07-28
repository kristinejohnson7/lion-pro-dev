import React, { useContext } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogListings.css";

export default function BlogListings() {
  const { blog } = useContext(blogContext);

  console.log("blog", blog);

  return (
    <div className="blogListings">
      {blog.map((item) => (
        <BlogCard key={item.id} {...item} />
      ))}
    </div>
  );
}
