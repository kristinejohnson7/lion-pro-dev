import React, { useContext } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import "./FeaturedBlogs.css";
import { Link } from "react-router-dom";
import shape1 from "../../assets/bgshape1.svg";
import shape2 from "../../assets/bgshape2.svg";
import { motion } from "framer-motion";
import { Fade } from "react-awesome-reveal";

export default function FeaturedBlogs() {
  const { blog } = useContext(blogContext);

  return (
    <Fade>
      <div className="featuredBlogs">
        <motion.div className="bgShapeContainer">
          <div className="featuredBlogsTitle">
            <h2>Featured Blogs</h2>
            <p>
              Check out our <Link to="/blog">blogs</Link> to learn more about
              projects and developer tips.
            </p>
          </div>
          <div className="featuredBlogWrapper">
            <div className="bgShapeTop">
              <img src={shape1} alt="bg shape" />
            </div>
            {blog.map((item) => {
              return <BlogCard key={item.id} {...item} />;
            })}
            <div className="bgShapeBottom">
              <img src={shape2} alt="bg shape" />
            </div>
          </div>
        </motion.div>
      </div>
    </Fade>
  );
}
