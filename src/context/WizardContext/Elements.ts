import { AvailableElements } from "@context/Types";
import { element, elementsState, elementTypes, elementWithUpdateHandler } from "@context/WizardContext/WizardTypes";

const createElement = <Schema>(props: element, updateHandler: Schema): elementWithUpdateHandler<Schema> => {
  return { ...props, updateHandler };
};

export const elements: elementsState = {
  [AvailableElements.TOP_FIRSTNAME]: createElement(
    {
      type: elementTypes.INPUT,
      labelText: "Firstname",
    },
    (v) => v
  ),

  [AvailableElements.TOP_LASTNAME]: createElement(
    {
      type: elementTypes.INPUT,
      labelText: "Lastname",
    },
    (v) => v
  ),

  [AvailableElements.TOP_JOB_TITLE]: createElement(
    {
      type: elementTypes.INPUT,
      labelText: "Job Title",
    },
    (v) => v
  ),

  [AvailableElements.TOP_SIZE]: createElement(
    {
      type: elementTypes.CHOICE,
      labelText: "Text Size",
      options: ["Small", "Medium", "Large"],
      defaultChoice: 0,
    },
    (v) => parseInt(v)
  ),
  [AvailableElements.TOP_BREAKLINE]: createElement(
    {
      type: elementTypes.CHECKBOX,
      labelText: "Break line",
    },
    (checked) => checked
  ),

  [AvailableElements.TOP_PLACEMENT_NAME]: createElement(
    {
      type: elementTypes.CHOICE,
      labelText: "Name Placement",
      options: ["Left", "Center", "Right"],
      defaultChoice: 0,
    },
    (v) => parseInt(v)
  ),

  [AvailableElements.TOP_PLACEMENT_CONTACT]: createElement(
    {
      type: elementTypes.CHOICE,
      labelText: "Contact Placement",
      options: ["Left", "Center", "Right"],
      defaultChoice: 1,
    },
    (v) => parseInt(v)
  ),

  [AvailableElements.TOP_PLACEMENT_PHOTO]: createElement(
    {
      type: elementTypes.CHOICE,
      labelText: "Photo Placement",
      options: ["Left", "Center", "Right"],
      defaultChoice: 2,
    },
    (v) => parseInt(v)
  ),
};
