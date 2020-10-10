import React from "react";
import styles from "./Navbar.module.scss";

export interface props {
  brandName?: string;
}

export const Navbar: React.FC<props> = ({ brandName = "resoo.me" }) => {
  return (
    <nav className={styles.nav}>
      <div className={styles.brand}>
        <h1>{brandName}</h1>
      </div>

      <div className={styles.menu}>
        <span>Lorem</span>
        <span>Ipsum</span>
        <span>Dolores</span>
      </div>
    </nav>
  );
};
