import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import BlogListings from "./components/BlogListings/BlogListings";
import BlogPost from "./components/BlogPost/BlogPost";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/blogs";
import { TermsProvider } from "./context/terms";
import { PrivacyProvider } from "./context/privacy";
import Terms from "./components/Terms/Terms";
import Privacy from "./components/Privacy/Privacy";
import "./sassStyles/_global.scss";
import About from "./components/About/About";
import { AboutProvider } from "./context/about";
import Portfolio from "./components/Portfolio/Portfolio";
import { PortfolioProvider } from "./context/portfolio";
import PortfolioItem from "./components/Portfolio/PortfolioItem";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <AboutProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route
            path="/projects"
            element={
              <PortfolioProvider>
                <Portfolio />
              </PortfolioProvider>
            }
          />
          <Route
            path="/blog"
            element={
              <BlogProvider>
                <BlogListings />
              </BlogProvider>
            }
          />
          <Route
            path="/blog/:slug"
            element={
              <BlogProvider>
                <BlogPost />
              </BlogProvider>
            }
          />
          <Route
            path="/project/:slug"
            element={
              <PortfolioProvider>
                <PortfolioItem />
              </PortfolioProvider>
            }
          />
          <Route
            path="/terms-of-use"
            element={
              <TermsProvider>
                <Terms />
              </TermsProvider>
            }
          />
          <Route
            path="/privacy-policy"
            element={
              <PrivacyProvider>
                <Privacy />
              </PrivacyProvider>
            }
          />
          <Route exact={true} path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </AboutProvider>
    </Router>
  );
}

export default App;
