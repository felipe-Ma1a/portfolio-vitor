import Image from "next/image";
import vitorImg1 from "public/images/flexvitor-1.jpg";
import vitorImg2 from "public/images/flexvitor-2.jpg";
import vitorImg3 from "public/images/flexvitor-3.jpg";
import vitorImg4 from "public/images/flexvitor-4.jpg";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
      <section className={styles.firstCard}>
        <Image
          src={vitorImg1}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
        <div className={styles.homeInfoGroup}>
          <h2>Sim, são as mesmas pessoas!</h2>
          <p className={styles.homeInfo}>
            Olá, meu nome é João Vitor, estou graduando nutrição. Minha jornada
            até aqui não foi fácil. Eu sei o que é olhar no espelho e não se
            reconhecer. Eu já estive muito acima do peso, já fiquei muito
            abaixo, e, por um longo tempo, fui prisioneiro da compulsão
            alimentar.
          </p>
        </div>
      </section>

      <section className={styles.secondCard}>
        <Image
          src={vitorImg2}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={520}
          quality={100}
          priority
        />
        <p className={styles.homeInfo}>
          Sei o que é sofrer preconceito e carregar o peso, não só físico, mas
          também emocional, de um corpo que parece estar fora do controle.
        </p>
      </section>

      <section className={styles.thirdCard}>
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
          Mas foi através dessas experiências que encontrei minha verdadeira
          vocação: ajudar pessoas como você a retornar o controle sobre a
          própria vida. Decidi estudar nutrição porque sabia que, com o
          conhecimento certo, poderia transformar minha realidade e a de outros.
        </p>
      </section>

      <section className={styles.fourthCard}>
        <p className={styles.homeInfo}>
          E foi exatamente isso que aconteceu. Hoje, tenho as ferramentas, o
          conhecimento e a experiência de quem já passou pelo que você está
          passando.
        </p>
        <Image
          src={vitorImg4}
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
