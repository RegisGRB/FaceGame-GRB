import React from 'react';
import RotateText from "../../ui/RotateText/RotateText";
import { AiOutlineSetting } from 'react-icons/ai';
import MotionFade from "../../Motion/MotionFade";
import { motion } from "framer-motion";
import {GrClose} from "react-icons/gr";
import Settings from "../../Settings/Settings";
import MotionModal from "../../Motion/MotionModal";
import { StyledTheme } from '../../StyledComponents';
import StyledIcons from '../../StyledComponents/StyledIcons';
const FaceSettings = ({Fadecontroller}) => {
const [openSettings,setopenSettings] = React.useState(false);

    return (
        <>
        <MotionFade controller={Fadecontroller} hidden={[0,0,0]}>
            <motion.div className="FaceSettings" onClick={() => {setopenSettings(null)}}>
                <RotateText text="SETTINGS - SETTINGS - SETTINGS - SETTINGS - " arc={360} radius={40} size="0.5rem" cursor="pointer">
                    <AiOutlineSetting style={{fontSize:"1.5rem"}}/>
                </RotateText>
            </motion.div>
      </MotionFade>
        <MotionModal controller={openSettings}>
            <Settings></Settings>
            <StyledTheme as={GrClose} strokecolorinvert="true" onClick={()=>setopenSettings(false)} cursor="pointer" absolute="true" top="10%" right="10%" ></StyledTheme>
        </MotionModal>
    </>
    );
};

export default FaceSettings;