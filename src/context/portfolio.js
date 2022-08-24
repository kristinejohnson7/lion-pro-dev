import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ portfolio: null });

const { Provider } = context;

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);

  const cleanPortfolioInfo = useCallback((rawData) => {
    const cleanPortfolio = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const pictures = fields.photos;
      const featuredPicture = fields.headerImage.fields.file.url;
      const youTubeEmbedId = fields.youTubeVideoId;
      const updatedPortfolio = {
        id,
        title,
        description,
        pictures,
        featuredPicture,
        youTubeEmbedId,
      };
      return updatedPortfolio;
    });
    setPortfolio(cleanPortfolio);
  }, []);

  useEffect(() => {
    const getPortfolioInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: "lpdPortfolio",
        });
        const responseData = response.items;
        if (responseData) {
          cleanPortfolioInfo(responseData);
        } else {
          setPortfolio([]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getPortfolioInfo();
  }, []);

  return (
    <Provider
      value={{
        portfolio,
      }}
      children={children}
    />
  );
};

export default context;
