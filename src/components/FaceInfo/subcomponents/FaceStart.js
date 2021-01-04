import React from "react";
import { StyledTitle } from "../../../components/StyledComponents";
import { motion } from "framer-motion";
import MotionFade from "../../Motion/MotionFade";
const FaceStart = ({ Fadecontroller, action }) => {
  return (
    <MotionFade controller={Fadecontroller}>
      <StyledTitle
        as={motion.span}
        absolute="true"
        top="45%"
        left="30%"
        cursor="pointer"
        onClick={() => {
          action();
        }}
      >
        START
      </StyledTitle>
    </MotionFade>
  );
};

export default FaceStart;
