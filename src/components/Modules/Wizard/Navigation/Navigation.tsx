import React from "react";
import styles from "./Navigation.module.scss";
import {
  actionTypes,
  useWizardDispatch,
  useWizardState,
} from "@context/WizardContext/WizardContext";
import { BigButton } from "@components/Particles/BigButton/BigButton";
import { Progress } from "@components/Modules/Wizard/Navigation/Progress/Progress";

interface props {}

export const Navigation: React.FC<props> = () => {
  const dispatchToWizard = useWizardDispatch();
  const { currentlyAt, sections } = useWizardState();
  const progressElements = sections.map((section) => section.name);
  const goBack = () => dispatchToWizard({ type: actionTypes.PREVIOUS_SECTION });
  const goNext = () => dispatchToWizard({ type: actionTypes.NEXT_SECTION });
  const goTo = (sectionNumber) =>
    dispatchToWizard({
      type: actionTypes.GO_TO_SECTION,
      payload: { sectionNumber },
    });

  return (
    <div className={styles.navigation}>
      <Progress
        progressElements={progressElements}
        currentlyAtPart={currentlyAt}
        onDotClick={goTo}
      />
      <div className={styles.buttonContainer}>
        <BigButton onClick={goBack}>Back</BigButton>
        <BigButton onClick={goNext}>Next</BigButton>
      </div>
    </div>
  );
};
