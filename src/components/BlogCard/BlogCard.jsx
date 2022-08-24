import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";
import { motion } from "framer-motion";

export default function BlogCard(data) {
  const { featuredPicture, title, slug, author, tag, excerpt } = data;

  let navigate = useNavigate();
  const routeChange = (slug) => {
    let pathName = `/blog/${slug}`;
    navigate(pathName);
  };

  return (
    <div>
      <motion.div
        whileHover={{ scale: 1.04 }}
        whileTap={{ scale: 0.9 }}
        className="blogCard"
        onClick={() => routeChange(slug)}
      >
        <div className="blogCardPic">
          <img src={featuredPicture} alt="featured blog" />
        </div>
        <div className="blogCardTag">
          <p>{tag.toUpperCase()}</p>
        </div>
        <div className="blogCardText">
          <h4>{title}</h4>
          <p className="cardTextPreview">{excerpt}</p>
          <p className="blogAuthor">{author}</p>
        </div>
      </motion.div>
    </div>
  );
}
