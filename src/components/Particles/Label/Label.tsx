import React from "react";
import styles from "./Label.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface props {
  inline: boolean;
  text: string;
}

export const Label: React.FC<props> = ({ children: input, inline, text }) => {
  const labelCN = cn({ inline });

  return (
    <label className={styles.label}>
      <span className={labelCN}>{text}</span>
      {input}
    </label>
  );
};
