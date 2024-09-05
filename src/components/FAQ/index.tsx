"use client";

import { useState } from "react";
import Accordion from "./Accordion";

import styles from "./styles.module.css";

const FAQ = () => {
  const [openAccordionIndex, setOpenAccordionIndex] = useState<number | null>(
    null
  );

  const toggleAccordion = (index: number) => {
    setOpenAccordionIndex(openAccordionIndex === index ? null : index);
  };

  return (
    <section className={styles.faq}>
      <h1>Perguntas frequentes</h1>

      <div className={styles.accordionGroup}>
        <Accordion
          title="Como funciona o diagnóstico 360º?"
          text="Nosso diagnóstico vai além da nutrição. Avaliamos aspectos
            emocionais, rotina diária, sono, estresse e atividades físicas para
            criar um plano totalmente personalizado e eficaz."
          isOpen={openAccordionIndex === 0}
          onClick={() => toggleAccordion(0)}
        />
        <Accordion
          title="A dieta é realmente personalizada?"
          text="Sim! Cada plano alimentar é desenhado exclusivamente para você, levando em consideração suas necessidades, preferências, estilo de vida e objetivos específicos. Nada de dietas genéricas!"
          isOpen={openAccordionIndex === 1}
          onClick={() => toggleAccordion(1)}
        />
        <Accordion
          title="Como funciona o suporte via WhatsApp?"
          text="Você terá acesso direto a mim e à nossa equipe para tirar dúvidas e receber orientações em tempo real, garantindo que você nunca se sinta sozinho(a) na sua jornada."
          isOpen={openAccordionIndex === 2}
          onClick={() => toggleAccordion(2)}
        />
        <Accordion
          title="A lista de compras é fácil de seguir?"
          text="Sim! Nossa lista de compras é prática e personalizada, com cada item selecionado para facilitar a adesão ao seu plano alimentar, tornando o processo simples e descomplicado."
          isOpen={openAccordionIndex === 3}
          onClick={() => toggleAccordion(3)}
        />
        <Accordion
          title="O que é o planejamento de refeições?"
          text="Além de organizar todas as suas refeições da semana, desde o café da manhã até o jantar, também adiantamos processos-chave, como deixar as proteínas já preparadas. Isso garante que você tenha refeições equilibradas e prontas para consumo, facilitando sua rotina e evitando improvisos."
          isOpen={openAccordionIndex === 4}
          onClick={() => toggleAccordion(4)}
        />
        <Accordion
          title="O acompanhamento realmente faz diferença?"
          text="Sim! Monitoramos continuamente seu progresso e ajustamos seu plano conforme necessário, para garantir que você alcance e mantenha seus resultados ao longo do tempo."
          isOpen={openAccordionIndex === 5}
          onClick={() => toggleAccordion(5)}
        />
        <Accordion
          title="Qual é o diferencial para as mulheres?"
          text="Oferecemos uma abordagem personalizada que inclui cuidados com a saúde hormonal, apoio nutricional para diferentes fases do ciclo menstrual, e suporte durante a gravidez e pós-parto."
          isOpen={openAccordionIndex === 6}
          onClick={() => toggleAccordion(6)}
        />
        <Accordion
          title="E para os homens, quais são os benefícios?"
          text="Focamos na definição muscular, ganho de massa magra, e perda de gordura, com orientações específicas para melhorar o desempenho nos esportes e treinos de musculação."
          isOpen={openAccordionIndex === 7}
          onClick={() => toggleAccordion(7)}
        />
        <Accordion
          title="Por que devo confiar em você?"
          text="Eu entendo seus desafios porque já estive no seu lugar. Minha experiência pessoal e profissional me capacitou a ajudar pessoas como você a transformar suas vidas de forma real e duradoura."
          isOpen={openAccordionIndex === 8}
          onClick={() => toggleAccordion(8)}
        />
        <Accordion
          title="Como posso começar?"
          text="Simples! Clique no link abaixo e entre em contato comigo. Vamos juntos construir o caminho para uma vida mais saudável, equilibrada e feliz. Eu estou aqui para te apoiar em cada passo da sua jornada."
          isOpen={openAccordionIndex === 9}
          onClick={() => toggleAccordion(9)}
        />
      </div>
    </section>
  );
};

export default FAQ;
