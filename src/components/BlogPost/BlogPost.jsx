import React, { useRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import blogContext from "../../context/blogs";
import s from "./BlogPost.module.scss";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import dayjs from "dayjs";
import readingTime from "reading-time/lib/reading-time";
import { motion } from "framer-motion";
import Header from "../Header/Header";

export default function BlogPost() {
  const { singleBlog, getSingleBlog } = useContext(blogContext);
  const { slug } = useParams();
  const { author, content, date, featuredImage, title } = singleBlog;
  const [readingTimeState, setReadingTimeState] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  const ref = useRef();

  useEffect(() => {
    //scroll to top of page and only then render component
    window.scrollTo(0, 0);
    setIsScrolled(true);

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

  return slug && title && isScrolled ? (
    <>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fade: true }}
        transition={{ duration: 0.8 }}
        className="container"
      >
        <motion.div className={s.blogHeader}>
          <div className={s.blogDetailsHeader}>
            <p>{author}</p>
            <p className={s.headerDateAndTime}>
              {dayjs(date).format("dddd MMM DD, YYYY")}
              <span>-</span>
              <span>
                {parseInt(readingTimeState) > 0
                  ? `${parseInt(readingTimeState)} min read`
                  : "Less than one min read"}
              </span>
            </p>
          </div>
          <Header title={title.toUpperCase()} />
        </motion.div>
        <div className={s.blogFeaturedImg}>
          <img src={featuredImage.fields.file.url} alt="blog featured" />
        </div>
        <div className={s.blogText} ref={ref}>
          <RichTextToReact content={content} />
        </div>
      </motion.section>
    </>
  ) : null;
}
