import React, { useContext } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import s from "./FeaturedBlogs.module.scss";
import { Link } from "react-router-dom";
import shape1 from "../../assets/bgshape1.svg";
import shape2 from "../../assets/bgshape2.svg";
import Header from "../Header/Header";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { useNav } from "../../hooks/useNav";

export default function FeaturedBlogs() {
  const { blog } = useContext(blogContext);

  const blogRef = useNav("blog");

  return (
    <section id="blog" className={s.featuredBlogs} ref={blogRef}>
      <div className="container">
        <div className={s.blogsTitle}>
          <Header title="Featured Blogs" />
          <p>
            Check out our <Link to="/blog">blogs</Link> to learn more about
            projects and developer tips.
          </p>
        </div>
        <div className={s.blogWrapper}>
          <div className={s.bgShapeTop}>
            <LazyLoadImage
              src={shape1}
              alt="bg shape"
              width="205px"
              height="205px"
            />
          </div>
          {blog.map((item) => {
            return <BlogCard key={item.id} {...item} />;
          })}
          <div className={s.bgShapeBottom}>
            <LazyLoadImage
              src={shape2}
              alt="bg shape"
              width="270px"
              height="274px"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
