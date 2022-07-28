import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ blog: null });

const { Provider } = context;

export const BlogProvider = ({ children }) => {
  const [blog, setBlog] = useState([]);

  const cleanBlogInfo = useCallback((rawData) => {
    const cleanBlog = rawData.map((slide) => {
      console.log("raw", rawData);
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const author = fields.author;
      const date = fields.date;
      const content = fields.content;
      const featuredPicture = fields.featuredImage.fields.file.url;
      const updatedBlog = {
        id,
        title,
        author,
        date,
        content,
        featuredPicture,
      };
      return updatedBlog;
    });
    setBlog(cleanBlog);
  }, []);

  useEffect(() => {
    const getBlogInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: "lpdBlogPost",
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
    getBlogInfo();
  }, []);

  return (
    <Provider
      value={{
        blog,
      }}
      children={children}
    />
  );
};

export default context;
