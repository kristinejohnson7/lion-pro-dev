import { createContext, useState, useEffect, useCallback, useRef } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const FaqProvider = ({ children }) => {
  const [faq, setFaq] = useState([]);
  const loadingRef = useRef(false);

  const cleanFaqInfo = useCallback((rawData) => {
    const cleanFaq = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const question = fields.question;
      const description = fields.description;
      const updatedFaq = {
        id,
        question,
        description,
      };
      return updatedFaq;
    });
    setFaq(cleanFaq);
  }, []);

  useEffect(() => {
    const getFaqInfo = async () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
        try {
          const response = await client.getEntries({
            content_type: "lpdFaq",
          });
          const responseData = response.items;
          if (responseData) {
            cleanFaqInfo(responseData);
          } else {
            setFaq([]);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    getFaqInfo();
  }, []);

  return (
    <Provider
      value={{
        faq,
      }}
      children={children}
    />
  );
};

export default context;
