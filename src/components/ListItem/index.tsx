import { FaCheckSquare } from "react-icons/fa";
import styles from "./styles.module.css";

type ListItemProps = {
  text: string;
  className?: string;
  color?: string;
  showCheck?: boolean;
};

const ListItem = ({
  text,
  className,
  color = "#2374c8",
  showCheck = true,
}: ListItemProps) => {
  return (
    <li className={`${styles.listItem} ${className}`}>
      {showCheck && <FaCheckSquare size={16} color={color} />}
      {text}
    </li>
  );
};

export default ListItem;
