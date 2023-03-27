import React from 'react'
import { Element } from 'react-scroll'
import style from './Projects.module.css'
export default function Projects() {
  return (
    <Element name='projects'>
    <section className={style.section}>
        <h1 className={style.heading}>
            Projects
        </h1>
    </section>
    </Element>
  )
}
