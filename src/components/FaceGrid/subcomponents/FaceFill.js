import React from "react";
import { helpers } from "../../../utils";
import styled from "styled-components";
import { StyledTheme } from "../../StyledComponents";
import { motion, AnimatePresence } from "framer-motion";

const FaceFill = ({
  item,
  maxItems,
  fakeElement,
  loseAction,
  WinAction,
  refHideElement,
  className,
  ImageType = "x",
}) => {
  const [ArrayElements, setArrayElements] = React.useState([]);
  // const transition = { duration: 1.4, ease: [0.6, 0.01, -0.05, 0.9] };

  React.useEffect(() => {
    setArrayElements([]);
    const fillArray = () => {
      let inArray = [fakeElement];
      let ObjectArray = [];
      let x = 0;
      ObjectArray.push(
        <StyledImg
          key={helpers.generateKey(fakeElement + className)}
          onClick={() => (WinAction ? WinAction() : () => {})}
          ref={refHideElement}
          id={`${ImageType}${fakeElement + 1}`}
        ></StyledImg>
      );

      for (let y = 1; y <= item - 1; y++) {
        do {
          // pour chaque element qu'on genere de 1 a 30 on verif si on la deja generé si il y est on re genere ainsi de suite
          x = helpers.getrandomInt(maxItems);
        } while (inArray.includes(x));

        ObjectArray.push(
          <StyledImg
            key={helpers.generateKey(x + className)}
            onClick={() => (loseAction ? loseAction() : () => {})}
            ref={null}
            id={`${ImageType}${x + 1}`}
          ></StyledImg>
        );
        inArray.push(x);
      }
      ObjectArray = helpers.randomizeArray(ObjectArray);
      for (let z = 1; z <= maxItems - item; z++) {
        ObjectArray.push(
          <div
            key={helpers.generateKey(`placeholder${z}`)}
            className="placeholder"
          ></div>
        );
      }
      setArrayElements(ObjectArray);
    };
    if (fakeElement != null) {
      fillArray();
    } else {
      setArrayElements([]);
    }
  }, [
    fakeElement,
    refHideElement,
    loseAction,
    WinAction,
    maxItems,
    className,
    ImageType,
  ]);

  return (
    <div className={`FaceGameGrid ${className}`}>
      {ArrayElements.map((item, i) => {
        return item;
      })}
    </div>
  );
};

const StyledImg = styled(StyledTheme)`
  position: relative;
  width: 50px;
  height: 50px;
  overflow: hidden;
  &#sus:after {
    content: "";
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
    z-index: 999;
    height: 100%;
    background-color: ${(props) => props.theme.colors.text};
  }
`;
const letter = {
  initial: {
    x: 1000,
  },
  animate: {
    x: 0,
  },
  exit: {
    x: -1000,
    transition: { duration: 0.6, ease: [0.43, 0.13, 0.23, 0.96] },
  },
};
export default FaceFill;
