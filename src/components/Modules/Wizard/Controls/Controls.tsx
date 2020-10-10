import React from "react";
import styles from "./Controls.module.scss";
import { Input } from "@components/Particles/Input/Input";
import { Choice } from "@components/Particles/Choice/Choice";

import {
  actionTypes,
  useWizardDispatch,
  useWizardState,
} from "@context/WizardContext/WizardContext";
import {
  elementTypes,
  elementWithId,
  step,
  steps,
} from "@context/WizardContext/WizardTypes";
import { Checkbox } from "@components/Particles/Checkbox/Checkbox";
import { Label } from "@components/Particles/Label/Label";

interface props {
  sectionName: string;
  steps: steps;
}

const ElementDistributor = (element: elementWithId) => {
  const dispatchToWizard = useWizardDispatch();

  switch (element.type) {
    case elementTypes.INPUT:
      return (
        <Label text={element.labelText} inline={false}>
          <Input
            contextValue={element.value || element.defaultValue}
            onBlur={(e) => {
              dispatchToWizard({
                type: actionTypes.UPDATE_ELEMENT_VALUE,
                payload: { elementId: element.id, value: e.target.value },
              });
            }}
          />
        </Label>
      );
    case elementTypes.CHECKBOX:
      return (
        <Label text={element.labelText} inline={false}>
          <Checkbox
            contextValue={element.value || element.defaultValue}
            onChange={(e) => {
              dispatchToWizard({
                type: actionTypes.UPDATE_ELEMENT_VALUE,
                payload: {
                  elementId: element.id,
                  value: e.target.checked ? "checked" : "not-checked",
                },
              });
            }}
          />
        </Label>
      );
    case elementTypes.CHOICE:
      if (element.options.length === 0) return null;
      return (
        <Choice
          property={element.labelText}
          options={element.options}
          defaultChoice={element.defaultChoice}
          onChange={(active) => {
            dispatchToWizard({
              type: actionTypes.UPDATE_ELEMENT_VALUE,
              payload: {
                elementId: element.id,
                value: active.toString(),
              },
            });
          }}
        />
      );
  }
};

const Step: React.FC<step> = ({ name, elementsUsed }) => {
  const wizardState = useWizardState();
  const elements = elementsUsed.map((id) => ({
    ...wizardState.elements[id],
    id,
  }));

  return (
    <section>
      <h2>{name}</h2>
      <div className={styles.contentContainer}>
        {elements.map(ElementDistributor)}
      </div>
    </section>
  );
};

const mapHandler = (step: step) => (
  <Step name={step.name} elementsUsed={step.elementsUsed} />
);

export const Controls: React.FC<props> = ({ sectionName, steps }) => {
  return (
    <div className={styles.controls}>
      <h1 className={styles.title}>{sectionName}</h1>
      <div className={styles.interface}>{steps.map(mapHandler)}</div>
    </div>
  );
};
