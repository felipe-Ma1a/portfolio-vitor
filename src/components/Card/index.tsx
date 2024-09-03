import { ReactNode } from "react";
import styles from "./styles.module.css";

type CardProps = {
  children: ReactNode;
  className?: string;
};

const Card = ({ children, className }: CardProps) => {
  return (
    <section className={`${styles.card} ${className}`}>{children}</section>
  );
};

export default Card;
