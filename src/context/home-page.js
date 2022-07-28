import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ hero: null });

const { Provider } = context;

export const HomePageProvider = ({ children }) => {
  const [hero, setHero] = useState([]);

  const cleanHeroInfo = useCallback((rawData) => {
    const cleanHero = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const heroTitle = fields.title;
      const heroBg = fields.image.fields.file.url;
      const updatedHero = { id, heroTitle, heroBg };
      return updatedHero;
    });

    setHero(cleanHero);
  }, []);

  useEffect(() => {
    const getHeroInfo = async () => {
      try {
        const response = await client.getEntries({ content_type: "lpdHero" });
        const responseData = response.items;
        if (responseData) {
          cleanHeroInfo(responseData);
        } else {
          setHero([]);
        }
      } catch (err) {
        console.log(err);
      }
    };
    getHeroInfo();
  }, []);

  return (
    <Provider
      value={{
        hero,
      }}
      children={children}
    />
  );
};

export default context;
