import React, { useEffect, useContext, useState, useRef } from "react";
import s from "./PortfolioItem.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import portfolioContext from "../../context/portfolio";
import Header from "../Header/Header";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";
import { motion } from "framer-motion";

export default function PortfolioItem() {
  const { singlePortfolio, getSinglePortfolio } = useContext(portfolioContext);
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState("");
  const ref = useRef();

  const {
    title,
    youTubeVideoId,
    portfolioItemHeaderImage,
    content,
    footerImage,
  } = singlePortfolio;

  useEffect(() => {
    if (slug) {
      getSinglePortfolio(slug);
    }
  }, [slug]);

  return slug ? (
    <>
      <motion.section
        className={s.itemWrapper}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, fade: true }}
        transition={{ duration: 1 }}
      >
        <div className={s.itemHero}>
          <img
            src={portfolioItemHeaderImage?.fields.file.url}
            alt="project hero"
          />

          <div className={s.itemContent}>
            <Header title={title} variant="primary" />
            <RichTextToReact content={content} />
            {youTubeVideoId && (
              <div className={s.video} onClick={() => setIsOpen(true)}>
                View video testimonial
              </div>
            )}
            <div>
              <Link className={`btn ${s.startProjectBtn}`} to="/#contact">
                START YOUR PROJECT
              </Link>
            </div>
          </div>
        </div>
        <div className={s.portfolioFooter}>
          <Header title="A team of experts here to help." variant="primary" />
          <img src={footerImage?.fields.file.url} alt="portfolio footer" />
        </div>
      </motion.section>
      <AnimatePresence initial={false} exitBeforeEnter={true}>
        {isOpen && (
          <Modal>
            <div className="testimonialIframe" ref={ref}>
              <button className="btn" onClick={() => setIsOpen(false)}>
                X
              </button>
              <iframe
                title="title"
                src={youTubeVideoId}
                frameBorder="0"
              ></iframe>
            </div>
          </Modal>
        )}
      </AnimatePresence>
    </>
  ) : (
    <div>Error</div>
  );
}
