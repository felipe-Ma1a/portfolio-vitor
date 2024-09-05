"use client";

import styles from "./styles.module.css";

type AccordionProps = {
  title: string;
  text: string;
  isOpen: boolean;
  onClick: () => void;
};

const Accordion = ({ title, text, isOpen, onClick }: AccordionProps) => {
  return (
    <section>
      <button
        onClick={onClick}
        className={`${styles.accordionButton} ${
          isOpen ? styles.accordionOpen : ""
        }`}
      >
        {isOpen ? <span>-</span> : <span>+</span>}
        {title}
      </button>
      {!isOpen && <div className={styles.accordionLine}></div>}
      <div
        className={`${styles.accordionText} ${
          isOpen ? styles.accordionTextOpen : styles.accordionTextClosed
        }`}
      >
        {isOpen && <p>{text}</p>}
      </div>
    </section>
  );
};

export default Accordion;
