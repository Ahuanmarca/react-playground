import React from "react";
import FocusLock from "react-focus-lock";
import { RemoveScroll } from "react-remove-scroll";
import { X as Close } from "react-feather";
import VisuallyHidden from "../VisuallyHidden";

import styles from "./Modal.module.css";

function Modal({ title, dismissMe, children }) {

  /**
   * MANAGING FOCUS
   * Instead of using useRef to set focus to some element inside the modal,
   * and then to return the focus to an element on the previous view, we can
   * (in this case) rely on FocusLock to do all that focus management.
   * 
   * BUT: How do I set focus to some element in the children of the modal?
   */

  // const closeButtonRef = React.useRef();
  // React.useEffect(() => {
  //   const currentlyFocusedElement = document.activeElement;
  //   closeButtonRef.current.focus();
  //   return () => currentlyFocusedElement?.focus();
  // }, []);

  React.useEffect(() => {
    function handleKeyDown(e) {
      if (e.code === "Escape") {
        dismissMe();
      }
    }
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [dismissMe]);

  return (
    <FocusLock returnFocus={true}>
      <RemoveScroll>
        <div className={styles.wrapper}>
          <div className={styles.backdrop} onClick={dismissMe} />
          <div
            className={styles.dialog}
            role="dialog"
            aria-modal="true"
            aria-label={title}
          >
            <button
              className={styles.closeBtn}
              onClick={dismissMe}
              // ref={closeButtonRef}
            >
              <Close />
              <VisuallyHidden>
                Dismiss modal
              </VisuallyHidden>
            </button>
            {children}
          </div>
        </div>
      </RemoveScroll>
    </FocusLock>
  );
}

export default Modal;
