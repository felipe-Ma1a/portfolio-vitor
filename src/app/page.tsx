import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import ClientsBenefits from "@/components/ClientsBenefits";
import ListItem from "@/components/ListItem";
import Button from "@/components/Button";
import Carousel from "@/components/Carousel";
import CardImage from "@/components/CardImage";
import FAQ from "@/components/FAQ";

import cardImg1 from "public/images/flexvitor-9.jpg";
import cardImg2 from "public/images/flexvitor-5.jpg";
import cardImg3 from "public/images/flexvitor-7.jpg";
import cardImg4 from "public/images/flexvitor-8.jpg";
import cardImg5 from "public/images/flexvitor-10.jpg";
import cardImg6 from "public/images/flexvitor-13.jpg";

import styles from "./page.module.css";
import Card from "@/components/Card";

export default function Home() {
  return (
    <>
      <main className={styles.container}>
        <Hero />

        <Benefits />

        <ClientsBenefits
          title="O que as mulheres ganham?"
          text="Saúde hormonal, controle de peso, bem-estar geral e autoestima."
        >
          <ListItem text="Perca de gordura" />
          <ListItem text="Definição muscular" />
          <ListItem text="Ganho de massa magra" />
          <ListItem text="Suplementação (caso necessário)" />
          <ListItem
            text="Ciclo menstrual"
            color="#d0abf1"
            className={styles.listItemWoman}
          />
          <ListItem
            text="Alimentação específica para diferentes fases do ciclo menstrual,
            ajudando a aliviar sintomas como inchaço, fadiga, e alterações de
            humor."
            showCheck={false}
            className={styles.listItemWoman}
          />
          <ListItem
            text="Nutrição para Gravidez e Pós parto"
            color="#d0abf1"
            className={styles.listItemWoman}
          />
          <ListItem
            text="Suporte nutricional para mulheres grávidas e no pós-parto, visando a
            saúde da mãe e do bebê."
            showCheck={false}
            className={styles.listItemWoman}
          />
          <ListItem
            text="Melhora nos quadros clínicos de saúde"
            color="#d0abf1"
            className={styles.listItemWoman}
          />
        </ClientsBenefits>

        <ClientsBenefits
          title="O que os homens ganham?"
          text="Definição muscular, ganho de massa magra e perda de gordura."
        >
          <ListItem text="Perca de gordura" />
          <ListItem text="Ganho de massa magra corretamente" />
          <ListItem text="Definição muscular" />
          <ListItem text="Suplementação (caso necessário)" />
          <ListItem
            text="Melhora no desempenho de esportes"
            color="#1e98d9"
            className={styles.listItemMan}
          />
          <ListItem
            text="Melhora no desempenho dos treinos de musculação"
            color="#1e98d9"
            className={styles.listItemMan}
          />
          <ListItem
            text="Consulta para Pré e Pós-Treino"
            color="#1e98d9"
            className={styles.listItemMan}
          />
          <ListItem
            text="Orientação específica sobre alimentação antes e depois dos treinos,
            ajustando para diferentes tipos de atividade física"
            showCheck={false}
            className={styles.listItemMan}
          />
        </ClientsBenefits>

        <div className={styles.buttonGroup}>
          <Button />
        </div>

        <Carousel />

        <Card className={styles.cardMain}>
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
              <b>ambos os extremos</b> – muito acima e muito abaixo do peso, e
              por um longo tempo, fui prisioneiro da <b>compulsão alimentar</b>.
            </p>
          </div>
          <h3 className={styles.cardImgSmallSubtitle}>
            <CardImage src={cardImg2} className={styles.cardImg} />
            Sim, já fui as duas pessoas!
          </h3>
        </Card>

        <Card className={styles.cardReverse}>
          <CardImage src={cardImg3} className={styles.cardImg} />
          <p className={styles.cardInfo}>
            Mas foi através dessas experiências que encontrei minha verdadeira{" "}
            <b>vocação</b>: ajudar pessoas como você a retomar o controle sobre
            a <b>própria vida</b>. Decidi estudar <b>nutrição</b> porque sabia
            que, com o conhecimento certo, poderia <b>transformar</b> minha
            realidade e a de outros.
          </p>
        </Card>

        <Card>
          <CardImage src={cardImg4} className={styles.cardImg} />
          <p className={styles.cardInfo}>
            E foi exatamente isso que aconteceu. Hoje, tenho as{" "}
            <b>ferramentas</b>, o <b>conhecimento</b> e a <b>experiência</b> de
            quem já <span>passou pelo que você está passando.</span>
          </p>
        </Card>

        <Card>
          <p className={styles.cardInfo}>
            Eu não estou aqui para te julgar ou te dizer que a <b>mudança</b> é
            fácil. Estou aqui para te mostrar que é <b>possível</b>. Se você
            está cansado de lutar sozinho, se quer finalmente ver{" "}
            <b>resultados reais</b> e <b>duradouros</b>, eu estou aqui para{" "}
            <b>guiar cada passo</b> da sua <b>transformação</b>.
          </p>
          <CardImage src={cardImg5} className={styles.cardImg} />
        </Card>

        <Card>
          <p className={styles.cardInfo}>
            Quantas vezes você já tentou uma dieta da moda e acabou frustrado? O
            tempo que você perdeu, a energia gasta, e o dinheiro desperdiçado em
            promessas vazias poderia ter sido investido em algo que{" "}
            <b>realmente funciona</b>. Com o apoio certo, alguém que pegue na
            sua mão e te guie, você pode alcançar seus objetivos de forma{" "}
            <b>eficaz</b> e <b>duradoura</b>. Não deixe mais tempo e dinheiro
            escaparem. O caminho certo está aqui, com a ajuda de quem{" "}
            <b>já passou pelo que você está passando</b>, que entende suas
            necessidades e te leva ao <b>resultado que você tanto busca</b>
          </p>
          <CardImage src={cardImg6} className={styles.cardImg} />
        </Card>

        <Card className={styles.cardReverse}>
          <CardImage src={cardImg1} className={styles.cardImg} />
          <p className={styles.cardInfo}>
            Clique no link abaixo e venha conversar comigo. Juntos, podemos
            construir o caminho para uma vida mais <b>saudável</b>,{" "}
            <b>equilibrada</b> e <b>feliz</b>. Eu <b>acredito</b> em você,
            porque eu <b>já estive no seu lugar</b> e sei que a{" "}
            <b>mudança é possível</b>.
          </p>
        </Card>

        <div className={styles.buttonGroup}>
          <h2>Vamos transformar sua vida?</h2>
          <Button />
        </div>

        <FAQ />
      </main>

      <footer className={styles.footer}>
        © 2024 - Produzido por{" "}
        <a
          href={`https://api.whatsapp.com/send?phone=5511969359567&text=Olá Felipe, gostei muito do site que você criou e gostaria de realizar um orçamento!`}
          target="_blank"
        >
          Felipe Maia
        </a>
      </footer>
    </>
  );
}
