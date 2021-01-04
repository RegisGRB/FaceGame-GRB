import React from "react";
import MotionFade from "../Motion/MotionFade";
import FaceStart from "./subcomponents/FaceStart";
import { motion } from "framer-motion";
import FaceForm from "../FaceForm/FaceForm";
import FaceSettings from "./subcomponents/FaceSettings";
import FaceCountDown from "./subcomponents/FaceCountDown";
import FaceStats from "./subcomponents/FaceStats";

const FaceInfo = ({
  item,
  level,
  fakeElement,
  ShowSus,
  CountdownTime,
  StartGame,
}) => {

  return (
    <div>
    
      <FaceSettings Fadecontroller={fakeElement}  />
      <FaceStart Fadecontroller={localStorage.getItem("User") ? fakeElement : "hidden"} action={StartGame}/>
      <FaceCountDown Fadecontroller={localStorage.getItem("User") ? null : "hidden"} CountdownController={fakeElement} hidden={[10,0,0]} CountdownTime={CountdownTime}  callback={ShowSus}/>
      <FaceStats item={item} level={level}></FaceStats>
      <MotionFade controller={localStorage.getItem("User") ? "hidden" : null} hidden={[10,0,0]} duration={1.2}>
        <motion.div className="FaceGameInfo">
          <FaceForm></FaceForm>
        </motion.div>
      </MotionFade>
    </div>
  );
};

export default FaceInfo;
