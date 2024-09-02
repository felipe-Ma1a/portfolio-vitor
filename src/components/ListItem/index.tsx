import { FaCheckSquare } from "react-icons/fa";

import styles from "./styles.module.css";

const ListItem = ({ text }: { text: string }) => {
  return (
    <li className={styles.listItem}>
      <FaCheckSquare size={16} color="#2374c8" />
      {text}
    </li>
  );
};

export default ListItem;
