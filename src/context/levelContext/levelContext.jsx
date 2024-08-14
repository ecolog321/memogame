import { createContext, useState } from "react";
export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [difficult, setDifficult] = useState("standart");
  const [time, setTime] = useState();

  function chooseDifficult(value) {
    setDifficult(value);
    console.log(difficult);
  }

  function getTime(value) {
    setTime(value);
    console.log(time);
  }

  return (
    <LevelContext.Provider value={{ difficult, time, chooseDifficult, getTime }}>{children}</LevelContext.Provider>
  );
};
