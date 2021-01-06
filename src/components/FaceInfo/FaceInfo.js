import React from "react";
import MotionFade from "../Motion/MotionFade";
import FaceStart from "./subcomponents/FaceStart/FaceStart";
import { motion } from "framer-motion";
import FaceForm from "../FaceForm/FaceForm";
import FaceModalSettings from "./subcomponents/FaceModalSettings/FaceModalSettings";
import FaceCountDown from "./subcomponents/FaceCountDown/FaceCountDown";
import FaceStats from "./subcomponents/FaceStats/FaceStats";
import FaceModalHighscore from "./subcomponents/FaceModalHighscore/FaceModalHighscore";
import "./FaceInfo.scss";
import FaceBranding from "./subcomponents/FaceBranding/FaceBranding";
import { StyledTitle } from "../StyledComponents";
const FaceInfo = ({
  item,
  level,
  fakeElement,
  ShowSus,
  CountdownTime,
  StartGame,
  Highscore,
  setSettings,
  ModeSelected
}) => {
  return (
    <>
      <FaceBranding Fadecontroller={fakeElement} Highscore={Highscore}></FaceBranding>
      <FaceModalSettings Fadecontroller={fakeElement} setSettings={setSettings} ModeSelected={ModeSelected} />
      <div className="UserController">
        <FaceStart Fadecontroller={fakeElement} action={StartGame} txt="Start" className="StartTrigger"/>
        <FaceModalHighscore Fadecontroller={fakeElement} Highscore={Highscore}></FaceModalHighscore>
      </div>
      <FaceCountDown Fadecontroller={null} CountdownController={fakeElement} hidden={[10,0,0]} CountdownTime={CountdownTime}  callback={ShowSus}/>
      <FaceStats item={item} level={level} ></FaceStats>
    </>
  );
};
      {/* <MotionFade controller={localStorage.getItem("User") ? "hidden" : null} hidden={[10,0,0]} duration={1.2}>
        <motion.div className="FaceGameInfo">
          <FaceForm></FaceForm>
        </motion.div>
      </MotionFade> */}
export default FaceInfo;
