import React from "react";
import Hero from "../Hero/Hero";
import { HomePageProvider } from "../../context/home-page";
import Services from "../Services/Services";
import { BlogProvider } from "../../context/blogs";
import Contact from "../Contact/Contact";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import s from "./Home.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Testimonials from "../Testimonials/Testimonials";
import { TestimonialsProvider } from "../../context/testimonials";
import Process from "../Process/Process";
import Faq from "../Faq/Faq";
import { FaqProvider } from "../../context/faq";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  return (
    <>
      <motion.div className={s.progressBar} style={{ scaleX }} />
      <HomePageProvider>
        <Hero />
      </HomePageProvider>
      <Services />
      <Process />
      <TestimonialsProvider>
        <Testimonials />
      </TestimonialsProvider>
      <FaqProvider>
        <Faq />
      </FaqProvider>
      <BlogProvider isFeatured>
        <FeaturedBlogs />
      </BlogProvider>
      <Contact />
    </>
  );
}
