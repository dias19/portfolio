import React from "react";
import style from "./styles.module.css";

export default function Header() {
  return (
    <header className={style.container}>
    <div className={style.nav}>
      <div className={style.logo}>logo</div>
      <div className={style.navbar}>
        <ul className={style.about}>About me</ul>
        <ul className={style.projects}>Projects</ul>
        <ul className={style.experience}>Experience</ul>
        <button className={style.button}>Resume</button>
      </div>
    </div>
    </header>
  );
}
