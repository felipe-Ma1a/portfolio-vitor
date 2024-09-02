import Button from "@/components/Button";
import CardImage from "@/components/CardImage";

import cardImg1 from "public/images/flexvitor-9.jpg";
import cardImg2 from "public/images/flexvitor-5.jpg";
import cardImg3 from "public/images/flexvitor-7.jpg";
import cardImg4 from "public/images/flexvitor-8.jpg";
import cardImg5 from "public/images/flexvitor-10.jpg";
import cardImg6 from "public/images/flexvitor-12.jpg";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.container}>
      <section className={styles.hero}>
        <CardImage
          src={cardImg1}
          className={`${styles.cardImg} ${styles.cardImgHero}`}
        />
        <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
        <div className={styles.buttonGroup}>
          <Button />
        </div>
      </section>

      <section className={`${styles.card} ${styles.cardMain}`}>
        <h2 className={styles.cardSubtitle}>Quem sou eu?</h2>
        <div className={styles.cardGroup}>
          <p className={styles.cardInfo}>
            Olá, meu nome é João Vitor, estou graduando nutrição. Minha jornada
            até aqui não foi fácil. Eu sei o que é olhar no espelho e não se
            reconhecer. Eu já estive muito acima do peso, já fiquei muito
            abaixo, e, por um longo tempo, fui prisioneiro da compulsão
            alimentar.
          </p>
          <CardImage
            src={cardImg2}
            className={`${styles.cardImg} ${styles.cardImgSmall}`}
          />
        </div>
        <h3 className={styles.cardImgSmallSubtitle}>
          Sim, já fui as duas pessoas!
        </h3>
      </section>

      <section className={`${styles.card} ${styles.cardReverse}`}>
        <CardImage src={cardImg3} className={styles.cardImg} />
        <p className={styles.cardInfo}>
          Mas foi através dessas experiências que encontrei minha verdadeira{" "}
          <b>vocação</b>: ajudar pessoas como você a retomar o controle sobre a
          própria vida. Decidi estudar <b>nutrição</b> porque sabia que, com o
          conhecimento certo, poderia <b>transformar</b> minha realidade e a de
          outros.
        </p>
      </section>

      <section className={styles.card}>
        <CardImage src={cardImg4} className={styles.cardImg} />
        <p className={styles.cardInfo}>
          E foi exatamente isso que aconteceu. Hoje, tenho as <b>ferramentas</b>
          , o <b>conhecimento</b> e a <b>experiência</b> de quem já{" "}
          <span>passou pelo que você está passando.</span>
        </p>
      </section>

      <section className={styles.card}>
        <p className={styles.cardInfo}>
          Eu não estou aqui para te julgar ou te dizer que a <b>mudança</b> é
          fácil. Estou aqui para te mostrar que é <b>possível</b>. Se você está
          cansado de lutar sozinho, se quer finalmente ver{" "}
          <b>resultados reais</b> e duradouros, eu estou aqui para{" "}
          <b>guiar cada passo</b> da sua <b>transformação</b>.
        </p>
        <CardImage src={cardImg5} className={styles.cardImg} />
      </section>

      <section className={`${styles.card} ${styles.cardReverse}`}>
        <p className={styles.cardInfo}>
          Clique no link abaixo e venha conversar comigo. Juntos, podemos
          construir o caminho para uma vida mais <b>saudável</b>,{" "}
          <b>equilibrada</b> e <b>feliz</b>. Eu <b>acredito</b> em você, porque
          eu já estive no seu lugar e sei que a <b>mudança é possível</b>.
        </p>
        <CardImage src={cardImg6} className={styles.cardImg} />
      </section>

      <div className={styles.buttonGroup}>
        <h2>Vamos transformar sua vida?</h2>
        <Button />
      </div>
    </main>
  );
}
