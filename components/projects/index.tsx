import React from "react";
import { Element } from "react-scroll";
import scaneat from "~/public/scaneat.png";
import estil from "~/public/estil.png";
import style from "./styles.module.css";
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
            <a href="https://scaneat.kz/" className={style.anchorImage}>
                <Image src={scaneat} className={style.image} alt="wrong" />
            </a>
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
                  className={style.anchorGithub}
                  target="_blank"
                  href="https://github.com/dias19/scaneat"
                >
                  <GitHubIcon />
                </a>
              </li>
              <li>
                <a
                  className={style.anchorLink}
                  target="_blank"
                  href="https://scaneat.kz/"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={`${style.container} ${style["left-case"]}`}>
          <div>
            <h2 className={style.feature}>Featured Project</h2>
            <h1 className={style.name}>Estil</h1>
            <div className={style.description}>
              Online marketplace to sell and buy clothes. Users can buy clothes
              that were used or find the ones in the newest condition.
            </div>
            <ul className={`${style.list} ${style.leftCase}`}>
              <li className={`${style.listItem} ${style.leftCase}`}>
                React JS
              </li>
              <li className={`${style.listItem} ${style.leftCase}`}>Next JS</li>
              <li className={`${style.listItem} ${style.leftCase}`}>RTK</li>
              <li className={`${style.listItem} ${style.leftCase}`}>
                Styled Components
              </li>
            </ul>
            <ul className={`${style.listIcon} ${style.leftCase}`}>
              <li>
                <a
                  className={style.anchorLink}
                  target="_blank"
                  href="https://estil.kz/"
                >
                  <LinkIcon />
                </a>
              </li>
            </ul>
          </div>
          <div className={style.containerImage}>
            <a href="https://estil.kz/" className={style.anchorImage}>
              <Image src={estil} className={style.image} alt="wrong" />
            </a>
          </div>
        </div>
      </section>
    </Element>
  );
}
