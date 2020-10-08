import React, { useState } from "react";
import styles from "./Progress.module.scss";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface props {
  progressElements: string[];
  currentlyAtPart: number;
  onDotClick: Function;
}

const Dot = ({ className, text, onDotClick, idx }) => {
  const [isHovering, setIsHovering] = useState(false);

  return (
    <div
      className={className}
      onMouseOver={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
      onClick={() => onDotClick(idx)}
    >
      {isHovering ? <span>{text}</span> : null}
    </div>
  );
};
export const Progress: React.FC<props> = ({
  progressElements,
  currentlyAtPart,
  onDotClick,
}) => {
  return (
    <div className={styles.progress}>
      {progressElements.map((text, idx) => {
        const dotCN = cn({
          dot: true,
          finished: idx < currentlyAtPart,
          active: currentlyAtPart === idx,
        });
        return (
          <Dot
            className={dotCN}
            text={text}
            onDotClick={onDotClick}
            idx={idx}
          />
        );
      })}
    </div>
  );
};
