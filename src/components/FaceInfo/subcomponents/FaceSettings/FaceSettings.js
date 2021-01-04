import React from 'react';
import RotateText from "../../../ui/RotateText/RotateText";
import { AiOutlineSetting } from 'react-icons/ai';
import {LangContext} from "../../../../context";
import Settings from "../../../Settings/Settings";
import Modal from '../../../ui/Modal/Modal';
import "./FaceSettings.scss"
const FaceSettings = ({Fadecontroller}) => {
    const LangContextx = React.useContext(LangContext);
    return (
        <>
            <Modal Fadecontroller={Fadecontroller} ModalContent={<Settings></Settings>} ModalContentAnimation={[0,"-100vh",1]} triggerClassName="FaceSettings" Modaltriggerduration={0.8} ModaltriggerAnimation={["-20vh","20vh",1]}>
            <RotateText text={`${LangContextx.Settings} - ${LangContextx.Settings} - ${LangContextx.Settings} - ${LangContextx.Settings} - `} arc={360} radius={40} size="0.5rem" cursor="pointer">
                    <AiOutlineSetting style={{fontSize:"1.5rem"}}/>
                </RotateText>
            </Modal>
    </>
    );
};

export default FaceSettings;