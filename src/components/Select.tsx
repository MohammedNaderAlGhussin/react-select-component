import { useState, useEffect } from "react";
import { SelectOption, SelectOptionMProps, SelectProps } from "../types/types";
import styles from "./../styles/styles.module.css";

const Select = ({ multiple, value, options, onChange }: SelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState<number>(0);

  const clearBtnHandler = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.stopPropagation();
    clearOptions();
  };
  const clearOptions = () => {
    multiple ? onChange([]) : onChange(undefined);
  };
  const selectOption = (option: SelectOption) => {
    if (multiple) {
      if (value.includes(option)) {
        onChange(value.filter((o) => o !== option));
      } else {
        onChange([...value, option]);
      }
    } else {
      if (option !== value) onChange(option);
    }
  };
  const isOptionSelected = (option: SelectOption) => {
    return multiple ? value.includes(option) : option === value;
  };
  useEffect(() => {
    setHighlightedIndex(0);
  }, [isOpen]);
  return (
    //   using the tab index to apply the focus for the contianer
    <div
      tabIndex={0}
      className={styles.container}
      onClick={() => setIsOpen((prev) => !prev)}
      onBlur={() => setIsOpen(false)}
    >
      <span className={styles.value}>
        {multiple
          ? value.map((v) => {
              return (
                <SelectOptionM
                  key={v.value}
                  selectOption={selectOption}
                  value={v}
                />
              );
            })
          : value?.label}
      </span>
      <button className={styles["clear-btn"]} onClick={clearBtnHandler}>
        &times;
      </button>
      <div className={styles.divider}></div>
      <div className={styles.caret}></div>
      <ul className={`${styles.options} ${isOpen ? styles.show : ""}`}>
        {options.map((option, index) => {
          return (
            <li
              onClick={(e) => {
                e.stopPropagation();
                setIsOpen(false);
                selectOption(option);
              }}
              onMouseEnter={() => setHighlightedIndex(index)}
              className={`${styles.option} ${
                isOptionSelected(option) ? styles.selected : ""
              } 
               ${index === highlightedIndex ? styles.highlighted : ""}`}
              key={option.value}
            >
              {option.label}
            </li>
          );
        })}
      </ul>
    </div>
  );
};

// Select Option in the multiple value
const SelectOptionM = ({ value, selectOption }: SelectOptionMProps) => {
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        selectOption(value);
      }}
      className={styles["option-badge"]}
    >
      {value.label}
      <span className={styles["remove-btn"]}>&times;</span>
    </button>
  );
};

export default Select;
