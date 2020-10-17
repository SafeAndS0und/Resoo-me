import { AvailableElements } from "@context/Types";

export enum elementTypes {
  INPUT,
  CHOICE,
  CHECKBOX,
}

export interface element {
  labelText: string;
  type: elementTypes;
  value?: string;
  defaultValue?: string | number;
  defaultChecked?: boolean;
  defaultChoice?: number;
  options?: string[];
}

export type elements = element[];

export type step = { name: string; elementsUsed: AvailableElements[] };

export type steps = step[];

export type tip = {
  header: string;
  content: string;
};

export type section = {
  name: string;
  tip: tip;
  steps: steps;
};

export interface elementWithUpdateHandler<Schema> extends element {
  updateHandler: Schema;
}

export type sections = section[];

type TOP_FIRSTNAME_VALUE = string;
type TOP_LASTNAME_VALUE = string;
type TOP_JOB_TITLE_VALUE = string;
type TOP_SIZE_VALUE = number;
type TOP_BREAKLINE_VALUE = "checked" | "not-checked";
type TOP_PLACEMENT_NAME_VALUE = number;
type TOP_PLACEMENT_CONTACT_VALUE = number;
type TOP_PLACEMENT_PHOTO_VALUE = number;

export type elementValues = {
  [AvailableElements.TOP_FIRSTNAME]: TOP_FIRSTNAME_VALUE;
  [AvailableElements.TOP_LASTNAME]: TOP_LASTNAME_VALUE;
  [AvailableElements.TOP_JOB_TITLE]: TOP_JOB_TITLE_VALUE;
  [AvailableElements.TOP_SIZE]: TOP_SIZE_VALUE;
  [AvailableElements.TOP_BREAKLINE]: TOP_BREAKLINE_VALUE;
  [AvailableElements.TOP_PLACEMENT_NAME]: TOP_PLACEMENT_NAME_VALUE;
  [AvailableElements.TOP_PLACEMENT_CONTACT]: TOP_PLACEMENT_CONTACT_VALUE;
  [AvailableElements.TOP_PLACEMENT_PHOTO]: TOP_PLACEMENT_PHOTO_VALUE;
};

export type elementsState = {
  [AvailableElements.TOP_FIRSTNAME]: elementWithUpdateHandler<(v: TOP_FIRSTNAME_VALUE) => TOP_FIRSTNAME_VALUE>;
  [AvailableElements.TOP_LASTNAME]: elementWithUpdateHandler<(v: TOP_LASTNAME_VALUE) => TOP_LASTNAME_VALUE>;
  [AvailableElements.TOP_JOB_TITLE]: elementWithUpdateHandler<(v: TOP_JOB_TITLE_VALUE) => TOP_JOB_TITLE_VALUE>;
  [AvailableElements.TOP_SIZE]: elementWithUpdateHandler<(v: string) => TOP_SIZE_VALUE>;
  [AvailableElements.TOP_BREAKLINE]: elementWithUpdateHandler<(v: TOP_BREAKLINE_VALUE) => TOP_BREAKLINE_VALUE>;
  [AvailableElements.TOP_PLACEMENT_NAME]: elementWithUpdateHandler<(v: string) => TOP_PLACEMENT_NAME_VALUE>;
  [AvailableElements.TOP_PLACEMENT_CONTACT]: elementWithUpdateHandler<(v: string) => TOP_PLACEMENT_CONTACT_VALUE>;
  [AvailableElements.TOP_PLACEMENT_PHOTO]: elementWithUpdateHandler<(v: string) => TOP_PLACEMENT_PHOTO_VALUE>;
};

export type WizardConfigurationType = {
  currentlyAt: number;
  sections: sections;
  elements: elementsState;
};
