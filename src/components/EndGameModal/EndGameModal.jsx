import styles from "./EndGameModal.module.css";

import { Button } from "../Button/Button";

import deadImageUrl from "./images/dead.png";
import celebrationImageUrl from "./images/celebration.png";
import { useState } from "react";
import { addLeader } from "../../api/leaderApi";
import { useNavigate } from "react-router-dom";

export function EndGameModal({ isLeader, isWon, gameDurationSeconds, gameDurationMinutes, onClick }) {
  const title = isWon ? "Вы победили!" : "Вы проиграли!";
  const imgSrc = isWon || isLeader ? celebrationImageUrl : deadImageUrl;

  const imgAlt = isWon ? "celebration emodji" : "dead emodji";

  const champWin = false;

  const [user, setUser] = useState({});

  const time = gameDurationMinutes * 60 + gameDurationSeconds;
  const navigate = useNavigate();

  const handleUserName = e => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  const sendLeader = e => {
    e.preventDefault();
    try {
      addLeader(user.name, time);
      navigate("/leaderbord");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className={styles.modal}>
      <img className={styles.image} src={imgSrc} alt={imgAlt} />
      <h2 className={styles.title}>{champWin ? "Вы попали на Лидерборд!" : title}</h2>
      {champWin ? (
        <form className={styles.form} onSubmit={sendLeader}>
          <input
            className={styles.input}
            name="name"
            type="text"
            placeholder="Пользователь"
            onChange={handleUserName}
          />
          <button className={styles.button}>Подтвердить</button>
        </form>
      ) : null}
      <p className={styles.description}>Затраченное время:</p>
      <div className={styles.time}>
        {gameDurationMinutes.toString().padStart("2", "0")}.{gameDurationSeconds.toString().padStart("2", "0")}
      </div>

      <Button onClick={onClick}>Начать сначала</Button>
      <p className={styles.link} onClick={() => navigate("/leaderbord")}>
        Перейти к лидерборду
      </p>
    </div>
  );
}
