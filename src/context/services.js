import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";
import { selectServiceData } from "./selectors";

const context = createContext({ isServicesLoading: true, services: null });

const { Provider } = context;

export const ServicesProvider = ({ children }) => {
  const [isServicesLoading, setIsServicesLoading] = useState(false);
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServicesInfo = async () => {
      setIsServicesLoading(true);
      try {
        const response = await client.getEntries({
          content_type: "lpdServices",
        });
        const responseData = response.items;
        if (responseData) {
          setServices(selectServiceData(responseData));
        } else {
          setServices([]);
        }
        setIsServicesLoading(false);
      } catch (err) {
        console.log(err);
        setIsServicesLoading(false);
      }
    };
    getServicesInfo();
  }, []);

  return (
    <Provider
      value={{
        isServicesLoading,
        services,
      }}
      children={children}
    />
  );
};

export default context;
