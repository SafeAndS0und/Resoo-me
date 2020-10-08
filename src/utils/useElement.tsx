import { useWizardState } from "@context/WizardContext/WizardContext";
import {
  AvailableElements,
  AvailableLayouts,
  AvailableOptions,
} from "@context/Types";
import { layouts, options } from "@context/WizardContext/WizardTypes";

export const useElement = (elementId: AvailableElements): string => {
  const wizardContext = useWizardState();
  const el = wizardContext.elements[elementId];
  return el.value;
};

export const useOption = <T extends AvailableOptions>(optionId: T): options[T] => {
  const wizardContext = useWizardState();
  return wizardContext.options[optionId];
};

export const useLayout = <T extends AvailableLayouts>(
  layoutId: T
): layouts[T] => {
  const wizardContext = useWizardState();
  return wizardContext.layout[layoutId];
};
