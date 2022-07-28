import React from "react";
import { useLocation } from "react-router-dom";
import "./BlogPost.css";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import dayjs from "dayjs";

export default function BlogPost() {
  const { state } = useLocation();
  const { author, content, date, featuredPicture, id, title } = state;

  return (
    <>
      <div className="blogPost">
        <div className="blogHeader">
          <div className="blogDetailsHeader">
            <p>{author}</p>
            <p className="date">{dayjs(date).format("dddd MMM DD, YYYY")}</p>
          </div>
          <h3 className="title">{title.toUpperCase()}</h3>
        </div>

        <div className="blogFeaturedImg">
          <img src={featuredPicture} alt="blog featured" />
        </div>
        <div className="blogText">
          <RichTextToReact content={content} />
        </div>
      </div>
    </>
  );
}
