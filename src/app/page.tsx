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
          className={`${styles.cardImg} ${styles.imgHero}`}
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

      <section className={styles.benefits}>
        <h2>Nosso diferencial</h2>
        <p className={styles.benefitsText}>
          Diferenciais do João Vitor como seu Nutricionista:{" "}
        </p>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>01</p>
            <h3>Diagnóstico 360º da Sua Vida:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Análise completa que vai além da nutrição, incluindo aspectos
            emocionais, rotina diária, sono, estresse e atividades físicas. Isso
            garante uma abordagem holística e personalizada, adaptada às
            necessidades reais do paciente.
          </p>
        </article>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>02</p>
            <h3>Dieta Específica e 100% Personalizada:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Planos alimentares totalmente adaptados às necessidades,
            preferências, estilo de vida e objetivos individuais. Nada de dietas
            genéricas, apenas soluções sob medida.
          </p>
        </article>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>03</p>
            <h3>Suporte via WhatsApp:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Acesso direto para tirar dúvidas e receber orientações em tempo
            real, sempre que precisar e nunca se sentir sozinho(a) na sua
            jornada.
          </p>
        </article>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>04</p>
            <h3>Lista de Compras Personalizada e Prática:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Cada item cuidadosamente selecionado para atender à dieta
            específica, facilitando a vida do paciente e garantindo que ele
            tenha tudo o que precisa para seguir o plano alimentar sem
            dificuldades.
          </p>
        </article>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>05</p>
            <h3>Planejamento de Refeições da Semana:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Organização completa de todas as refeições da semana, desde o café
            da manhã até o jantar, adaptada ao gosto e às necessidades do
            paciente. Sem improvisos, apenas refeições equilibradas e fáceis de
            seguir.
          </p>
        </article>

        <article className={styles.benefitsGroup}>
          <div className={styles.benefitsGroupTitle}>
            <p>06</p>
            <h3>Acompanhamento:</h3>
          </div>
          <p className={styles.benefitsGroupText}>
            Acima da média Monitoramento contínuo com ajustes na dieta e no
            plano de ação, mesmo após a entrega inicial, garantindo que os
            resultados sejam alcançados e sustentados ao longo do tempo.
          </p>
        </article>
      </section>

      <div className={styles.buttonGroup}>
        <h2>Vamos transformar sua vida?</h2>
        <Button />
      </div>
    </main>
  );
}
