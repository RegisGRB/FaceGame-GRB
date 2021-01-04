import React from "react";
import "./FaceGame.scss";
import FaceGrid from "../../components/FaceGrid/FaceGrid";
import {helpers} from "../../utils";
import FaceInfo from "../../components/FaceInfo/FaceInfo";


const FaceGame = ({ children, ...props }) => {
  const [level, setlevel] = React.useState(1);
  const [item, setitem] = React.useState(4);
  const maxItems = 29;
  const [CountdownTime, setCountdownTime] = React.useState(1);
  const [CountdownAdd, setCountdownAdd] = React.useState(0.2);
  const [ImageType, setImageType] = React.useState("x");
  const [fakeElement,setfakeElement] = React.useState(null);
  const refHideElement = React.useRef(null);

const ShowSus = React.useCallback(() =>{
  console.log(refHideElement);
  refHideElement.current.id="sus";
},[refHideElement]);

const StartGame = ()=>{
  setlevel(1);
  setitem(4);
  setCountdownTime(1);
  setfakeElement(GetFakeElement())
}
const GetFakeElement = React.useCallback(() =>{
  let x;
  do {
  x = helpers.getrandomInt(maxItems);
} while (x===fakeElement);
return x;
},[fakeElement,maxItems]);
const Settings = (item,CountdownTime,CountdownAdd) =>{
  setitem(item);
  setCountdownAdd(CountdownTime);
  setCountdownTime(CountdownTime);
}
const WinAction = React.useCallback(()=>{
  if(refHideElement.current.id==="sus"){
    if(item===maxItems){
      alert("YOU BEAT FACEGAME");
      setfakeElement(null);
    }else{
      setlevel(level+1);
      setitem(item+1);
      setCountdownTime(Number((Math.round((CountdownTime+CountdownAdd) * 100)/100).toFixed(2)));
      setfakeElement(GetFakeElement());
    }
  }
},[level,item,CountdownTime,CountdownAdd,refHideElement,maxItems]);
const loseAction = () =>{
  if(refHideElement.current.id==="sus"){
  setfakeElement(null);
  }
}
  return (
      <div className="FaceContainer">
        <FaceGrid item={item}  maxItems={maxItems} fakeElement={fakeElement} WinAction={WinAction} loseAction={loseAction} refHideElement={refHideElement} ImageType={ImageType}></FaceGrid>
        <FaceInfo level={level} item={item} fakeElement={fakeElement} CountdownTime={CountdownTime} ShowSus={ShowSus} StartGame={StartGame}></FaceInfo>
      </div>
  );
};

export default FaceGame;
