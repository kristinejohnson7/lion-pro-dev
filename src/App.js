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
import NavProvider from "./context/NavContext";

function App() {
  return (
    <Router>
      <NavProvider>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
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
        </Routes>
        <Footer />
      </NavProvider>
    </Router>
  );
}

export default App;
