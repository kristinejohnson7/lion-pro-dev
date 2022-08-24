import { createContext, useState, useEffect, useCallback } from "react";
import { client } from "../client";

const context = createContext({ contact: null });

const { Provider } = context;

export const ContactProvider = ({ children }) => {
  const [contact, setContact] = useState([]);

  const cleanContactInfo = useCallback((rawData) => {
    const cleanContact = rawData.map((slide) => {
      const { sys, fields } = slide;
      const { id } = sys;
      const type = fields.contactType;
      const details = fields.contactDetails;
      const icon = fields.icon;
      const updatedContact = {
        id,
        type,
        details,
        icon,
      };
      return updatedContact;
    });
    setContact(cleanContact);
  }, []);

  useEffect(() => {
    const getContactInfo = async () => {
      try {
        const response = await client.getEntries({
          content_type: "lpdContact",
        });
        const responseData = response.items;
        if (responseData) {
          cleanContactInfo(responseData);
        } else {
          setContact([]);
        }
      } catch (err) {
        console.error(err);
      }
    };
    getContactInfo();
  }, []);

  return (
    <Provider
      value={{
        contact,
      }}
      children={children}
    />
  );
};

export default context;
