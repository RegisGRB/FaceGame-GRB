import React from "react";
import Form from "../../components/ui/Form/Form";

const SignIn = () => {
  const Fields = 
    {
     UserName:{
        type: "text",
        placeholder: "UserName",
        value:""
      },
      Password:{
        type: "Password",
        placeholder: "Password",
        value:""
      },
      Email:{
        type: "Email",
        placeholder: "Email",
        value:"",
        required:true
      },
      Message:{
        as:"Textarea",
        type: "text",
        placeholder: "Your Message",
        value:""
      },
      Checkbox:{
        label: "Checkbox",
        type: "Checkbox",
        placeholder: "",
        value:""
      },
      Radio:{
        checked:true,
        name:"GRB",
        label: "Radio",
        type: "Radio",
        placeholder: "",
        value:""
      },
      Radio1:{
        name:"GRB",
        label: "Radio",
        type: "Radio",
        placeholder: "",
        value:""
      },
    };
  return <Form url="fgrzegferz" Fields={Fields} className="pokemon"/>;
};

export default SignIn;
