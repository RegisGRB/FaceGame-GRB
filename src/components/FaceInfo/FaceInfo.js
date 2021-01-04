import React from "react";
import MotionFade from "../Motion/MotionFade";
import FaceStart from "./subcomponents/FaceStart/FaceStart";
import { motion } from "framer-motion";
import FaceForm from "../FaceForm/FaceForm";
import FaceSettings from "./subcomponents/FaceSettings/FaceSettings";
import FaceCountDown from "./subcomponents/FaceCountDown/FaceCountDown";
import FaceStats from "./subcomponents/FaceStats/FaceStats";
import FaceHighscore from "./subcomponents/FaceHighscore/FaceHighscore";
import "./FaceInfo.scss";
import FaceBranding from "./subcomponents/FaceBranding/FaceBranding";
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
      <FaceBranding Fadecontroller={localStorage.getItem("User") ? fakeElement : "hidden"} className="FaceBranding" txt="FACEGAME"></FaceBranding>
      <FaceSettings Fadecontroller={fakeElement}  />  
      <div className="UserController">
        <FaceStart Fadecontroller={localStorage.getItem("User") ? fakeElement : "hidden"} action={StartGame} txt="Start" className="StartTrigger"/>
        <FaceHighscore Fadecontroller={localStorage.getItem("User") ? fakeElement : "hidden"}></FaceHighscore>
      </div>
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
