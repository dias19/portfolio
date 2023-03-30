import React from "react";
import style from "./styles.module.css";
import { Link as LinkScroll } from "react-scroll";
export default function Header() {
  return (
    <header className={style.container}>
      <div className={style.nav}>
        <div className={style.logo}>logo</div>
        <div className={style.navbar}>
          <ul className={style.about}>
            <LinkScroll to="aboutMe" smooth={true} duration={500}>About me</LinkScroll>
          </ul>
          <ul className={style.projects}>
            <LinkScroll to="projects" smooth={true} duration={1000}>Projects</LinkScroll>
          </ul>
          <ul className={style.experience}>
            <LinkScroll to="experience" smooth={true} duration={1250}>Experience</LinkScroll>
          </ul>
          <ul className={style.contact}>
            <LinkScroll to="contacts" smooth={true} duration={1500}>Contacts</LinkScroll>
          </ul>
          <button className={style.button}>Resume</button>
        </div>
      </div>
    </header>
  );
}
