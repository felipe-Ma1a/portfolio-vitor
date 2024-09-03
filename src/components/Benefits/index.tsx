import styles from "./styles.module.css";

const Benefits = () => {
  return (
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
          Planos alimentares totalmente adaptados às necessidades, preferências,
          estilo de vida e objetivos individuais. Nada de dietas genéricas,
          apenas soluções sob medida.
        </p>
      </article>

      <article className={styles.benefitsGroup}>
        <div className={styles.benefitsGroupTitle}>
          <p>03</p>
          <h3>Suporte via WhatsApp:</h3>
        </div>
        <p className={styles.benefitsGroupText}>
          Acesso direto para tirar dúvidas e receber orientações em tempo real,
          sempre que precisar e nunca se sentir sozinho(a) na sua jornada.
        </p>
      </article>

      <article className={styles.benefitsGroup}>
        <div className={styles.benefitsGroupTitle}>
          <p>04</p>
          <h3>Lista de Compras Personalizada e Prática:</h3>
        </div>
        <p className={styles.benefitsGroupText}>
          Cada item cuidadosamente selecionado para atender à dieta específica,
          facilitando a vida do paciente e garantindo que ele tenha tudo o que
          precisa para seguir o plano alimentar sem dificuldades.
        </p>
      </article>

      <article className={styles.benefitsGroup}>
        <div className={styles.benefitsGroupTitle}>
          <p>05</p>
          <h3>Planejamento de Refeições da Semana:</h3>
        </div>
        <p className={styles.benefitsGroupText}>
          Organização completa de todas as refeições da semana, desde o café da
          manhã até o jantar, adaptada ao gosto e às necessidades do paciente.
          Sem improvisos, apenas refeições equilibradas e fáceis de seguir.
        </p>
      </article>

      <article className={styles.benefitsGroup}>
        <div className={styles.benefitsGroupTitle}>
          <p>06</p>
          <h3>Acompanhamento acima da média:</h3>
        </div>
        <p className={styles.benefitsGroupText}>
          Monitoramento contínuo com ajustes na dieta e no plano de ação, mesmo
          após a entrega inicial, garantindo que os resultados sejam alcançados
          e sustentados ao longo do tempo.
        </p>
      </article>
    </section>
  );
};

export default Benefits;
