import React, { useState } from "react";
import TabPanel from "./components/TabPanel";
import Tabs from "./components/Tabs";
import { TABS } from "./constants";
import styles from "./styles.module.css";

export default function Experience() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Experience</h1>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <div className={styles.verticalLine} />
        <div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 75 }}>
              <p className={styles.date}>September 2022</p>
              <div className={styles.horizontalLine} />
              <p className={styles.date}>March 2023</p>
            </div>
            <div style={{ marginLeft: 50, marginTop: 50 }}>
              <h3 className={styles.role}>
                Front-End Engineer
                <a
                  className={styles.anchor}
                  target="_blank"
                  href="https://scaneat.kz/"
                >
                  @Scaneat
                </a>
              </h3>
              <div style={{ maxWidth: 700 }}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Developed and shipped highly interactive web applications
                    using React.js
                  </li>
                  <li className={styles.listItem}>
                    Engineered and maintained major features of Scaneat&apos;s
                    customer-facing web app using Typescript, React.js, MUI, and
                    Redux
                  </li>
                  <li className={styles.listItem}>
                    Interfaced with designers and other developers to ensure
                    thoughtful and coherent user experiences across
                    Scaneat&apos;s web-app
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div style={{ display: "flex" }}>
            <div style={{ marginTop: 75 }}>
              <p className={styles.date}>March 2022</p>
              <div className={styles.horizontalLine} />
              <p className={styles.date}>August 2022</p>
            </div>
            <div style={{ marginLeft: 50, marginTop: 50 }}>
              <h3 className={styles.role}>
                Intern Front-End Engineer
                <a
                  className={styles.anchor}
                  target="_blank"
                  href="https://estil.kz/"
                >
                  @Estil
                </a>
              </h3>
              <div style={{ maxWidth: 700 }}>
                <ul className={styles.list}>
                  <li className={styles.listItem}>
                    Developing and maintaining feature-rich SPA web applications
                  </li>
                  <li className={styles.listItem}>
                    Work closely with lead developers to design products and
                    solutions to meet the business demands
                  </li>
                  <li className={styles.listItem}>
                    Optimizing components for maximum performance across a vast
                    array of web-capable devices and browsers
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceMobile() {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div style={{ height: 500 }}>
      <h1 className={styles.heading}>Experience</h1>
      <div>
        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />
        {TABS.map((tab, index) => (
          <TabPanel
            key={"tab-${index}"}
            activeTab={activeTab}
            tab={tab}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
