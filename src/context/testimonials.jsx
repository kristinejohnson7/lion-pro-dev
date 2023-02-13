import { createContext, useState, useEffect, useCallback, useRef } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const TestimonialsProvider = ({ children }) => {
  const [testimonials, setTestimonials] = useState([]);
  const loadingRef = useRef(false);

  const cleanTestimonialsInfo = useCallback((rawData) => {
    const cleanTestimonials = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const quote = fields.quote;
      const videoSource = fields.videoSource;
      const testImage = fields.image?.fields?.file?.url;

      const updatedTestimonials = {
        id,
        title,
        quote,
        videoSource,
        testImage,
      };
      return updatedTestimonials;
    });
    setTestimonials(cleanTestimonials);
  }, []);

  useEffect(() => {
    const getTestimonialsInfo = async () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
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
