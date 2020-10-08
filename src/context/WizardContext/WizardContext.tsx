import React, { useContext, createContext, useReducer } from "react";
import { WizardConfiguration } from "@context/WizardContext/WizardConfiguration";
import { wizardReducer } from "@context/WizardContext/WizardReducer";
import { AvailableElements } from "@context/Types";
import { WizardConfigurationType } from "@context/WizardContext/WizardTypes";

export enum actionTypes {
  NEXT_SECTION,
  PREVIOUS_SECTION,
  GO_TO_SECTION,
  UPDATE_ELEMENT_VALUE,
}

export type State = WizardConfigurationType;

export type Action =
  | { type: actionTypes.NEXT_SECTION }
  | { type: actionTypes.PREVIOUS_SECTION }
  | { type: actionTypes.GO_TO_SECTION; payload: { sectionNumber: number } }
  | {
      type: actionTypes.UPDATE_ELEMENT_VALUE;
      payload: { elementId: AvailableElements; value: string };
    };

type Dispatch = (action: Action) => void;

const WizardStateContext = createContext<State | null>(null);
const WizardDispatchContext = createContext<Dispatch | null>(null);

WizardStateContext.displayName = "Wizard State Context";
WizardDispatchContext.displayName = "Wizard Dispatch Context";

export const WizardProvider = ({ children }) => {
  const [state, dispatch] = useReducer(wizardReducer, WizardConfiguration);

  return (
    <WizardStateContext.Provider value={state}>
      <WizardDispatchContext.Provider value={dispatch}>
        {children}
      </WizardDispatchContext.Provider>
    </WizardStateContext.Provider>
  );
};

export const useWizardState = () => {
  const context = useContext(WizardStateContext);
  if (context === undefined) {
    throw new Error("useWizardState used outside of provider");
  }
  return context;
};

export const useWizardDispatch = () => {
  const context = useContext(WizardDispatchContext);
  if (context === undefined) {
    throw new Error("useWizardDispatch used outside of provider");
  }
  return context;
};
