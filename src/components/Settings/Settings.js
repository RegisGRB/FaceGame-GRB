
import React from "react";
import {LangContext} from "../../context";
import {ThemeContext} from "../../context";
import {StyledTheme} from "../../components/StyledComponents";

const Settings = ({className}) => {
const LangContextx = React.useContext(LangContext);
const ThemeContextx = React.useContext(ThemeContext);
    return (
        <div className={className}>
        <StyledTheme fontcolorinvert="true" className="BIG" onClick={()=>ThemeContextx.updateTheme("Black")} >{LangContextx.Black}</StyledTheme>
        <StyledTheme fontcolorinvert="true" className="BIG" onClick={()=>ThemeContextx.updateTheme("White")} >{LangContextx.White}</StyledTheme>
        <StyledTheme fontcolorinvert="true" className="BIG" onClick={()=>LangContextx.updateTranslation("en")} >EN</StyledTheme>
        <StyledTheme fontcolorinvert="true" className="BIG" onClick={()=>LangContextx.updateTranslation("fr")} >FR</StyledTheme>
     </div>
    );
};

export default Settings;
