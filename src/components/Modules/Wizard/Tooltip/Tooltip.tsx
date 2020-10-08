import React, { useState } from "react";
import styles from "./Tooltip.module.scss";

interface props {
  header: string;
  content: string;
}

const Content: React.FC<props> = ({ header, content }) => (
  <div className={styles.content}>
    <h1>{header}</h1>
    <p>{content}</p>
  </div>
);

export const Tooltip: React.FC<props> = ({ header, content }) => {
  const [showContent, setShowContent] = useState(true);

  return (
    <div className={`${styles.tooltip} ${showContent ? null : styles.closed}`}>
      <button onClick={() => setShowContent((content) => !content)}>
        {showContent ? "Hide" : "Show Tip"}
      </button>
      {showContent ? <Content header={header} content={content} /> : null}
    </div>
  );
};
