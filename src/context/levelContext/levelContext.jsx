import { createContext, useState } from "react";
export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [difficult, setDifficult] = useState("standart");
  const [eyesForce, setEyesForce] = useState(false);

  function chooseDifficult(value) {
    setDifficult(value);
  }

  function pickEyesForce() {
    setEyesForce(true);
  }

  function resetEyesForce() {
    setEyesForce(false);
  }

  return (
    <LevelContext.Provider value={{ difficult, chooseDifficult, eyesForce, pickEyesForce, resetEyesForce }}>
      {children}
    </LevelContext.Provider>
  );
};
