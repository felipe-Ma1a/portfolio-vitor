import { FaWhatsapp } from "react-icons/fa";
import styles from "./styles.module.css";

const Button = () => {
  return (
    <a
      href={`https://api.whatsapp.com/send?phone=5511953713476&text=Olá Vitor, gostaria de uma mudança de vida!`}
      target="_blank"
      className={styles.button}
    >
      <FaWhatsapp size={20} />
      Clique aqui e descubra como.
    </a>
  );
};

export default Button;
