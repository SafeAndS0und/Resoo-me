import React from "react";
import styles from "./Structure.module.scss";
import { Wizard } from "@components/Modules/Wizard/Wizard";
import { Resume } from "@components/Modules/Resume/Resume";
import { useWizardState } from "@context/WizardContext/WizardContext";

export const Structure: React.FC = () => {
  const wizardContext = useWizardState();
  const { sections, currentlyAt } = wizardContext;

  return (
    <main className={styles.structure}>
      <section className={styles.left}>
        <Wizard section={sections[currentlyAt]} />
      </section>
      <section className={styles.right}>
        <Resume />
        <p>Preview</p>
      </section>
    </main>
  );
};
