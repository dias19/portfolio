import React from "react";
import styles from './styles.module.css'
export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <a 
        href='https://github.com/dias19/portfolio' 
        target='_blank'
        className={styles.anchor}
        >
            Built by Dias Nurmukhambetov
        </a>
        <p className={styles.body}>
            Phone number: +7(778)-788-1709
        </p>
      </div>
    </footer>
  );
}
