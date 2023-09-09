import { SelectProps } from "../types/types";
import styles from "./../styles/styles.module.css";

const Select = ({ value, options, onChange }: SelectProps) => {
    return (
    //   using the tab index to apply the focus for the contianer
    <div tabIndex={0} className={styles.container}>
      <span className={styles.value}>Value</span>
      <button className={styles["clear-btn"]}>&times;</button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={styles.options}>
        {options.map((option) => {
          return (
            <li className={styles.option} key={option.label}>
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
