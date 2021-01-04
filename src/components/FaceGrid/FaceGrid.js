import React from "react";
import MotionFade from "../Motion/MotionFade";
import FaceFill from "./subcomponents/FaceFill";
import { motion } from "framer-motion";
const FaceGrid = ({item,maxItems,fakeElement,WinAction,loseAction,refHideElement,ImageType}) => {

  return (
    <>
      <FaceFill item={item} maxItems={maxItems} fakeElement={fakeElement} className={"top"} refHideElement={refHideElement} ImageType={ImageType}></FaceFill>
     <FaceFill item={item} maxItems={maxItems} fakeElement={fakeElement} className={"bottom"} WinAction={WinAction} loseAction={loseAction} ImageType={ImageType}></FaceFill>
    </>
  );
};

export default FaceGrid;
