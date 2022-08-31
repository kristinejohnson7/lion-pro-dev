import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const TermsProvider = ({ children }) => {
  const [terms, setTerms] = useState([]);

  const cleanTermsInfo = useCallback((rawData) => {
    const cleanTerms = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const updatedTerms = {
        id,
        title,
        description,
      };
      return updatedTerms;
    });
    setTerms(cleanTerms);
  }, []);

  useEffect(() => {
    const getTermsInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: "lpdTermsOfUse",
        });
        const responseData = response.items;
        if (responseData) {
          cleanTermsInfo(responseData);
        } else {
          setTerms([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getTermsInfo();
  }, []);

  return (
    <Provider
      value={{
        terms,
      }}
      children={children}
    />
  );
};

export default context;
