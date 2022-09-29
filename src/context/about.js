import { createContext, useState, useEffect, useCallback, useRef } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const AboutProvider = ({ children }) => {
  const [about, setAbout] = useState([]);
  const loadingRef = useRef(false);

  const cleanAboutInfo = useCallback((rawData) => {
    const cleanAbout = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const name = fields.name;
      const picture = fields.picture.fields.file.url;
      const description = fields.description;
      const updatedAbout = {
        id,
        name,
        picture,
        description,
      };
      return updatedAbout;
    });
    setAbout(cleanAbout);
  }, []);

  useEffect(() => {
    const getAboutInfo = async () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
        try {
          const response = await client.getEntries({
            content_type: "lpdAbout",
          });
          const responseData = response.items;
          if (responseData) {
            cleanAboutInfo(responseData);
          } else {
            setAbout([]);
          }
        } catch (err) {
          console.log(err);
        }
      }
    };
    getAboutInfo();
  }, []);

  return (
    <Provider
      value={{
        about,
      }}
      children={children}
    />
  );
};

export default context;
