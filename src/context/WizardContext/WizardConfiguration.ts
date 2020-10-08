import {
  AvailableElements,
  AvailableLayouts,
  AvailableOptions,
  AvailableSections,
} from "@context/Types";
import { elements } from "@context/WizardContext/Elements";
import {WizardConfigurationType} from "@context/WizardContext/WizardTypes";

const stepsWithinSections = {
  [AvailableSections.NAME_AND_TITLE]: [
    {
      name: "Data",
      elementsUsed: [
        AvailableElements.TOP_FIRSTNAME,
        AvailableElements.TOP_LASTNAME,
        AvailableElements.TOP_JOB_TITLE,
      ],
    },
    {
      name: "Configuration",
      elementsUsed: [
        AvailableElements.TOP_PLACEMENT,
        AvailableElements.TOP_SIZE,
        AvailableElements.TOP_BREAKLINE,
      ],
    },
  ],
  [AvailableSections.CONTACT]: [
    {
      name: "Data",
      elementsUsed: [],
    },
  ],
};

export const WizardConfiguration: WizardConfigurationType = {
  currentlyAt: 0,
  layout: {
    [AvailableLayouts.TOP]: {
      left: AvailableSections.NAME_AND_TITLE,
      center: null,
      right: null,
    },
  },
  options: {
    [AvailableOptions.TOP_NAME_SIZE]: "0",
    [AvailableOptions.TOP_NAME_BREAKLINE]: "not-checked",
  },
  elements,
  sections: [
    {
      name: "1. Name & Title",
      tip: {
        header: "Okay, let's start with the top section",
        content:
          "Remember that you don't need to fill out everything - that's your call." +
          "Also, some placeholder can keep whatever you want them to keep, not all of them have a clear purpose.",
      },
      steps: stepsWithinSections[AvailableSections.NAME_AND_TITLE],
    },
    {
      name: "2. Contact",
      tip: {
        header: "Okay, let's start with the top section",
        content:
          "Remember that you don't need to fill out everything - that's your call." +
          "Also, some placeholder can keep whatever you want them to keep, not all of them have a clear purpose.",
      },
      steps: stepsWithinSections[AvailableSections.CONTACT],
    },
  ],
};
