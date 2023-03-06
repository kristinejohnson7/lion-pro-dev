import React, { useEffect, useContext, useState, useRef } from "react";
import s from "./PortfolioItem.module.scss";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import portfolioContext from "../../context/portfolio";
import Header from "../Header/Header";
import RichTextToReact from "../RichTextToReact/RichTextToReact";
import { AnimatePresence } from "framer-motion";
import Modal from "../Modal/Modal";

export default function PortfolioItem() {
  const { singlePortfolio, getSinglePortfolio } = useContext(portfolioContext);
  const { slug } = useParams();
  const [isOpen, setIsOpen] = useState("");
  const ref = useRef();

  const { title, youTubeVideoId, portfolioItemHeaderImage, content } =
    singlePortfolio;

  useEffect(() => {
    if (slug) {
      getSinglePortfolio(slug);
    }
  }, [slug]);

  return slug ? (
    <>
      <section className={s.itemWrapper}>
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
