import React, { useContext, useState } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import ReactPaginate from "react-paginate";
import "./BlogListings.css";

export default function BlogListings() {
  const { blog, getBlogInfo } = useContext(blogContext);
  const [pageNumber, setPageNumber] = useState(0);
  const [searchWord, setSearchWord] = useState("");

  const postsPerPage = 6;
  const pagesVisited = pageNumber * postsPerPage;

  const displayPosts = blog
    .slice(pagesVisited, pagesVisited + postsPerPage)
    .map((item) => {
      return <BlogCard key={item.id} {...item} />;
    });

  const pageCount = Math.ceil(blog.length / postsPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  const handleFilter = (event) => {
    const searchWord = event.target.value;
    setPageNumber(0);
    getBlogInfo(searchWord);
    setSearchWord(searchWord);
  };

  const handleTag = (tag) => {
    if (tag === null) {
      setPageNumber(0);
      getBlogInfo(null, null);
      setSearchWord("");
    }
    setPageNumber(0);
    getBlogInfo(null, tag);
    setSearchWord(tag);
  };

  return (
    <div className="blogListingsContainer">
      <div className="blogHeader">
        <h2>Blog Listings</h2>
        <p>
          Check out our blogs for developers offering tips on how to code clean,
          and case studies for Android development.
        </p>
      </div>
      <div className="blogFilterOptions">
        <div className="filterTags">
          <button onClick={() => handleTag(null)}>All</button>
          <button onClick={() => handleTag("Developer Guides")}>
            Developer Guides
          </button>
          <button onClick={() => handleTag("Android")}>Android</button>
        </div>
        <div className="blogSearch">
          <i className="fa-solid fa-magnifying-glass"></i>
          <input
            type="text"
            onChange={handleFilter}
            placeholder="Search blog title"
          />
        </div>
      </div>
      <div className="blogListings"> {displayPosts}</div>
      <div>
        <ReactPaginate
          previousLabel={""}
          nextLabel={""}
          pageCount={pageCount}
          onPageChange={changePage}
          containerClassName={"paginationBttns"}
          previousLinkClassName={"fa-solid fa-angle-left fa-lg"}
          nextLinkClassName={"fa-solid fa-angle-right fa-lg"}
          disabledClassName={"paginationDisabled"}
          activeClassName={"paginationActive"}
        />
      </div>
    </div>
  );
}
