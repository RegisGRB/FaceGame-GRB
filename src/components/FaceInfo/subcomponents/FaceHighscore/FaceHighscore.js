import React from 'react';
import { StyledTitle } from "../../../StyledComponents";
import { motion } from "framer-motion";
import Modal from '../../../ui/Modal/Modal';
const FaceSettings = ({Fadecontroller}) => {
    return (
        <>
            <Modal Fadecontroller={Fadecontroller}  ModalContentAnimation={[0,"100vh",1]} triggerClassName="HighScoreTrigger" Modaltriggerduration={0.8}>
                <StyledTitle as={motion.span} cursor="pointer">
                    Highscore
                </StyledTitle>
            </Modal>
    </>
    );
};

export default FaceSettings;