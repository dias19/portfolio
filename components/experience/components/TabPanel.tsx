import React from 'react'
import { Tab} from '../type'
import styles from '../styles.module.css'
type Props={
    activeTab: number,
    tab: Tab,
    index: number,
}
export default function TabPanel({activeTab, tab, index}:Props) {
  return (
        activeTab===index ?
        <div style={{maxWidth:700}}>
            <h3 className={styles.role}>
              {tab.position}
              <a
                className={styles.anchor}
                target="_blank"
                href="https://scaneat.kz/"
                >
                @{tab.title}
              </a>
            </h3>
            <p className={styles.date}>{tab.date}</p>
            <div>
                <ul className={styles.list}>
                    {
                        tab.duties.map((duty, index)=>(
                            <li className={styles.listItem} key={`${index}-${duty}`}>
                                {duty}
                            </li>
                        ))
                    }
                </ul>
            </div>
        </div>
    : null
  );
}