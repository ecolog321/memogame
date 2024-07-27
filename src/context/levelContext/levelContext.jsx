import { createContext, useState } from "react";
export const LevelContext = createContext(null);

export const LevelProvider = ({ children }) => {
  const [level, setLevel] = useState("standart");

  function chooseLevel(value) {
    console.log(level);
    setLevel(value);
  }

  return <LevelContext.Provider value={{ level, chooseLevel }}>{children}</LevelContext.Provider>;
};
