
import React from "react";
import {LangContext} from "../../context";
import {ThemeContext} from "../../context";
import {StyledTheme} from "../../components/StyledComponents";
import styled from "styled-components";
import { useIsPresent,motion } from "framer-motion"

const StyledMenu = styled(StyledTheme)`
height: 0px;
width: 100vw;
position:absolute;
bottom:0;
left:0`;
const Home = ({ children, ...props }) => {
const LangContextx = React.useContext(LangContext);
const ThemeContextx = React.useContext(ThemeContext);
  return (
    <>
    <div className="container testSelector">
       <StyledTheme fontcolor="true" className="BIG" onClick={()=>ThemeContextx.updateTheme("Black")} >{LangContextx.Black}</StyledTheme>
       <StyledTheme fontcolor="true" className="BIG" onClick={()=>ThemeContextx.updateTheme("White")} >{LangContextx.White}</StyledTheme>
       <StyledTheme fontcolor="true" className="BIG" onClick={()=>LangContextx.updateTranslation("en")} >EN</StyledTheme>
       <StyledTheme fontcolor="true" className="BIG" onClick={()=>LangContextx.updateTranslation("fr")} >FR</StyledTheme>
       </div>
       <Pute></Pute>
    </>
  );
};
const Pute =() =>{
  const isPresent = useIsPresent()

  React.useEffect(() => {
    !isPresent && console.log("I've been removed!")
  }, [isPresent])
  return (<StyledMenu as={motion.div}   
    initial={{ height: "100vh" }}
    animate={{ height: "0",ease: "ease", duration: 4 }}
    exit={{ height: "100vh" }}
    ColorInvert BackgroundColorInvert>PUTE</StyledMenu>)
}
export default Home;
