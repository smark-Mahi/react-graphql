import React, { createContext, useContext, useEffect, useState } from "react";

const GlobalStatesContext = createContext();
export const GetStatesGlobally = ({ children }) => {
  const [getSearchKey, setGetSearchKey] = useState("");
  useEffect(() => {
    console.log(getSearchKey, "getkey");
  }, [getSearchKey]);
  return (
    <GlobalStatesContext.Provider value={{ getSearchKey, setGetSearchKey }}>
      {children}
    </GlobalStatesContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(GlobalStatesContext);
};
