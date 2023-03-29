import React from "react";
import { Element } from "react-scroll";
import scaneat from "~/public/scaneat.png";
import style from "./Projects.module.css";
import Image from "next/image";
import GitHubIcon from "~/public/icons/github";
import LinkIcon from "~/public/icons/link";
export default function Projects() {
  return (
    <Element name="projects">
      <section className={style.section}>
        <h1 className={style.heading}>Projects</h1>
        <div className={style.container}>
          <div className={style.containerImage}>
            <a href="https://scaneat.kz/" className={style.anchorImage} />
            <Image src={scaneat} className={style.image} alt="wrong" />
          </div>
          <div>
            <h2 className={style.feature}>Featured Project</h2>
            <h1 className={style.name}>Scaneat</h1>
            <div className={style.description}>
              An app to order food by scanning the QR remotely or at the
              restaurant. Owners of restaurants can register their restaurants,
              and manage all of the activities.
            </div>
            <ul className={style.list}>
              <li className={style.listItem}>React JS</li>
              <li className={style.listItem}>RTK</li>
              <li className={style.listItem}>Material UI</li>
            </ul>
            <ul className={style.listIcon}>
              <li>
                <a
                  className={style.anchor}
                  target="_blank"
                  href="https://github.com/dias19/scaneat"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                className={style.anchor}
                target='_blank'
                href="https://scaneat.kz/"
                >
                  <LinkIcon/>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </Element>
  );
}
