import {
  actionTypes,
  State,
  Action,
} from "@context/WizardContext/WizardContext";

export const wizardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.NEXT_SECTION:
      if (state.sections.length > state.currentlyAt + 1)
        return { ...state, currentlyAt: state.currentlyAt + 1 };
      return state;

    case actionTypes.PREVIOUS_SECTION:
      if (state.currentlyAt > 0)
        return { ...state, currentlyAt: state.currentlyAt - 1 };
      return state;

    case actionTypes.GO_TO_SECTION:
      return { ...state, currentlyAt: action.payload.sectionNumber };

    case actionTypes.UPDATE_ELEMENT_VALUE:
      const payload = action.payload;
      const updatedElement = state.elements[payload.elementId];

      const elements = {
        ...state.elements,
        [payload.elementId]: {
          ...updatedElement,
          value: payload.value,
        },
      };

      const layout =
        updatedElement.relatedLayout === undefined
          ? state.layout
          : setNewLayout(state, payload, updatedElement);

      const options =
        updatedElement.relatedOption === undefined
          ? state.options
          : setNewOptions(state, payload, updatedElement);

      return {
        ...state,
        elements,
        layout,
        options,
      };

    default:
      return state;
  }
};

const setNewOptions = (state, payload, updatedElement) => {
  return {
    ...state.options,
    [updatedElement.relatedOption]: payload.value,
  };
};

const setNewLayout = (state, payload, updatedElement) => {
  const value = parseInt(payload.value);
  const editedLayout = state.layout[updatedElement.relatedLayout];
  const editedLayoutProperty = Object.keys(editedLayout)[value];

  const checkForDuplicateValue = () => {
    const editedLayoutCopy = { ...editedLayout };
    const changedFrom = Object.entries(editedLayoutCopy).find(
      ([, val]) => val === state.currentlyAt
    )[0];

    return {
      ...editedLayout,
      [changedFrom]: null,
      [editedLayoutProperty]: state.currentlyAt,
    };
  };

  return {
    ...state.layout,
    [updatedElement.relatedLayout]: checkForDuplicateValue(),
  };
};
