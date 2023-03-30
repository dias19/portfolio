import React from 'react'
import GitHubIcon from '~/public/icons/github'
import LinkedinIcon from '~/public/icons/linkedin'
import TelegramIcon from '~/public/icons/telegram'
import style from './styles.module.css'
export default function OrientationLeft() {
  return (
    <div className={style.left}>
        <ul className={style.social}>
            <li className={style.list}>
                <a className={style.anchor} target='_blank' href='https://www.linkedin.com/in/dias-nurmukhambetov-05b1541b4/'>
                <LinkedinIcon/>
                </a>
            </li>
            <li className={style.list}>
                <a className={style.anchor} target='_blank' href='https://github.com/dias19'>
                <GitHubIcon/>
                </a>
            </li>
            <li className={style.list}>
                <a className={style.anchor} href='https://t.me/disss09' target='_blank'>
                <TelegramIcon/>
                </a>
            </li>
        </ul>
    </div>
  )
}
