import React from "react";
import {LightBulbContext} from "./LightBulbContext";

export const LightBulbContextContainer = ({props, children}) => {

  return (
    <LightBulbContext.Provider value={"Luke"}>
      {children}
    </LightBulbContext.Provider>
  );
};