import { FaCheckSquare } from "react-icons/fa";

import styles from "./styles.module.css";

type ListItemProps = {
  text: string;
  className?: string;
};

const ListItem = ({ text, className }: ListItemProps) => {
  return (
    <li className={`${styles.listItem} ${className}`}>
      <FaCheckSquare size={16} color="#2374c8" />
      {text}
    </li>
  );
};

export default ListItem;
