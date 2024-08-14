import { createContext, useState } from "react";
export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [difficult, setDifficult] = useState("standart");
  const [time, setTime] = useState("45");

  function chooseDifficult(value) {
    setDifficult(value);
  }

  function getTime(value) {
    setTime(value);
  }

  return (
    <LevelContext.Provider value={{ difficult, time, chooseDifficult, getTime }}>{children}</LevelContext.Provider>
  );
};
