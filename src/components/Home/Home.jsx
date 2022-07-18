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
import Blog from "../Blog/Blog";
import { AboutProvider } from "../../context/about";
import About from "../About/About";

export default function Home() {
  return (
    <>
      <HomePageProvider>
        <Hero />
      </HomePageProvider>
      <ServicesProvider>
        <Services />
      </ServicesProvider>
      <PortfolioProvider>
        <Portfolio />
      </PortfolioProvider>
      <AboutProvider>
        <About />
      </AboutProvider>
      <ContactProvider>
        <Contact />
      </ContactProvider>
      <BlogProvider>{/* <Blog /> */}</BlogProvider>
    </>
  );
}
