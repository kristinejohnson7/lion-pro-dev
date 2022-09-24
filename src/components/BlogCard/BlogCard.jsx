import React from "react";
import { useNavigate } from "react-router-dom";
import s from "./BlogCard.module.scss";
import { LazyLoadImage } from "react-lazy-load-image-component";

export default function BlogCard(data) {
  const { featuredPicture, title, slug, author, tag, excerpt } = data;

  let navigate = useNavigate();
  const routeChange = (slug) => {
    let pathName = `/blog/${slug}`;
    navigate(pathName);
  };

  return (
    <div className={`${s.blogCard} grow`} onClick={() => routeChange(slug)}>
      <div className={s.blogCardPic}>
        <LazyLoadImage src={featuredPicture} alt="featured blog" />
      </div>
      <div className={s.blogCardTag}>
        <p>{tag.toUpperCase()}</p>
      </div>
      <div className={s.blogCardText}>
        <h4>{title}</h4>
        <p className={s.cardTextPreview}>{excerpt}</p>
        <p className={s.blogAuthor}>{author}</p>
      </div>
    </div>
  );
}
