import { useNavigate } from "react-router-dom";
import { getLeaders } from "../../api/leaderApi";
import { LeaderBlock } from "../../components/LeaderBlock/LeaderBlock";
import styles from "./leaderbordPage.module.css";

export const LeaderbordPage = async () => {
  let leaders = [];
  const navigate = useNavigate();
  try {
    leaders = await getLeaders();
    console.log(leaders);
  } catch (error) {
    console.log(error);
  }
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
        {leaders.map(elem => (
          <LeaderBlock key={elem.id} name={elem.name} time={elem.time} />
        ))}
      </div>
    </div>
  );
};
