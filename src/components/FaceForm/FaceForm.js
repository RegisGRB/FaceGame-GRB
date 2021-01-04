import React from "react";
import Form from "../ui/Form/Form";
import "./FaceForm.scss"
import { StyledTitle } from "../../components/StyledComponents";
const Fields = {
  Pseudo: {
    type: "text",
    placeholder: "UserName",
    value: "",
    minlength: 3,
    required: true,
  },
  Submit: {
    type: "Submit",
    value: "Save",
  },
};

const FaceForm = ({ children, ...props }) => {
  const Action = (data) => {
      console.log(localStorage.getItem("User"));
    localStorage.setItem("User", data.Pseudo.value);
    alert("ezfz");
  };
  return (
    <div className="FaceFormContainre">
      <StyledTitle absolute="true" top="45%" left="22%" cursor="pointer">FACEGAME</StyledTitle>
      <Form Fields={Fields} className="FaceForm" Action={Action} />
    </div>
  );
};
export default FaceForm;
