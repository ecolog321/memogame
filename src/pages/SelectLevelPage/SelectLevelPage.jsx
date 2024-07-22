import { Link } from "react-router-dom";
import styles from "./SelectLevelPage.module.css";

export function SelectLevelPage() {
  return (
    <div className={styles.container}>
      <div className={styles.modal}>
        <h1 className={styles.title}>Выбери сложность</h1>
        <ul className={styles.levels}>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/3">
              1
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/6">
              2
            </Link>
          </li>
          <li className={styles.level}>
            <Link className={styles.levelLink} to="/game/9">
              3
            </Link>
          </li>
        </ul>
        <div className={styles.difficult}>
          <div className={styles.form_radio_btn}>
            <label htmlFor="level">Стандантрый</label>
            <input type="radio" name="level" value="standart" />
          </div>
          <div className={styles.form_radio_btn}>
            <label htmlFor="level">Упрощённый</label>
            <input type="radio" name="level" value="easy" />
          </div>
        </div>
        <button className={styles.button}>Начать</button>
      </div>
    </div>
  );
}
