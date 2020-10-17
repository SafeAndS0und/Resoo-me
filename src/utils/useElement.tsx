import { useWizardState } from "@context/WizardContext/WizardContext";
import { AvailableElements } from "@context/Types";
import { elementValues } from "@context/WizardContext/WizardTypes";

export const useElement = <ElementT extends AvailableElements>(
  elementId: ElementT
): elementValues[ElementT] => {
  const wizardContext = useWizardState();
  const el = wizardContext.elements[elementId];
  return el.value as elementValues[ElementT];
};
