import styles from "./leaderBlock.module.css";

export const LeaderBlock = ({ name, time, index }) => {
  return (
    <div className={styles.leader_block}>
      <p className={styles.leader_text}>{index}</p>
      <p className={styles.leader_text}>{name}</p>
      <p className={styles.leader_text}>{time} sec</p>
    </div>
  );
};
