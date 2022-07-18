import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ blogLoading: false, blog: null });

const { Provider } = context;

export const BlogProvider = ({ children }) => {
  const [blogLoading, setBlogLoading] = useState(false);
  const [blog, setBlog] = useState([]);

  const cleanBlogInfo = useCallback((rawData) => {
    const cleanBlog = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const author = fields.author;
      const date = fields.date;
      const content = fields.description;
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
      setBlogLoading(true);
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
        setBlogLoading(false);
      } catch (err) {
        console.log(err);
        setBlogLoading(false);
      }
    };
    getBlogInfo();
  }, []);

  return (
    <Provider
      value={{
        blogLoading,
        blog,
      }}
      children={children}
    />
  );
};

export default context;
