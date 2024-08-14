import styles from "./leaderBlock.module.css";

export const LeaderBlock = ({ name = "Qwert", time = 2 }) => {
  return (
    <div className={styles.leader_block}>
      <p className={styles.leader_text}>№ 1</p>
      <p className={styles.leader_text}>{name}</p>
      <p className={styles.leader_text}>{time}</p>
    </div>
  );
};
