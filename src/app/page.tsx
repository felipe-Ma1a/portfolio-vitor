import Button from "@/components/Button";
import CardImage from "@/components/CardImage";
import ListItem from "@/components/ListItem";
import { FaCheckSquare } from "react-icons/fa";

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
          src={cardImg6}
          className={`${styles.cardImg} ${styles.imgHero}`}
        />
        <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
        <div className={styles.buttonGroup}>
          <Button />
        </div>
      </section>

      <section className={styles.benefits}>
        <div className={styles.benefitsText}>
          <h2>Nosso diferencial</h2>
          <p>Diferenciais da nossa equipe: </p>
        </div>

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

      <section className={styles.clientsBenefits}>
        <article className={styles.clientsBenefitsGroup}>
          <h2>O que as mulheres ganham?</h2>
          <p>Saúde hormonal, controle de peso, bem-estar geral e autoestima.</p>
        </article>

        <ul>
          <ListItem text="Perca de gordura" />
          <ListItem text="Definição muscular" />
          <ListItem text="Ganho de massa magra" />
          <ListItem text="Suplementação (caso necessário)" />
          <li className={`${styles.listItem} ${styles.listItemWoman}`}>
            <FaCheckSquare size={16} color="#d0abf1" />
            Ciclo menstrual
          </li>
          <li className={`${styles.listItem} ${styles.listItemWoman}`}>
            Alimentação específica para diferentes fases do ciclo menstrual,
            ajudando a aliviar sintomas como inchaço, fadiga, e alterações de
            humor.
          </li>
          <li className={`${styles.listItem} ${styles.listItemWoman}`}>
            <FaCheckSquare size={16} color="#d0abf1" />
            Nutrição para Gravidez e Pós parto
          </li>
          <li className={`${styles.listItem} ${styles.listItemWoman}`}>
            Suporte nutricional para mulheres grávidas e no pós-parto, visando a
            saúde da mãe e do bebê.
          </li>
          <li className={`${styles.listItem} ${styles.listItemWoman}`}>
            <FaCheckSquare size={16} color="#d0abf1" />
            Melhora nos quadros clínicos de saúde
          </li>
        </ul>
      </section>

      <section className={styles.clientsBenefits}>
        <article className={styles.clientsBenefitsGroup}>
          <h2>O que os homens ganham?</h2>
          <p>Definição muscular, ganho de massa magra e perda de gordura.</p>
        </article>

        <ul>
          <ListItem text="Perca de gordura" />
          <ListItem text="Ganho de massa magra corretamente" />
          <ListItem text="Definição muscular" />
          <ListItem text="Suplementação (caso necessário)" />
          <li className={`${styles.listItem} ${styles.listItemMan}`}>
            <FaCheckSquare size={16} color="#1e98d9" />
            Melhora no desempenho de esportes
          </li>
          <li className={`${styles.listItem} ${styles.listItemMan}`}>
            <FaCheckSquare size={16} color="#1e98d9" />
            Melhora no desempenho dos treinos de musculação
          </li>
          <li className={`${styles.listItem} ${styles.listItemMan}`}>
            <FaCheckSquare size={16} color="#1e98d9" />
            Consulta para Pré e Pós-Treino
          </li>
          <li className={`${styles.listItem} ${styles.listItemMan}`}>
            Orientação específica sobre alimentação antes e depois dos treinos,
            ajustando para diferentes tipos de atividade física
          </li>
        </ul>
      </section>

      <Button />

      <section className={`${styles.card} ${styles.cardMain}`}>
        <h2 className={styles.cardSubtitle}>Quem sou eu?</h2>
        <div className={styles.cardGroup}>
          <p className={styles.cardInfo}>
            Olá, meu nome é João Vitor, faço parte de uma equipe de
            profissionais da saúde dedicada a <b>transformar vidas</b>.
            <br />
            Minha jornada até aqui não foi fácil. <b>
              Entendo profundamente
            </b>{" "}
            os desafios de quem luta contra a balança. Já estive em{" "}
            <b>ambos os extremos</b> – muito acima e muito abaixo do peso, e por
            um longo tempo, fui prisioneiro da <b>compulsão alimentar</b>.
          </p>
        </div>
        <h3 className={styles.cardImgSmallSubtitle}>
          <CardImage src={cardImg2} className={styles.cardImg} />
          Sim, já fui as duas pessoas!
        </h3>
      </section>

      <section className={`${styles.card} ${styles.cardReverse}`}>
        <CardImage src={cardImg3} className={styles.cardImg} />
        <p className={styles.cardInfo}>
          Mas foi através dessas experiências que encontrei minha verdadeira{" "}
          <b>vocação</b>: ajudar pessoas como você a retomar o controle sobre a{" "}
          <b>própria vida</b>. Decidi estudar <b>nutrição</b> porque sabia que,
          com o conhecimento certo, poderia <b>transformar</b> minha realidade e
          a de outros.
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
          <b>resultados reais</b> e <b>duradouros</b>, eu estou aqui para{" "}
          <b>guiar cada passo</b> da sua <b>transformação</b>.
        </p>
        <CardImage src={cardImg5} className={styles.cardImg} />
      </section>

      <section className={`${styles.card} ${styles.cardReverse}`}>
        <CardImage src={cardImg1} className={styles.cardImg} />
        <p className={styles.cardInfo}>
          Clique no link abaixo e venha conversar comigo. Juntos, podemos
          construir o caminho para uma vida mais <b>saudável</b>,{" "}
          <b>equilibrada</b> e <b>feliz</b>. Eu <b>acredito</b> em você, porque
          eu <b>já estive no seu lugar</b> e sei que a <b>mudança é possível</b>
          .
        </p>
      </section>

      <div className={styles.buttonGroup}>
        <h2>Vamos transformar sua vida?</h2>
        <Button />
      </div>
    </main>
  );
}
