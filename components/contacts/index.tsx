import React from "react";
import styles from "./styles.module.css";
export default function Contact() {
  return (
    <section className={styles.section}>
      <h1 className={styles.heading}>Contact me</h1>
      <p className={styles.title}>Get In Touch</p>
      <p className={styles.body}>
        Whether you have a question or just want to say hi, I’ll try my best to
        get back to you!
      </p>
      <a className={styles.anchor}
      href="mailto:dias.nurmukhambetov@gmail.com" 
      >Say Hello!</a>
    </section>
  );
}
