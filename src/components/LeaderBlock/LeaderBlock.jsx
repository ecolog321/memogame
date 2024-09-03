import styles from "./leaderBlock.module.css";
import imgForce from "./images/force.svg";
import imgDif from "./images/difficult.svg";
import noForce from "./images/empty_force.svg";
import noDif from "./images/empty_difficult.svg";

export const LeaderBlock = ({ name, time, index, achiv }) => {
  return (
    <div className={styles.leader_block}>
      <p className={styles.leader_text}>{index}</p>
      <p className={styles.leader_text}>{name}</p>
      <div className={styles.achieves}>
        <img src={achiv[0] ? imgDif : noDif} alt="difficult" />
        <img src={achiv[1] ? imgForce : noForce} alt="force" />
      </div>
      <p className={styles.leader_text}>{time} sec</p>
    </div>
  );
};
