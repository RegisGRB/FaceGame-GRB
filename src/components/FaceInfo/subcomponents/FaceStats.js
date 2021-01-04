import React from 'react';
import MotionFade from "../../Motion/MotionFade";
import { motion } from "framer-motion";
import { LangContext } from "../../../context";
import StyledTheme from "../../StyledComponents/StyledTheme";
const FaceStats = ({level,item}) => {
    const LangContextx = React.useContext(LangContext);
    return (
        <MotionFade controller={localStorage.getItem("User") ? null : "hidden"} hidden={[10,0,0]} >
        <motion.div className="FaceGameInfo">
          <StyledTheme as="li" fontcolor="true">
            <span>{level}</span> <p>{LangContextx.Level}</p>
          </StyledTheme>
          <StyledTheme as="li" fontcolor="true">
            <span>{item}</span> <p>{LangContextx.Items}</p>
          </StyledTheme>
        </motion.div>
      </MotionFade>
    );
};

export default FaceStats;