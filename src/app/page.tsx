import Image from "next/image";
import vitorImg1 from "public/images/flexvitor-9.jpg";
import vitorImg2 from "public/images/flexvitor-5.jpg";
import vitorImg3 from "public/images/flexvitor-7.jpg";
import vitorImg4 from "public/images/flexvitor-8.jpg";
import vitorImg5 from "public/images/flexvitor-10.jpg";
import vitorImg6 from "public/images/flexvitor-12.jpg";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <Image
        src={vitorImg1}
        alt="Imagem do Vitor"
        className={styles.vitorImg}
        width={420}
        height={520}
        quality={100}
        priority
      />
      <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
      <div className={styles.buttonGroupHero}>
        <a
          href={`https://api.whatsapp.com/send?phone=5511953713476&text=Olá Vitor, gostaria de uma mudança de vida!`}
          target="_blank"
        >
          <FaWhatsapp size={20} />
          Clique aqui e descubra como.
        </a>
      </div>
      <section className={styles.firstCard}>
        <div className={styles.homeInfoGroup}>
          <h2 className={styles.subtitle}>Quem sou eu?</h2>
          <p className={styles.homeInfo}>
            Olá, meu nome é João Vitor, estou graduando nutrição. Minha jornada
            até aqui não foi fácil. Eu sei o que é olhar no espelho e não se
            reconhecer. Eu já estive muito acima do peso, já fiquei muito
            abaixo, e, por um longo tempo, fui prisioneiro da compulsão
            alimentar.
          </p>
          <Image
            src={vitorImg2}
            alt="Imagem do Vitor"
            className={`${styles.vitorImg} ${styles.vitorImgGordo}`}
            width={420}
            height={520}
            quality={100}
            priority
          />
          <h3 className={styles.textImgGordo}>Sim, já fui as duas pessoas!</h3>
        </div>
      </section>

      <section className={styles.secondCard}>
        <Image
          src={vitorImg3}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
        <p className={styles.homeInfo}>
          Mas foi através dessas experiências que encontrei minha verdadeira{" "}
          <b>vocação</b>: ajudar pessoas como você a retomar o controle sobre a
          própria vida. Decidi estudar <b>nutrição</b> porque sabia que, com o
          conhecimento certo, poderia <b>transformar</b> minha realidade e a de
          outros.
        </p>
      </section>

      <section className={styles.thirdCard}>
        <Image
          src={vitorImg4}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
        <p className={styles.homeInfo}>
          E foi exatamente isso que aconteceu. Hoje, tenho as <b>ferramentas</b>
          , o <b>conhecimento</b> e a <b>experiência</b> de quem já{" "}
          <span>passou pelo que você está passando.</span>
        </p>
      </section>

      <section className={styles.fourthCard}>
        <p className={styles.homeInfo}>
          Eu não estou aqui para te julgar ou te dizer que a <b>mudança</b> é
          fácil. Estou aqui para te mostrar que é <b>possível</b>. Se você está
          cansado de lutar sozinho, se quer finalmente ver{" "}
          <b>resultados reais</b> e duradouros, eu estou aqui para{" "}
          <b>guiar cada passo</b> da sua <b>transformação</b>.
        </p>
        <Image
          src={vitorImg5}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
      </section>

      <section className={styles.fifthCard}>
        <p className={styles.homeInfo}>
          Clique no link abaixo e venha conversar comigo. Juntos, podemos
          construir o caminho para uma vida mais <b>saudável</b>,{" "}
          <b>equilibrada</b> e <b>feliz</b>. Eu <b>acredito</b> em você, porque
          eu já estive no seu lugar e sei que a <b>mudança é possível</b>.
        </p>
        <Image
          src={vitorImg6}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
      </section>

      <div className={styles.buttonGroup}>
        <h2>Vamos transformar sua vida?</h2>
        <a
          href={`https://api.whatsapp.com/send?phone=5511953713476&text=Olá Vitor, gostaria de uma mudança de vida!`}
          target="_blank"
        >
          <FaWhatsapp size={20} />
          Clique aqui e descubra como.
        </a>
      </div>
    </main>
  );
}
