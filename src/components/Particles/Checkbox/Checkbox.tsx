import React, { InputHTMLAttributes, useState } from "react";
import styles from "./Checkbox.module.scss";

type props = InputHTMLAttributes<HTMLInputElement> & {
  contextValue?: string | number;
};

export const Checkbox: React.FC<props> = (props) => {
  const [isChecked, setIsChecked] = useState(false);
  const { contextValue, ...rest } = props;
  const checkedContext = contextValue === "checked";

  return (
    <input
      className={styles.Input}
      checked={isChecked || checkedContext}
      type="checkbox"
      onChange={(e) => setIsChecked(e.target.checked)}
      {...rest}
    />
  );
};
