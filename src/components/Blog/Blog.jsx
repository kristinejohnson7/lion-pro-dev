import React, { useContext } from "react";
import blogContext from "../../context/blogs";

export default function Blog() {
  const { blog } = useContext(blogContext);

  console.log("blog", blog);

  return <div>Blog</div>;
}
