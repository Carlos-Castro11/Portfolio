import React from "react";
import styles from "./About.module.css";
import perfil from "../../Assets/images/perfil.jpg";

// COMPONENTS
import Card from "./Card/Card";
import JsReactIcon from "../../Assets/icons/react.svg";
import Node from "../../Assets/icons/node.svg";
import Js from "../../Assets/icons/js.svg";

const About = () => {
  return (
    <section id="about" className={styles.sectionAbout}>
      <div className={`${styles.about} container`}>
        <div className={styles.person}>
          <img src={perfil} alt="" />
          <h3>Carlos Henrique Castro</h3>
          <p>Montes Claros - MG</p>
          <p>20 anos</p>
          <p>Engenharia de Software</p>
        </div>
        <div className={styles.skills}>
          <Card icon={Js} p={"I love JavaScript"} title={"JavaScript"} />
          <Card icon={Node} p={"I love Node"} title={"Node.Js"} />
          <Card icon={JsReactIcon} p={"I love React"} title={"React.Js"} />
        </div>
      </div>
    </section>
  );
};

export default About;
