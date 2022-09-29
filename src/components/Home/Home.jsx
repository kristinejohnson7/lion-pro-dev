import React from "react";
import Hero from "../Hero/Hero";
import { HomePageProvider } from "../../context/home-page";
import { ServicesProvider } from "../../context/services";
import Services from "../Services/Services";
import { PortfolioProvider } from "../../context/portfolio";
import { BlogProvider } from "../../context/blogs";
import { ContactProvider } from "../../context/contact";
import Portfolio from "../Portfolio/Portfolio";
import Contact from "../Contact/Contact";
import FeaturedBlogs from "../FeaturedBlogs/FeaturedBlogs";
import { AboutProvider } from "../../context/about";
import About from "../About/About";
import s from "./Home.module.scss";
import { motion, useScroll, useSpring } from "framer-motion";
import Testimonials from "../Testimonials/Testimonials";
import { TestimonialsProvider } from "../../context/testimonials";

export default function Home() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  console.log("Renders");
  return (
    <>
      <motion.div className={s.progressBar} style={{ scaleX }} />
      <HomePageProvider>
        <Hero />
      </HomePageProvider>
      <ServicesProvider>
        <Services />
      </ServicesProvider>
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
      <ContactProvider>
        <Contact />
      </ContactProvider>
    </>
  );
}
