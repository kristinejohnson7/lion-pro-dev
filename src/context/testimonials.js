import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  console.log("testimonials", testimonials);

  const cleanTestimonialsInfo = useCallback((rawData) => {
    const cleanTestimonials = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const videoSource = fields.videoSource;
      const updatedTestimonials = {
        id,
        title,
        videoSource,
      };
      return updatedTestimonials;
    });
    setTestimonials(cleanTestimonials);
  }, []);

  useEffect(() => {
    const getTestimonialsInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: "lpdTestimonial",
        });
        const responseData = response.items;
        if (responseData) {
          cleanTestimonialsInfo(responseData);
        } else {
          setTestimonials([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTestimonialsInfo();
  }, []);

  return (
    <Provider
      value={{
        testimonials,
      }}
      children={children}
    />
  );
};

export default context;
