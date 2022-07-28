import React from "react";
import { useNavigate } from "react-router-dom";
import "./BlogCard.css";

export default function BlogCard(data) {
  const { author, content, date, featuredPicture, id, title } = data;

  console.log("data before", data);
  let navigate = useNavigate();
  const routeChange = (id) => {
    let pathName = `/blog/${id}`;
    navigate(pathName, { state: data });
  };

  return (
    <div className="blogCard" onClick={() => routeChange(id)}>
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
