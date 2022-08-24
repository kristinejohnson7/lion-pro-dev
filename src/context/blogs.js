import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ blog: null });

const { Provider } = context;

export const BlogProvider = ({ children, isFeatured }) => {
  const [blog, setBlog] = useState([]);
  const [singleBlog, setSingleBlog] = useState({});

  const cleanBlogInfo = useCallback((rawData) => {
    const cleanBlog = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const author = fields.author;
      const date = fields.date;
      const content = fields.content;
      const slug = fields.slug;
      const tag = fields.tag;
      const excerpt = fields.excerpt;
      const isFeatured = fields.isFeatured;
      const featuredPicture = fields.featuredImage.fields.file.url;
      const updatedBlog = {
        id,
        title,
        author,
        date,
        content,
        slug,
        tag,
        excerpt,
        featuredPicture,
        isFeatured,
      };
      return updatedBlog;
    });
    setBlog(cleanBlog);
  }, []);

  const getBlogInfo = async (search, tag, featured) => {
    try {
      const response = await client.getEntries({
        content_type: "lpdBlogPost",
        order: "-sys.createdAt",
        "fields.title[match]": search,
        "fields.tag[match]": tag,
        "fields.isFeatured": featured,
      });
      const responseData = response.items;
      if (responseData) {
        cleanBlogInfo(responseData);
      } else {
        setBlog([]);
      }
    } catch (err) {
      console.log(err);
    }
  };

  const getSingleBlog = async (slug) => {
    try {
      const response = await client.getEntries({
        content_type: "lpdBlogPost",
        "fields.slug": slug,
      });
      const blog = response.items[0];
      setSingleBlog(blog.fields);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    getBlogInfo(undefined, undefined, isFeatured);
  }, [isFeatured]);

  return (
    <Provider
      value={{
        blog,
        getBlogInfo,
        getSingleBlog,
        singleBlog,
      }}
      children={children}
    />
  );
};

export default context;
