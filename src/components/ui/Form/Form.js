import React from "react";
import {StyledTheme} from "../../StyledComponents";
import styled from "styled-components";
import axios from "axios";
import { useHistory } from "react-router-dom";

const Form = ({ UrlAPI, Fields, Action, Redirect, className="GrbForm", props }) => {
  const history = useHistory();
  const [FormState, SetFormState] = React.useState(Fields);
  const submit = (e) => {
    e.preventDefault();
    if (UrlAPI) {
      APICALL();
    } else {
      Action(FormState);
      history.push(Redirect);
    }
  };

  const APICALL = () => {
    axios({
      method: "Post",
      url: UrlAPI,
      data: JSON.stringify(FormState),
    })
      .then((res) => {
        Action(res);
        history.push(Redirect);
      })
      .catch((err) => {console.log(err)});
  };

  const FormGenerator = () => {
    const elements = [];
    for (let field in FormState) {
      elements.push(
        // <>
        //   {FormState[field].label ? (
        //     <label for={FormState[field].name}  key={field+"Label"}>{FormState[field].label}</label>
        //   ) : (
        //     ""
        //   )}
          <StyledInput
            checked={FormState[field].checked}
            name={FormState[field].name}
            as={FormState[field].as ? FormState[field].as : "input"}
            type={FormState[field].type}
            pattern={`.{${FormState[field].minlength ? FormState[field].minlength : 0},${FormState[field].maxlength ? FormState[field].maxlength: ""}}`}
            size={FormState[field].size}
            placeholder={FormState[field].placeholder}
            fontcolorinvert="true"
            key={field}
            backgroundcolorinvert="true"
            required={FormState[field].required}
            value={FormState[field].value}
            onChange={(e) =>
              SetFormState({
                ...FormState,
                [field]: { ...FormState[field], value: e.target.value },
              })
            }
          ></StyledInput>
        // </>
      );
    }
    return elements;
  };
  return (
      <StyledForm onSubmit={submit} className={className}>
        {FormGenerator()}
      </StyledForm>
  );
};
const StyledForm = styled.form``;
const StyledInput = styled(StyledTheme)``;

export default Form;
// fields exemple
// const Fields = 
//     {
//      UserName:{
//         type: "text",
//         placeholder: "UserName",
//         value:""
//       },
//       Password:{
//         type: "Password",
//         placeholder: "Password",
//         value:""
//       },
//       Email:{
//         type: "Email",
//         placeholder: "Email",
//         value:"",
//         required:true
//       },
//       Message:{
//         as:"Textarea",
//         type: "text",
//         placeholder: "Your Message",
//         value:""
//       },
//       Checkbox:{
//         label: "Checkbox",
//         type: "Checkbox",
//         placeholder: "",
//         value:""
//       },
//       Radio:{
//         checked:true,
//         name:"GRB",
//         label: "Radio",
//         type: "Radio",
//         placeholder: "",
//         value:""
//       },
//       Radio1:{
//         name:"GRB",
//         label: "Radio",
//         type: "Radio",
//         placeholder: "",
//         value:""
//       },
//     };