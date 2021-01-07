import React, { useEffect, useState } from "react";

import { LangContext } from "../../../context";
const PwaInstall = ({ className }) => {
  const LangContextx = React.useContext(LangContext);
  const [supportsPWA, setSupportsPWA] = useState(!(window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone || document.referrer.includes("android-app://")));
  const [promptInstall, setPromptInstall] = useState(null);

  const onClick = (evt) => {
    evt.preventDefault();
    console.log("we are being triggered :D");
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
    setSupportsPWA(false);
    setPromptInstall(evt);
  };

  return (
    <>
      {supportsPWA && (
        <button
          id="PWA-button"
          aria-label={LangContextx.PWAInstall}
          title={LangContextx.PWAInstall}
          onClick={onClick}
        >
          {LangContextx.PWAInstall}
        </button>
      )}
    </>
  );
};

export default PwaInstall;
