import React from "react";
import style from "./Landing.module.css";
import { scroller } from 'react-scroll';

export default function Landing() {
  function handleClick(){
    console.log('clicked')
    scroller.scrollTo('aboutMe', {
      duration: 1000,
      delay: 0,
      smooth: 'easeInOutQuart',
  })
}
  return (
    <section className={style.section}>
      <div className={style.transition}>
        <h1 className={style.greeting}>Hi, my name is</h1>
      </div>
      <div className={style.transition}>
        <h2 className={style.name}>Dias Nurmukhambetov.</h2>
      </div>
      <div className={style.transition}>
        <h2 className={style.description}>I am a Front-End Developer.</h2>
      </div>
      <p className={style.body}>
        I’m a software engineer specializing in building (and occasionally
        designing) exceptional digital experiences. Currently, I’m focused on
        building accessible, human-centered products at
      </p>
      <div className={style.container}>
        <button className={style.button} onClick={handleClick}>About Me</button>
      </div>
    </section>
  );
}
