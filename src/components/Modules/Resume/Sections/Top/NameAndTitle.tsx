import React from "react";
import styles from "./NameAndTitle.module.scss";
import { useElement, useOption } from "../../../../../utils/useElement";
import { AvailableElements, AvailableOptions } from "@context/Types";
import classNames from "classnames/bind";

const cn = classNames.bind(styles);

interface props {}

export const NameAndTitle: React.FC<props> = () => {
  const firstname = useElement(AvailableElements.TOP_FIRSTNAME);
  const lastname = useElement(AvailableElements.TOP_LASTNAME);
  const jobTitle = useElement(AvailableElements.TOP_JOB_TITLE);

  const size = useOption<AvailableOptions.TOP_NAME_SIZE>(
    AvailableOptions.TOP_NAME_SIZE
  );
  const breakline = useOption<AvailableOptions.TOP_NAME_BREAKLINE>(
    AvailableOptions.TOP_NAME_BREAKLINE
  );

  const nameStyles = cn({
    small: size === "0",
    medium: size === "1",
    large: size === "2",
  });

  return (
    <div className={styles.nameAndTitleContainer}>
      <div>
        <h1 className={nameStyles}>{firstname} </h1>
        {breakline === "checked" ? <br /> : null}
        <h1 className={nameStyles}>{lastname}</h1>
      </div>
      <p>{jobTitle}</p>
    </div>
  );
};
