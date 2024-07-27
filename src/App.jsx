import { LevelProvider } from "./context/levelContext/levelContext";
import { SelectLevelPage } from "./pages/SelectLevelPage/SelectLevelPage";

export const App = () => {
  return (
    <LevelProvider>
      <SelectLevelPage></SelectLevelPage>
    </LevelProvider>
  );
};
