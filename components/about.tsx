import React from "react";
import style from "~/styles/AboutMe.module.css";
import {Element} from 'react-scroll';
import Computer from "~/public/icons/computer";

export default function AboutMe() {
  return (
    <Element name='aboutMe'>
    <section className={style.section}>
        <h1 className={style.heading}>About me</h1>
      <div>
      <p className={style.body}>
      Hello! My name is Dias and I enjoy creating things that live on the internet. My interest in web development started back in 2012 when I decided to try editing custom Tumblr themes — turns out hacking together a custom reblog button taught me a lot about HTML &amp; CSS!
      </p>
      <p className={style.body}>
      Fast-forward to today, and I’ve had the privilege of working at
      <a className={style.anchor} target='_blank' href="https://estil.kz/">
      a marketplace, 
      </a>
      <a className={style.anchor} target='_blank' href=''>
        and a start-up.
      </a>
      I am currently at the position of exploring other opportunities.
      </p>
      <p className={style.body}>
      Here are a few technologies I’ve been working with recently:
      </p>
      <ul className={style.list}>
        <li className={style.listItem}>
          Javascript (ES6+)
        </li>
        <li className={style.listItem}>
          Typescript
        </li>
        <li className={style.listItem}>
          React
        </li>
        <li className={style.listItem}>
          Redux 
        </li>
      </ul>
      </div>
      <div>
        <Computer/>
      </div>
    </section>
    </Element>
  );
}
