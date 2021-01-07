import React, { useEffect, useState } from "react";

import { LangContext } from "../../../context";
const PwaInstall = ({ className }) => {
  const LangContextx = React.useContext(LangContext);
  const [supportsPWA, setSupportsPWA] = useState((window.matchMedia("(display-mode: standalone)").matches || window.navigator.standalone ));
  const [promptInstall, setPromptInstall] = useState(null);

  useEffect(() => {
    const handler = (e) => {
      e.preventDefault();
      console.log("we are being triggered :D");
      setSupportsPWA(false);
      setPromptInstall(e);
    };
    window.addEventListener("beforeinstallprompt", handler);
    window.addEventListener('appinstalled', (evt) => {setSupportsPWA(false)});
    return () => window.removeEventListener("transitionend", handler);
  }, []);

  const onClick = (evt) => {
    evt.preventDefault();
    if (!promptInstall) {
      return;
    }
    promptInstall.prompt();
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
