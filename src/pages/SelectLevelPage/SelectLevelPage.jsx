import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { useLevelContext } from "../../context/hooks/useLevelContext";

export function SelectLevelPage() {
  const [valueLevel, setValueLevel] = useState();
  const navigate = useNavigate();
  const { level, chooseLevel } = useLevelContext();

  const handleLevel = e => {
    e.preventDefault();
    setValueLevel(e.target.value);
  };

  function startGame() {
    navigate(`game/${valueLevel}`);

    console.log(level);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <p>Текущая сложность {valueLevel}</p>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <button className={styles.levelLink} value={3} onClick={handleLevel}>
              1
            </button>
          </li>
          <li className={styles.level}>
            <button className={styles.levelLink} value={6} onClick={handleLevel}>
              2
            </button>
          </li>
          <li className={styles.level}>
            <button className={styles.levelLink} value={9} onClick={handleLevel}>
              3
            </button>
          </li>
        </ul>
        <div className={styles.difficult}>
          <div className={styles.form_radio_btn}>
            <label htmlFor="level" onClick={chooseLevel("standart")}>
              Стандантрый
            </label>
            <input type="radio" name="level" value="standart" />
          </div>
          <div className={styles.form_radio_btn}>
            <label htmlFor="level" onClick={chooseLevel("easy")}>
              Упрощённый
            </label>
            <input type="radio" name="level" value="easy" />
          </div>
        </div>
        <button className={styles.button} onClick={startGame}>
          Начать
        </button>
      </div>
    </div>
  );
}
