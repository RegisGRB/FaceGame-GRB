import React, { useState } from "react";
import * as ThemeJson from "../Theme";
import { ThemeProvider,createGlobalStyle } from "styled-components";
const ThemeContext = React.createContext();

const ThemeProviderContext = ({ children, ThemeSelected = "Black" }) => {
  const [Theme, setTheme] = useState(ThemeJson[ThemeSelected]);

  const updateTheme = (ThemeSelected) => {
    if (ThemeJson[ThemeSelected]) {
      setTheme(ThemeJson[ThemeSelected]);
    } else {
      throw new Error("this Theme doesn't exist");
    }
  };
  const GlobalStyle = createGlobalStyle`
  body,html {
    background-color: ${Theme.colors.background};
    color: ${Theme.colors.text}; 
    transition:all 1s;
  }
`;
  return (
    <ThemeContext.Provider value={{ ...Theme, updateTheme }}>
      <GlobalStyle/>
      <ThemeProvider theme={Theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};
export { ThemeProviderContext, ThemeContext as default };
