import React, { useContext, useState } from "react";
import blogContext from "../../context/blogs";
import BlogCard from "../BlogCard/BlogCard";
import "./BlogListings.css";
import ReactPaginate from "react-paginate";

export default function BlogListings() {
  const { blog } = useContext(blogContext);
  const [pageNumber, setPageNumber] = useState(0);

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

  return (
    <div className="blogListingsContainer">
      <h2>Blog Listings</h2>
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
      <div className="blogListings"> {displayPosts}</div>
    </div>
  );
}
