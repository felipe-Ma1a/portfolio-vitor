import styles from "./styles.module.css";

const NextArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.next}`}
      onClick={onClick}
    />
  );
};

const PrevArrow = (props: any) => {
  const { className, onClick } = props;
  return (
    <div
      className={`${className} ${styles.arrow} ${styles.prev}`}
      onClick={onClick}
    />
  );
};

export { NextArrow, PrevArrow };
