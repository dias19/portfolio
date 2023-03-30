import React from 'react'
import { TABS } from '../constants'
import styles from '../styles.module.css'
type Props={
    activeTab: number,
    setActiveTab: (tab: number)=> void,
}
export default function Tabs({activeTab, setActiveTab}:Props) {
  return (
    <div className={styles.tabList}>
        {
            TABS.map((tab,index)=>(
                <button key={index} className={`
                ${styles.tab}
                ${activeTab===index ? styles.active : ''}
                `}
                onClick={()=> setActiveTab(index)}
                >
                    {tab.title}
                </button>
            ))
        }
    </div>
  )
}
