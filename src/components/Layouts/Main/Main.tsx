import React from "react";
import { Navbar } from "@components/Modules/Navbar/Navbar";
import { WizardProvider } from "@context/WizardContext/WizardContext";

export const Main: React.FC = ({ children }) => {
  return (
    <div>
      <Navbar />
      <WizardProvider>
        {children}
      </WizardProvider>
    </div>
  );
};
