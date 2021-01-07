import React from "react";
import { StyledTheme } from "../../../StyledComponents";
import { motion } from "framer-motion";
import MotionFade from "../../../Motion/MotionFade";
import "./FaceBranding.scss";
const FaceBranding = ({ Fadecontroller, Highscore }) => {
  return (
    <MotionFade controller={Fadecontroller} duration={0.8}>
      <motion.div className="FaceBranding">
        <StyledTheme as="h1" fontSize="1.5rem">
          FACEGAME<br></br>
          <span>GRB-GAME 2019 | {new Date().getFullYear()}</span>
        </StyledTheme>
        <div className="Highscore">
          {Highscore !== [] && (
            <>
              <StyledTheme fontSize="3rem">SCORE</StyledTheme>
              <StyledTheme fontSize="3rem">
                {Highscore[Highscore.length - 1]}
              </StyledTheme>
            </>
          )}
        </div>
      </motion.div>
    </MotionFade>
  );
};

export default FaceBranding;
