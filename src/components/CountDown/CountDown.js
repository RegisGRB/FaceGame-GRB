import React from "react";
import StyledTheme from "../StyledComponents/Styled";
import styled from "styled-components";

const CountDown = ({years,days,hours,minutes,seconds, millisec,className="GrbCountDown",label=true,startAction=false,CountdownTime=120,callback,props}) => {
  const [timer, setTimer] = React.useState(CountdownTime * 1000); // timer en seconde que l'on converti en milliseconds pour le setInterval
  const id = React.useRef(null); // ref du setinterval pour pouvoir le reset
  const clear = () => {
    // fonction de reset setInterval
    window.clearInterval(id.current);
  };
  React.useEffect(() => {
    if(startAction){
      console.log("STARTOOOO");
    id.current = window.setInterval(() => {
      // setinterval est en millisecondes c'est pour cela que l'on converti le state timer en milliseconds
      setTimer((time) => time - 1); // actualise le state pour rerender le countdown
    }, 1);
    return () => clear();
}
  }, [startAction]);
  React.useEffect(() => {
    // si le timer est fini enleve le setinterval
    if (timer === 0) {
      clear();
      callback();
    }
  }, [timer]);
  const CountdownFilter = (millis) => {
    var secondCountdown = Math.floor(millis / 1000); // on converti les millis seconde du setinterval en seconde pour les ajouter a une date
    const timeLeft = {
      years: 0,
      days: 0,
      hours: 0,
      min: 0,
      sec: 0,
      millisec: ((millis % 60000) / 1000).toString().slice(2).replace(".", ""),
    };
    var endDate = new Date();
    endDate.setSeconds(endDate.getSeconds() + secondCountdown);
    let diff = (Date.parse(new Date(endDate)) - Date.parse(new Date())) / 1000;
    // si il y a une différence possible entre la date d'aujourd'hui et la date envoyer uppda

    if (diff >= 365.25 * 86400) {
      // 365.25 * 24 * 60 * 60  année jours heures minutes
      timeLeft.years = Math.floor(diff / (365.25 * 86400));
      diff -= timeLeft.years * 365.25 * 86400;
    }
    if (diff >= 86400) {
      // 24 * 60 * 60 jours heures minutes
      timeLeft.days = Math.floor(diff / 86400);
      diff -= timeLeft.days * 86400;
    }
    if (diff >= 3600) {
      // 60 * 60 heures minutes
      timeLeft.hours = Math.floor(diff / 3600);
      diff -= timeLeft.hours * 3600;
    }
    if (diff >= 60) {
      // minutes
      timeLeft.min = Math.floor(diff / 60);
      diff -= timeLeft.min * 60;
    }
    timeLeft.sec = diff;
    if (timeLeft.millisec === "") {
      timeLeft.millisec = 0;
    }
    return (
      <ul className={className}>
        {years ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.years : "XX" }</span>{label ? <p>years</p>: ""}</Styledli> : ""}
        {days ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.days : "XX" }</span>{label ? <p>days</p>: ""}</Styledli> : ""}
        {hours ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.hours : "XX" }</span>{label ? <p>hours</p>: ""}</Styledli> : ""}
        {minutes ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.min : "XX" }</span>{label ? <p>minutes</p>: ""}</Styledli> : ""}
        {seconds ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.sec : "XX" }</span>{label ? <p>seconds</p>: ""}</Styledli> : ""}
        {millisec ? <Styledli as="li" fontcolor="true"><span>{startAction ? timeLeft.millisec :"XX" }</span>{label ? <p>micro-seconds</p>: ""}</Styledli> : ""}
      </ul>
    );
  };

  return <>{CountdownFilter(timer)}</>;
};

const Styledli = styled(StyledTheme)``;







//
// const millisToMinutesAndSeconds = (millis) => {
//     var minutes = Math.floor(millis / 60000);
//     var seconds = Math.floor((millis % 60000) / 1000);
//     var mix = ((millis % 60000) / 1000).toString().slice(2).replace('.', '');
//     return `${minutes}:${seconds}:${mix}`;
//   };
export default CountDown;
