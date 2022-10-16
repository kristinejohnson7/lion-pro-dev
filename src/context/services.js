import { createContext, useState, useEffect, useRef } from "react";
import { client } from "../client";
import { selectServiceData } from "./selectors";

const context = createContext({ services: null });

const { Provider } = context;

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);
  const loadingRef = useRef(false);

  useEffect(() => {
    const getServicesInfo = async () => {
      if (!loadingRef.current) {
        try {
          loadingRef.current = true;
          const response = await client.getEntries({
            content_type: "lpdServices",
          });
          const responseData = response.items;
          if (responseData) {
            setServices(selectServiceData(responseData));
          } else {
            setServices([]);
          }
        } catch (err) {
          console.error(err);
        }
      }
    };
    getServicesInfo();
  }, []);

  return (
    <Provider
      value={{
        services,
      }}
      children={children}
    />
  );
};

export default context;
