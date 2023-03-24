import React from "react";
import style from '~/styles/OrientationRight.module.css'
export default function OrientationRight() {
  return (
    <div className={style.right}>
      <div className={style.email}>
        <a href="mailto:dias.nurmukhambetov@gmail.com" className={style.anchor}>
          dias.nurmukhambetov@gmail.com
        </a>
      </div>
    </div>
  );
}
