import { createContext, useState } from "react";
export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [difficult, setDifficult] = useState("standart");

  function chooseDifficult(value) {
    setDifficult(value);
    console.log(value);
  }

  return <LevelContext.Provider value={{ difficult, chooseDifficult }}>{children}</LevelContext.Provider>;
};
