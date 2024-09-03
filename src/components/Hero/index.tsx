import cardImg from "public/images/flexvitor-12.jpg";
import CardImage from "../CardImage";
import Button from "../Button";

import styles from "./styles.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <CardImage
        src={cardImg}
        className={`${styles.cardImg} ${styles.imgHero}`}
      />
      <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
      <div className={styles.buttonGroup}>
        <Button />
      </div>
    </section>
  );
};

export default Hero;
