import { useState } from "react";
import { SelectOption, SelectProps } from "../types/types";
import styles from "./../styles/styles.module.css";

const Select = ({ value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const clearBtnHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    clearOptions();
  };
  const clearOptions = () => {
    onChange(undefined);
  };
  const selectOption = (option: SelectOption) => {
    onChange(option);
  };
  const isOptionSelected = (option: SelectOption) => {
    return option === value;
  };
  return (
    //   using the tab index to apply the focus for the contianer
    <div
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>{value?.label}</span>
      <button className={styles["clear-btn"]} onClick={clearBtnHandler}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option) => {
          return (
            <li
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                selectOption(option);
              }}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } `}
              key={option.label}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Select;
