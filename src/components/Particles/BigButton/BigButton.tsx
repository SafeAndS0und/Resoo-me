import React from "react";
import styles from "./BigButton.module.scss";

interface props {
  onClick: () => void;
}

export const BigButton: React.FC<props> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className={styles.bigButton}>
      {children}
    </button>
  );
};
