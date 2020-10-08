import React, { useEffect, useState } from "react";
import styles from "./Choice.module.scss";

interface props {
  property: string;
  options: string[];
  defaultChoice?: number;
  onChange?: (e: number) => void;
}

export const Choice: React.FC<props> = ({
  property,
  options,
  defaultChoice,
  onChange = () => {},
}) => {
  const [active, setActive] = useState<number | null>(defaultChoice);

  useEffect(() => onChange(active), [active]);

  return (
    <div className={styles.choice}>
      <h4>{property}</h4>
      <div className={styles.options}>
        {options.map((option, id) => (
          <p
            onClick={() => {
              setActive(id);
            }}
            className={active === id ? styles.active : ""}
          >
            {option}
          </p>
        ))}
      </div>
    </div>
  );
};
