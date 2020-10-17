import React, { useEffect, useState } from "react";
import styles from "./Choice.module.scss";

interface props {
  property: string;
  options: string[];
  choice?: number;
  onChange?: (e: number) => void;
}

export const Choice: React.FC<props> = ({ property, options, choice, onChange = () => {} }) => {
  const [active, setActive] = useState<number | null>(null);

  useEffect(() => typeof active === "number" && onChange(active), [active]);
  // useEffect(() => setActive(choice), [choice]);

  console.log(active, choice);

  const mapHandler = (option, id) => (
    <p onClick={() => setActive(id)} className={active === id || (!active && choice === id) ? styles.active : ""}>
      {option}
    </p>
  );

  return (
    <div className={styles.choice}>
      <h4>{property}</h4>
      <div className={styles.options}>{options.map(mapHandler)}</div>
    </div>
  );
};
