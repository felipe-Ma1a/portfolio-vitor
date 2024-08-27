import Image from "next/image";
import vitorImg from "public/images/vitor-2.jpg";
import vitorGordo from "public/images/vitor-gordo-1.jpg";
import vitorMagro from "public/images/vitor-magro-1.jpg";
import { FaWhatsapp } from "react-icons/fa";

import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <h1>Transforme sua vida com quem já esteve no seu lugar</h1>
      <section className={styles.home}>
        <Image
          src={vitorImg}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={620}
          quality={100}
          priority
        />
        <div className={styles.homeInfo}>
          <p>
            Olá, meu nome é João Vitor, e sou estudante de nutrição. Minha
            jornada até aqui não foi fácil. Eu sei o que é olhar no espelho e
            não se reconhecer. Eu já estive muito acima do peso, já fiquei muito
            abaixo, e, por um longo tempo, fui prisioneiro da compulsão
            alimentar. Sei o que é sofrer preconceito e carregar o peso, não só
            físico, mas também emocional, de um corpo que parece estar fora do
            controle. Mas foi através dessas experiências que encontrei minha
            verdadeira vocação: ajudar pessoas como você a retomar o controle
            sobre a própria vida. Decidi estudar nutrição porque sabia que, com
            o conhecimento certo, poderia transformar minha realidade e a de
            outros. E foi exatamente isso que aconteceu. Hoje, tenho as
            ferramentas, o conhecimento e a experiência de quem já passou pelo
            que você está passando. Eu não estou aqui para te julgar ou te dizer
            que a mudança é fácil. Estou aqui para te mostrar que é possível. Se
            você está cansado de lutar sozinho, se quer finalmente ver
            resultados reais e duradouros, eu estou aqui para guiar cada passo
            da sua transformação. Clique no link abaixo e venha conversar
            comigo. Juntos, podemos construir o caminho para uma vida mais
            saudável, equilibrada e feliz. Eu acredito em você, porque eu já
            estive no seu lugar e sei que a mudança é possível.
          </p>
        </div>
      </section>

      <section className={styles.home}>
        <p className={styles.homeInfo}>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quod ipsam
          odit illum veniam ea? Perferendis, sapiente! Et corporis nemo
          quibusdam. Laboriosam molestias harum vitae reprehenderit error nemo
          aut, impedit officia! Placeat aut nulla harum dolorum, accusamus minus
          quasi quod dicta incidunt id quisquam mollitia corporis fuga, numquam,
          omnis distinctio. Quos, architecto repudiandae blanditiis placeat
          aspernatur eius distinctio autem maiores at. Laborum ex eum molestiae!
          Magni consectetur esse deleniti voluptate molestias, beatae architecto
          officiis tenetur fugiat necessitatibus, sequi vitae quae vel amet
          quisquam explicabo ratione quos debitis maiores atque quibusdam
          laudantium? Perferendis nobis optio delectus eius dolore in ut? Quis
          cum architecto fuga, eligendi, quisquam minus tenetur optio officia
          esse, officiis ab blanditiis velit. Mollitia, quis? Quasi cumque ab
          libero blanditiis?
        </p>
        <Image
          src={vitorGordo}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={620}
          quality={100}
          priority
        />
      </section>

      <section className={styles.home}>
        <Image
          src={vitorMagro}
          alt="Imagem do Vitor"
          className={styles.vitorImg}
          width={420}
          height={420}
          quality={100}
          priority
        />
        <p className={styles.homeInfo}>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores a
          dolorum magnam tempora ad optio veniam quos dolore enim ipsam saepe,
          ullam, dolor neque fugit architecto iste commodi? Nemo, aspernatur.
          Laudantium illo distinctio reiciendis, quibusdam nobis magnam commodi
          veniam labore quo odio necessitatibus exercitationem! Distinctio amet,
          maxime sed eaque rerum cumque eligendi cupiditate? Vitae ab numquam
          consequuntur pariatur, in adipisci! Laborum mollitia nihil laboriosam,
          facere incidunt veritatis, voluptatum quae consequuntur adipisci,
          magni reiciendis amet quod veniam dolorum repudiandae similique? Quia
          quas id, laborum possimus amet explicabo at quasi adipisci commodi.
          Animi, quidem illum? Mollitia, ducimus, quasi, odio eligendi
          perferendis quibusdam doloremque suscipit dolores earum ea quam
          dignissimos tempora corrupti consequuntur possimus cum dicta aliquam
          neque nobis error labore. Dicta, voluptate.
        </p>
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
