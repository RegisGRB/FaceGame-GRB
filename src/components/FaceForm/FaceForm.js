import React from "react";
import Form from "../ui/Form/Form";
import "./FaceForm.scss"
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
    localStorage.setItem("User", data.Pseudo.value);
  };
  return (
    <div className="FaceFormContainre">
      <Form Fields={Fields} className="FaceForm" Action={Action} />
    </div>
  );
};
export default FaceForm;
