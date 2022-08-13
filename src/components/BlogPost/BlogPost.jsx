import React, { useRef, useEffect, useState, useContext } from "react";
import { useLocation, useParams } from "react-router-dom";
import blogContext from "../../context/blogs";
import "./BlogPost.css";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import dayjs from "dayjs";
import readingTime from "reading-time/lib/reading-time";

export default function BlogPost() {
  const { singleBlog, getSingleBlog } = useContext(blogContext);
  const { slug } = useParams();
  const { author, content, date, featuredImage, title } = singleBlog;
  const [readingTimeState, setReadingTimeState] = useState("");

  const ref = useRef();

  useEffect(() => {
    if (slug) {
      getSingleBlog(slug);
    }
  }, [slug]);

  useEffect(() => {
    if (ref.current) {
      const stats = readingTime(ref.current.innerText);
      setReadingTimeState(stats.minutes);
    }
  }, [content, ref]);

  console.log("pic", featuredImage);

  return (
    slug &&
    title && (
      <>
        <div className="blogPost">
          <div className="blogHeader">
            <div className="blogDetailsHeader">
              <p>{author}</p>
              <p className="headerDateAndTime">
                {dayjs(date).format("dddd MMM DD, YYYY")}
                <span>-</span>
                <span className="readEstimate">
                  {parseInt(readingTimeState) > 0
                    ? `${parseInt(readingTimeState)} min read`
                    : "Less than one min read"}
                </span>
              </p>
            </div>
            <h3 className="title">{title.toUpperCase()}</h3>
          </div>

          <div className="blogFeaturedImg">
            <img src={featuredImage.fields.file.url} alt="blog featured" />
          </div>
          <div className="blogText" ref={ref}>
            <RichTextToReact content={content} />
          </div>
        </div>
      </>
    )
  );
}
