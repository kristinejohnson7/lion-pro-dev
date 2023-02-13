import { createContext, useState, useEffect, useCallback, useRef } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const PrivacyProvider = ({ children }) => {
  const [privacy, setPrivacy] = useState([]);
  const loadingRef = useRef(false);

  const cleanPrivacyInfo = useCallback((rawData) => {
    const cleanPrivacy = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const updatedPrivacy = {
        id,
        title,
        description,
      };
      return updatedPrivacy;
    });
    setPrivacy(cleanPrivacy);
  }, []);

  useEffect(() => {
    const getPrivacyInfo = async () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
        try {
          const response = await client.getEntries({
            content_type: "lpdPrivacyPolicy",
          });
          const responseData = response.items;
          if (responseData) {
            cleanPrivacyInfo(responseData);
          } else {
            setPrivacy([]);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    getPrivacyInfo();
  }, []);

  return (
    <Provider
      value={{
        privacy,
      }}
      children={children}
    />
  );
};

export default context;
