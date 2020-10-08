import React from "react";
import styles from "./Top.module.scss";
import {NameAndTitle} from "@components/Modules/Resume/Sections/Top/NameAndTitle";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface props {}

export const Top: React.FC<props> = () => {

  return (
    <div className={styles.top}>
      <NameAndTitle />
    </div>
  );
};
