import React from "react";
import styles from "./Banner.module.css";
// CLOUDS
import cloud1 from "../../Assets/images/cloud1.png";
import cloud2 from "../../Assets/images/cloud2.png";
import cloud3 from "../../Assets/images/cloud3.png";
import cloud4 from "../../Assets/images/cloud4.png";
import cloud5 from "../../Assets/images/cloud5.png";

const Banner = ({ children }) => {
  return (
    <div className={styles.banner}>
      {children}
      <div className={styles.clouds}>
        <img src={cloud1} alt="" style={{ "--i": 1 }} />
        <img src={cloud2} alt="" style={{ "--i": 2 }} />
        <img src={cloud3} alt="" style={{ "--i": 3 }} />
        <img src={cloud4} alt="" style={{ "--i": 4 }} />
        <img src={cloud5} alt="" style={{ "--i": 5 }} />
        <img src={cloud1} alt="" style={{ "--i": 10 }} />
        <img src={cloud2} alt="" style={{ "--i": 9 }} />
        <img src={cloud3} alt="" style={{ "--i": 8 }} />
        <img src={cloud4} alt="" style={{ "--i": 7 }} />
        <img src={cloud5} alt="" style={{ "--i": 6 }} />
      </div>
    </div>
  );
};

export default Banner;
