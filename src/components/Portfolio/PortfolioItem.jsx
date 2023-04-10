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
          <div className={s.content}>
            <Header title="A team of experts here to help." variant="primary" />
            <p>
              <ol>
                <li>
                  <span>Discovery phase:</span> We begin by understanding your
                  business goals, target audience, and project requirements.
                  This involves meetings with you to gather information and
                  research on your industry and competition.
                </li>
                <li>
                  <span>Planning phase:</span> Once we have a clear
                  understanding of your project requirements, we develop a
                  detailed project plan that outlines the timeline, budget, and
                  scope of work. This plan is reviewed with you to ensure we are
                  on the same page.
                </li>
                <li>
                  <span>Design phase:</span> We create wireframes and mockups to
                  visualize the website's layout and design. We work with you to
                  refine the design until it meets your expectations.
                </li>
                <li>
                  <span>Development phase:</span> We use the latest technologies
                  to build a fully functional website that meets your
                  requirements. We make sure the website is optimized for search
                  engines and mobile devices.
                </li>
                <li>
                  <span>Testing and Quality Assurance phase:</span> We
                  rigorously test the website to ensure it functions properly,
                  is secure, and meets industry standards.
                </li>
                <li>
                  <span>Launch phase:</span> Once the website has been approved,
                  we deploy it to your server and make it live. We provide
                  training and support to ensure you can manage the website
                  easily.
                </li>
              </ol>
            </p>
          </div>
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
