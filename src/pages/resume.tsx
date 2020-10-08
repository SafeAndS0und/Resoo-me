import React, { useEffect, useState } from "react";
import { Resume } from "@components/Modules/Resume/Resume";

const ResumePage = () => {
  const [fn, setFn] = useState("imie");
  const [ln, setLn] = useState("nazwisko");

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const fn = searchParams.get("fn");
    const ln = searchParams.get("ln");
    setFn(fn);
    setLn(ln);
  }, []);

  return (
    <div>
      <Resume />
    </div>
  );
};

export default ResumePage;
