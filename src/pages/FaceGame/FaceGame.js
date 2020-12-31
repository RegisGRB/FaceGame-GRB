import React from "react";
import StyledTheme from "../../components/StyledComponents/Styled";
import styled from "styled-components";
import { useIsPresent, motion } from "framer-motion";
import "./FaceGame.scss";
import CountDown from "../../components/CountDown/CountDown";
const StyledMenu = styled(StyledTheme)`
  height: 0px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const FaceGame = ({ children, ...props }) => {
const [level,setlevel] = React.useState(1);
const [item,setitem] = React.useState(3);
const [timer,settimer] = React.useState(2);
const maxitemx = 30;
const [startAction,setstartAction] = React.useState(false);
const [CountdownTime,setCountdownTime] = React.useState(2);
  return (
    <>
      <div className="IntroContainer">
        <div className="Title" onClick={()=> {setstartAction(true)}}>FACEGAME</div>
            <CountDown minutes seconds millisec startAction={startAction} CountdownTime={CountdownTime} callback={()=>alert("pokemon")} className="FaceGameCountDown"></CountDown>
      </div>
      <Pute></Pute>
    </>
  );
};
const Pute = () => {
  const isPresent = useIsPresent();

  React.useEffect(() => {
    !isPresent && console.log("I've been removed!");
  }, [isPresent]);
  return (
    <StyledMenu
      as={motion.div}
      initial={{ height: "100vh" }}
      animate={{ height: 0 }}
      exit={{ height: "100vh" }}
      ColorInvert
      BackgroundColorInvert
    >
      PUTE
    </StyledMenu>
  );
};
export default FaceGame;
