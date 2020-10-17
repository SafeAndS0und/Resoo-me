import React from "react";
import styles from "./Top.module.scss";
import { NameAndTitle } from "@components/Modules/Resume/Sections/Top/NameAndTitle";
import { AvailableElements } from "@context/Types";
import { Contact } from "@components/Modules/Resume/Sections/Top/Contact";
import { useElement } from "../../../../../utils/useElement";

interface props {}

export const Top: React.FC<props> = () => {
  const namePlacement = useElement(AvailableElements.TOP_PLACEMENT_NAME);
  const contactPlacement = useElement(AvailableElements.TOP_PLACEMENT_CONTACT);
  const photoPlacement = useElement(AvailableElements.TOP_PLACEMENT_PHOTO);

  const placementMapping = {
    0: "left",
    1: "center",
    2: "right",
  };

  const nameAndTitleCN = styles[placementMapping[namePlacement]];
  const contactCN = styles[placementMapping[contactPlacement]];
  const photoCN = styles[placementMapping[photoPlacement]];

  return (
    <div className={styles.top}>
      <div className={nameAndTitleCN}>
        <NameAndTitle />
      </div>
      <div className={contactCN}>
        <Contact />
      </div>
      <div className={photoCN}>
        <div className={styles.photo} />
      </div>
    </div>
  );
};
