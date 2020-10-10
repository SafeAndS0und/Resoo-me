import React, { InputHTMLAttributes, useState } from "react";
import styles from "./Input.module.scss";

type props = InputHTMLAttributes<HTMLInputElement> & {
  contextValue?: string | number;
};

export const Input: React.FC<props> = (props) => {
  const [value, setValue] = useState(null);
  const { contextValue, ...rest } = props;

  return (
    <input
      className={styles.Input}
      value={value || contextValue}
      onChange={(e) => setValue(e.target.value)}
      spellCheck="false"
      {...rest}
    />
  );
};
