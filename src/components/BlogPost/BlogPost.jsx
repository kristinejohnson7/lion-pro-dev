import React, { useRef, useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import blogContext from "../../context/blogs";
import s from "./BlogPost.module.scss";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import dayjs from "dayjs";
import readingTime from "reading-time/lib/reading-time";
import { motion, useScroll, useSpring } from "framer-motion";
import Header from "../Header/Header";

export default function BlogPost() {
  const { singleBlog, getSingleBlog } = useContext(blogContext);
  const { slug } = useParams();
  const { author, content, date, featuredImage, title } = singleBlog;
  const [readingTimeState, setReadingTimeState] = useState("");

  const ref = useRef();

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

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

  return (
    slug &&
    title && (
      <>
        <motion.div className="progress-bar" style={{ scaleX }} />
        <section className="container">
          <div className={s.blogHeader}>
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
          </div>
          <div className={s.blogFeaturedImg}>
            <img src={featuredImage.fields.file.url} alt="blog featured" />
          </div>
          <div className={s.blogText} ref={ref}>
            <RichTextToReact content={content} />
          </div>
        </section>
      </>
    )
  );
}
