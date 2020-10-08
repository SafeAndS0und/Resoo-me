import {
  AvailableElements,
  AvailableLayouts,
  AvailableOptions,
  AvailableSections,
} from "@context/Types";

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
  relatedLayout?: AvailableLayouts;
  relatedOption?: AvailableOptions;
}

export type elementWithId = element & { id: number };

export type elements = elementWithId[];

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

export type sections = section[];

export type layouts = {
  [AvailableLayouts.TOP]: {
    left: AvailableSections | null;
    center: AvailableSections | null;
    right: AvailableSections | null;
  };
};

type checkboxValue = "checked" | "not-checked";

export type options = {
  [AvailableOptions.TOP_NAME_SIZE]: "0" | "1" | "2" | string | null;
  [AvailableOptions.TOP_NAME_BREAKLINE]: checkboxValue | string | null;
};

export type elementsState = {
  [key: number]: element;
};

export type WizardConfigurationType = {
  currentlyAt: number;
  layout: layouts;
  options: options;
  sections: sections;
  elements: elementsState;
};
