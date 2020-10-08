import {
  AvailableElements,
  AvailableLayouts,
  AvailableOptions,
} from "@context/Types";
import { elementTypes } from "@context/WizardContext/WizardTypes";

export const elements = {
  [AvailableElements.TOP_FIRSTNAME]: {
    type: elementTypes.INPUT,
    labelText: "Firstname",
  },
  [AvailableElements.TOP_LASTNAME]: {
    type: elementTypes.INPUT,
    labelText: "Lastname",
  },
  [AvailableElements.TOP_JOB_TITLE]: {
    type: elementTypes.INPUT,
    labelText: "Job Title",
  },
  [AvailableElements.TOP_SIZE]: {
    type: elementTypes.CHOICE,
    labelText: "Text Size",
    options: ["Small", "Medium", "Large"],
    defaultChoice: 0,
    relatedOption: AvailableOptions.TOP_NAME_SIZE,
  },
  [AvailableElements.TOP_PLACEMENT]: {
    type: elementTypes.CHOICE,
    labelText: "Position",
    options: ["Left", "Center", "Right"],
    defaultChoice: 0,
    relatedLayout: AvailableLayouts.TOP,
  },
  [AvailableElements.TOP_BREAKLINE]: {
    type: elementTypes.CHECKBOX,
    labelText: "Break line",
    relatedOption: AvailableOptions.TOP_NAME_BREAKLINE,
  },
};
