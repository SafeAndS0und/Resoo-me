import React from "react";
import styles from "./Resume.module.scss";
import { Top } from "@components/Modules/Resume/Sections/Top/Top";

interface props {}

export const Resume: React.FC<props> = () => {
  return (
    <div className={styles.resume}>
      <Top />
    </div>
  );
};
