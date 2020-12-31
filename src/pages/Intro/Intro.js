import React from "react";
import { LangContext } from "../../context";
import { ThemeContext } from "../../context";
import {Redirect} from "react-router-dom";
import StyledTheme from "../../components/StyledComponents/Styled";
import styled from "styled-components";
import { useIsPresent, motion } from "framer-motion";
import Form from "../../components/Form/Form";
import "./Intro.scss";
const Fields = {
  Pseudo: {
    type: "text",
    placeholder: "UserName",
    value: "",
    minlength:3,
    required: true
  },
  Submit: {
    type: "Submit",
    value: "Start",
  },
};

const StyledMenu = styled(StyledTheme)`
  height: 0px;
  width: 100vw;
  position: absolute;
  bottom: 0;
  left: 0;
`;
const Intro = ({ children, ...props }) => {
  const LangContextx = React.useContext(LangContext);
  const ThemeContextx = React.useContext(ThemeContext);
  React.useEffect(() => {
    console.log(LangContextx);
  });
  const Action = (data) => {
    localStorage.setItem("User", data.Pseudo.value);
    console.log(localStorage.getItem("User"));
    props.history.push("/FaceGame");
  };
  return (
    <>
      <div className="IntroContainer">
        <div className="Title">FACEGAME</div>
        <Form Fields={Fields} className="IntroForm" Action={Action} />
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
export default Intro;
