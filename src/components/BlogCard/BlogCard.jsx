import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard(data) {
  const { featuredPicture, content, title, slug } = data;

  let navigate = useNavigate();
  const routeChange = (slug) => {
    let pathName = `/blog/${slug}`;
    navigate(pathName, { state: data });
  };

  return (
    <div className="blogCard" onClick={() => routeChange(slug)}>
      <div className="blogCardPic">
        <img src={featuredPicture} alt="featured blog" />
      </div>
      <div className="blogCardText">
        <h4>{title}</h4>
        {/* <p>{content}</p> */}
      </div>
    </div>
  );
}
