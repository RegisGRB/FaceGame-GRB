import React from "react";
import { StyledTheme, StyledTitle } from "../../../StyledComponents";
import { motion } from "framer-motion";
import MotionFade from "../../../Motion/MotionFade";
import "./FaceBranding.scss";
import {LangContext} from "../../../../context";
const FaceBranding = ({ Fadecontroller }) => {
  const LangContextx = React.useContext(LangContext);
  return (
    <MotionFade controller={Fadecontroller} duration={0.8}>
      <motion.div className="FaceBranding">
      <StyledTitle as="h1">FACEGAME</StyledTitle>
      <div className="FaceBrandingImg"></div>
      <StyledTheme as="p" shadowinvert="true" >
      GRB-GAME 2019|<span>{new Date().getFullYear()}</span><br></br><br></br>  
      {LangContextx.Instructions}
      </StyledTheme>
      </motion.div>
    </MotionFade>
  );
};

export default FaceBranding;
