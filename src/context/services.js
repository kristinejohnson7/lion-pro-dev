import { createContext, useState, useEffect } from "react";
import { client } from "../client";
import { selectServiceData } from "./selectors";

const context = createContext({ services: null });

const { Provider } = context;

export const ServicesProvider = ({ children }) => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    const getServicesInfo = async () => {
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
      } catch (err) {
        console.log(err);
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
