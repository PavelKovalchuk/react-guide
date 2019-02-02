import React from "react";
import {LightBulb} from "./LightBulb";
import {LightBulbContext} from "./LightBulbContext";

export const LightBulbContextContainer = () => {

  return (
    <LightBulbContext.Provider value={"Luke"}>
      <LightBulb />
    </LightBulbContext.Provider>
  );
};