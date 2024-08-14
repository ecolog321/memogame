import { useEffect, useState } from "react";
import { getLeaders } from "../../api/leaderApi";
import { useNavigate } from "react-router-dom";
import styles from "./leaderbordPage.module.css";
import { LeaderBlock } from "../../components/LeaderBlock/LeaderBlock";

export const LeaderbordPage = () => {
  const [leaders, setLeaders] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const getLeaderList = async () => {
      try {
        const data = await getLeaders();
        setLeaders(data.leaders);
        setIsLoading(false);
      } catch (error) {
        setIsLoading(false);
      }
    };
    getLeaderList();
  }, []);

  const startGame = () => {
    navigate("/");
  };

  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <p className={styles.heading_text}>Лидерборд</p>
        <button className={styles.button} onClick={startGame}>
          Начать игру
        </button>
      </div>
      <div>
        <div className={styles.leader_block}>
          <p className={styles.leader_text}>Позиция</p>
          <p className={styles.leader_text}>Пользователь</p>
          <p className={styles.leader_text}>Время</p>
        </div>
        {!isLoading &&
          leaders.map((elem, index) => (
            <LeaderBlock index={index + 1} key={elem.id} name={elem.name} time={elem.time} />
          ))}
      </div>
    </div>
  );
};
