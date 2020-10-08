import React from "react";
import styles from "./Wizard.module.scss";
import { Tooltip } from "@components/Modules/Wizard/Tooltip/Tooltip";
import { Controls } from "@components/Modules/Wizard/Controls/Controls";
import { Navigation } from "@components/Modules/Wizard/Navigation/Navigation";
import { section } from "@context/WizardContext/WizardTypes";

interface props {
  section: section;
}

export const Wizard: React.FC<props> = ({ section }) => {
  const { steps, name } = section;

  return (
    <div className={styles.wizard}>
      <Tooltip header={section.tip.header} content={section.tip.content} />
      <Controls sectionName={name} steps={steps} />
      <Navigation />
    </div>
  );
};
