import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ isHomeLoading: true, hero: null });

const { Provider } = context;

export const HomePageProvider = ({ children }) => {
  const [isHomeLoading, setIsHomeLoading] = useState(false);
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
      setIsHomeLoading(true);
      try {
        const response = await client.getEntries({ content_type: "lpdHero" });
        const responseData = response.items;
        if (responseData) {
          cleanHeroInfo(responseData);
        } else {
          setHero([]);
        }
        setIsHomeLoading(false);
      } catch (err) {
        console.log(err);
        setIsHomeLoading(false);
      }
    };
    getHeroInfo();
  }, []);

  return (
    <Provider
      value={{
        isHomeLoading,
        hero,
      }}
      children={children}
    />
  );
};

export default context;
