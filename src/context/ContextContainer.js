import React from "react";
import { LangProvider } from "./LangContext";
import { ThemeProviderContext } from "./ThemeContext";
const ContextContainer = ({ children, ...props }) => {
  return (
    <ThemeProviderContext>
      <LangProvider>{children}</LangProvider>
    </ThemeProviderContext>
  );
};

export default ContextContainer;
