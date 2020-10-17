import { actionTypes, State, Action } from "@context/WizardContext/WizardContext";

export const wizardReducer = (state: State, action: Action): State => {
  switch (action.type) {
    case actionTypes.NEXT_SECTION:
      if (state.sections.length > state.currentlyAt + 1)
        return { ...state, currentlyAt: state.currentlyAt + 1 };
      return state;

    case actionTypes.PREVIOUS_SECTION:
      if (state.currentlyAt > 0) return { ...state, currentlyAt: state.currentlyAt - 1 };
      return state;

    case actionTypes.GO_TO_SECTION:
      return { ...state, currentlyAt: action.payload.sectionNumber };

    case actionTypes.UPDATE_ELEMENT_VALUE:
      const payload = action.payload;
      const updatedElement = state.elements[payload.elementId];
      // @ts-ignore
      const newValue = updatedElement.updateHandler(payload.value);

      return {
        ...state,
        elements: {
          ...state.elements,
          [payload.elementId]: { ...state.elements[payload.elementId], value: newValue },
        },
      };

    default:
      return state;
  }
};
