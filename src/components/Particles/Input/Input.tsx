import React, { InputHTMLAttributes } from "react";
import styles from "./Input.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

type props = InputHTMLAttributes<HTMLInputElement> & {
  type?: string;
  defaultValue?: string | number;
  label?: {
    text: string;
    name: string;
    inline?: boolean;
  };
};

export const Input: React.FC<props> = (props) => {
  const { defaultValue, label, type = "text", ...rest } = props;
  const name = label ? label.name : null;

  const labelCN = cn({ inline: label && label.inline });

  const labelElement = label ? (
    <label htmlFor={name} className={labelCN}>
      {label.text}
    </label>
  ) : null;

  return (
    <div className={styles.inputContainer}>
      {labelElement}
      <input
        type={type}
        id={name}
        spellCheck="false"
        defaultValue={defaultValue}
        {...rest}
      />
    </div>
  );
};
