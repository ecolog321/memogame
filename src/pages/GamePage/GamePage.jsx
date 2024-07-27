import { useParams } from "react-router-dom";

import { Cards } from "../../components/Cards/Cards";
import { LevelProvider } from "../../context/levelContext/levelContext";

export function GamePage() {
  const { pairsCount } = useParams();

  return (
    <LevelProvider>
      <Cards pairsCount={parseInt(pairsCount, 10)} previewSeconds={5}></Cards>
    </LevelProvider>
  );
}
