import { useNavigate } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";
import { useState } from "react";
import { useLevelContext } from "../../context/hooks/useLevelContext";
import clsx from "clsx";

export function SelectLevelPage() {
  const [valueLevel, setValueLevel] = useState();
  const navigate = useNavigate();
  const { difficult, chooseDifficult } = useLevelContext();

  const handleLevel = e => {
    e.preventDefault();
    setValueLevel(e.target.value);
    console.log(e.target.value);
  };

  function startGame() {
    navigate(`game/${valueLevel}`);
  }

  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={clsx(valueLevel === "3" ? styles.clicked : styles.level)}>
            <button className={styles.levelLink} value={3} onClick={handleLevel}>
              1
            </button>
          </li>
          <li className={clsx(valueLevel === "6" ? styles.clicked : styles.level)}>
            <button className={styles.levelLink} value={6} onClick={handleLevel}>
              2
            </button>
          </li>
          <li className={clsx(valueLevel === "9" ? styles.clicked : styles.level)}>
            <button className={styles.levelLink} value={9} onClick={handleLevel}>
              3
            </button>
          </li>
        </ul>
        <div className={styles.difficult}>
          <div className={clsx(difficult === "standart" ? styles.form_radio_btn_clicked : styles.form_radio_btn)}>
            <label htmlFor="level" onClick={() => chooseDifficult("standart")}>
              Стандантрый
            </label>
            <input type="radio" name="level" value="standart" />
          </div>
          <div className={clsx(difficult === "easy" ? styles.form_radio_btn_clicked : styles.form_radio_btn)}>
            <label htmlFor="level" onClick={() => chooseDifficult("easy")}>
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
