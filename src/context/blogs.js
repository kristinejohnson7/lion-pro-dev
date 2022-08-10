import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ blog: null });

const { Provider } = context;

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

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
      };
      return updatedBlog;
    });
    setBlog(cleanBlog);
  }, []);

  const getBlogInfo = async (search, tag) => {
    try {
      const response = await client.getEntries({
        content_type: "lpdBlogPost",
        order: "-sys.createdAt",
        "fields.title[match]": search,
        "fields.tag[match]": tag,
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

  useEffect(() => {
    getBlogInfo();
  }, []);

  return (
    <Provider
      value={{
        blog,
        getBlogInfo,
      }}
      children={children}
    />
  );
};

export default context;
