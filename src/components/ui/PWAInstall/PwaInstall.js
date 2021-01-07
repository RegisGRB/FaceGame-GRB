import React, { useEffect, useState } from "react";

import { LangContext } from "../../../context";
const PwaInstall = ({className}) => {
    const LangContextx = React.useContext(LangContext);
  const [supportsPWA, setSupportsPWA] = useState(false);
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = e => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(true);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);

    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = evt => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
  };
  if (!supportsPWA) {
    return null;
  }
  return (
    <button
      id="PWA-button"
      aria-label={LangContextx.PWAInstall}
      title={LangContextx.PWAInstall}
      onClick={onClick}
    >
      {LangContextx.PWAInstall}
    </button>
  );
};

export default PwaInstall;