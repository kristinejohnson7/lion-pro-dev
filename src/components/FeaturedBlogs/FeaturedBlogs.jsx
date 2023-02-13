import React, { useContext } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import s from "./FeaturedBlogs.module.scss";
import { Link } from "react-router-dom";
import { ReactComponent as ShapeOne } from "../../assets/bgshape1.svg";
import { ReactComponent as ShapeTwo } from "../../assets/bgshape2.svg";
import Header from "../Header/Header";
import {
  LazyLoadComponent,
  LazyLoadImage,
} from "react-lazy-load-image-component";

export default function FeaturedBlogs() {
  const { blog } = useContext(blogContext);

  return (
    <LazyLoadComponent>
      <section className={s.featuredBlogs}>
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
              <ShapeOne width="205px" height="205px" />
            </div>
            {blog.map((item) => {
              return <BlogCard key={item.id} {...item} />;
            })}
            <div className={s.bgShapeBottom}>
              <ShapeTwo width="270px" height="274px" />
            </div>
          </div>
        </div>
      </section>
    </LazyLoadComponent>
  );
}
