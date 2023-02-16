import React, { useState } from "react";
import { createContext } from "react";

export const NavContext = createContext();

function NavProvider({ children }) {
  const [activeLinkId, setActiveLinkId] = useState("");
  const providerValue = {
    activeLinkId,
    setActiveLinkId,
  };

  return (
    <NavContext.Provider value={providerValue}>{children}</NavContext.Provider>
  );
}

export default NavProvider;
