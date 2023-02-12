import React, { lazy } from "react";
import Hero from "../Hero/Hero";
import { HomePageProvider } from "../../context/home-page";
import { ServicesProvider } from "../../context/services";
import Services from "../Services/Services";
import { PortfolioProvider } from "../../context/portfolio";
import { BlogProvider } from "../../context/blogs";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import { AboutProvider } from "../../context/about";
import s from "./Home.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import { TestimonialsProvider } from "../../context/testimonials";
import Process from "../Process/Process";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const Testimonials = lazy(() => import("../Testimonials/Testimonials"));
  const FeaturedBlogs = lazy(() => import("../FeaturedBlogs/FeaturedBlogs"));
  const About = lazy(() => import("../About/About"));

  return (
    <>
      <motion.div className={s.progressBar} style={{ scaleX }} />
      <HomePageProvider>
        <Hero />
      </HomePageProvider>
      <ServicesProvider>
        <Services />
      </ServicesProvider>
      <Process />
      <PortfolioProvider>
        <Portfolio />
      </PortfolioProvider>
      <TestimonialsProvider>
        <Testimonials />
      </TestimonialsProvider>
      <BlogProvider isFeatured>
        <FeaturedBlogs />
      </BlogProvider>
      <AboutProvider>
        <About />
      </AboutProvider>
      <Contact />
    </>
  );
}
