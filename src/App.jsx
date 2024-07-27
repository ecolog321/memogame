import { LevelContext } from "./context/levelContext/levelContext";
import { SelectLevelPage } from "./pages/SelectLevelPage/SelectLevelPage";

export const App = () => {
  return (
    <LevelContext.Provider>
      <SelectLevelPage></SelectLevelPage>
    </LevelContext.Provider>
  );
};
