import { createContext, useState, useEffect, useCallback, useRef } from "react";
import { client } from "../client";

const context = createContext({ portfolio: null });

const { Provider } = context;

export const PortfolioProvider = ({ children }) => {
  const [portfolio, setPortfolio] = useState([]);
  const [singlePortfolio, setSinglePortfolio] = useState({});
  const loadingRef = useRef(false);

  const cleanPortfolioInfo = useCallback((rawData) => {
    const cleanPortfolio = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const title = fields.title;
      const description = fields.description;
      const slug = fields.slug;
      const cardImage = fields.cardImage;
      const content = fields.content;
      const youTubeEmbedId = fields.youTubeVideoId;
      const updatedPortfolio = {
        id,
        title,
        description,
        cardImage,
        content,
        slug,
        youTubeEmbedId,
      };
      return updatedPortfolio;
    });
    setPortfolio(cleanPortfolio);
  }, []);

  const getSinglePortfolio = async (slug) => {
    try {
      const response = await client.getEntries({
        content_type: "lpdPortfolio",
        "fields.slug": slug,
      });
      const portfolio = response.items[0];
      setSinglePortfolio(portfolio.fields);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    const getPortfolioInfo = async () => {
      if (!loadingRef.current) {
        loadingRef.current = true;
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
      }
    };
    getPortfolioInfo();
  }, []);

  return (
    <Provider
      value={{
        portfolio,
        singlePortfolio,
        getSinglePortfolio,
      }}
      children={children}
    />
  );
};

export default context;
