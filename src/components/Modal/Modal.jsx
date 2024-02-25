// import React from "react";
import { X as Close } from "react-feather";

import styles from "./Modal.module.css";

function Modal({ dismissMe, children }) {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backdrop} />
      <div className={styles.dialog}>
        <div className={styles.closeBtn} onClick={dismissMe}>
          <Close />
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
