import styled from "styled-components";
// i DON't know if it's a good practice bUTTTTT YOlO

const Styled = styled.div`
color: ${(props) => (props.fontcolor ? props.theme.colors.text : "")};
color: ${(props) => (props.fontcolorinvert ? props.theme.colors.background : "")};
background-color: ${(props) => props.backgroundcolor ? props.theme.colors.background : ""};
background-color: ${(props) => props.backgroundcolorinvert ? props.theme.colors.text : ""};
border-color:${(props) => (props.bordercolor ? props.theme.colors.text : "")};

margin: ${(props) => (props.margin ? props.margin : "")};
margin-right: ${(props) => (props.marginright ? props.margin : "")};
margin-left: ${(props) => (props.marginleft ? props.margin : "")};
margin-top: ${(props) => (props.margintop ? props.margin : "")};
margin-bottom: ${(props) => (props.marginbottom ? props.margin : "")};

padding: ${(props) => (props.padding ? props.padding : "")};
padding-right: ${(props) => (props.paddingright ? props.paddingright : "")};
padding-left: ${(props) => (props.paddingleft ? props.paddingleft : "")};
padding-top: ${(props) => (props.paddingtop ? props.paddingtop : "")};
padding-bottom: ${(props) => (props.paddingbottom ? props.paddingbottom : "")};

display:${(props) => (props.flex ? "flex" : "")};
display:${(props) => (props.Absolute ? "absolute" : "")};
display:${(props) => (props.relative ? "relative" : "")};

font-size: ${(props) => (props.fontSize ? props.fontSize : "")};
font-weight: ${(props) => (props.fontweight ? props.fontweight : "")};
letter-spacing: ${(props) => (props.letterSpacing ? props.letterSpacing : "")};

&:hover {
  color:  ${(props) => (props.hoverfontcolor ? props.theme.colors.background : "")};
  color: ${(props) => (props.hoverfontcolorinvert ? props.theme.colors.text : "")};
  background-color:  ${(props) =>props.hoverbackgroundcolor ? props.theme.colors.text : ""};
  border-color:${(props) => props.hoverbordercolor ? props.theme.colors.background : ""};

  margin: ${(props) => (props.hovermargin ? props.hovermargin : "")};
  margin-right: ${(props) => (props.hovermarginright ? props.hovermarginright : "")};
  margin-left: ${(props) => (props.hovermarginleft ? props.hovermarginleft : "")};
  margin-top: ${(props) => (props.hovermargintop ? props.hovermargintop : "")};
  margin-bottom: ${(props) => (props.hovermarginbottom ? props.hovermarginbottom : "")};

  padding: ${(props) => (props.hoverpadding ? props.hoverpadding : "")};
  padding-right: ${(props) => (props.hoverpaddingright ? props.hoverpaddingright : "")};
  padding-left: ${(props) => (props.hoverpaddingleft ? props.hoverpaddingleft : "")};
  padding-top: ${(props) => (props.hoverpaddingtop ? props.hoverpaddingtop : "")};
  padding-bottom: ${(props) => (props.hoverpaddingbottom ? props.hoverpaddingbottom : "")};

  display:${(props) => (props.hoverflex ? "flex" : "")};
  display:${(props) => (props.hoverAbsolute ? "absolute" : "")};
  display:${(props) => (props.hoverrelative ? "relative" : "")};

  font-size: ${(props) => (props.hoverfontSize ? props.hoverfontSize : "")};
  font-weight: ${(props) => (props.hoverfontweight ? props.hoverfontweight : "")};
  letter-spacing: ${(props) => (props.hoverletterSpacing ? props.hoverletterSpacing : "")};
}
transition:color 1s,background-color 1s,border-color 1s;
`;

export default Styled;







