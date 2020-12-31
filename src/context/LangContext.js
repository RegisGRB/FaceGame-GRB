import React, { useState } from "react";
import * as TranslationJson from "../translations";

const LangContext = React.createContext();
const LangProvider = ({ children, Lang = "en" }) => {
  const [Translation, setTranslation] = useState(TranslationJson[Lang]);
  const updateTranslation = (x) => {
    if (TranslationJson[x]) {
      setTranslation(TranslationJson[x]);
    } else {
      throw new Error("this langage doesn't exist");
    }
  };


  return (
    <LangContext.Provider value={{ ...Translation, updateTranslation }}>
      {children}
    </LangContext.Provider>
  );
};
export  { LangProvider, LangContext as default };;
