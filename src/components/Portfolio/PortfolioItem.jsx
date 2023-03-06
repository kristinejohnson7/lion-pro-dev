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
  console.log(singlePortfolio);

  return slug ? (
    <>
      <section className={s.itemWrapper}>
        <motion.div
          className={s.itemHero}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
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
        </motion.div>
        <motion.div
          className={s.portfolioFooter}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Header title="Intuitive User Experience." variant="primary" />
          <img src={footerImage?.fields.file.url} alt="portfolio footer" />
        </motion.div>
      </section>
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
