import { useContext } from "react";
import { LevelContext } from "../levelContext/levelContext";

export const useLevelContext = () => {
  return useContext(LevelContext);
};
