import React from "react";
import styles from "./Card.module.css";

const Card = ({ icon, p, title }) => {
  return (
    <div className={styles.card}>
      <div className={`${styles.face} ${styles.face1}`}>
        <div className={styles.content}>
          <img src={icon} alt="" />
          <h3>{title}</h3>
        </div>
      </div>
      <div className={`${styles.face} ${styles.face2}`}>
        <div className={styles.content}>
          <p>{p}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
