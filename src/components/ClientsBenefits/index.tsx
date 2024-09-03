import { ReactNode } from "react";
import styles from "./styles.module.css";

type ClientsBenefitsProps = {
  children: ReactNode;
  title: string;
  text: string;
};

const ClientsBenefits = ({ children, title, text }: ClientsBenefitsProps) => {
  return (
    <section className={styles.clientsBenefits}>
      <article className={styles.clientsBenefitsGroup}>
        <h2>{title}</h2>
        <p>{text}</p>
      </article>

      <ul>{children}</ul>
    </section>
  );
};

export default ClientsBenefits;
