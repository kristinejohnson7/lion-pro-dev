import "./App.css";
import Nav from "./components/Nav/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Blog from "./components/Blog/Blog";
import BlogPost from "./components/BlogPost/BlogPost";
import "./defaults.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { BlogProvider } from "./context/blogs";

function App() {
  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blog" element={<Blog />} />
        <Route
          path="/blog/:slug"
          element={
            <BlogProvider>
              <BlogPost />
            </BlogProvider>
          }
        />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
