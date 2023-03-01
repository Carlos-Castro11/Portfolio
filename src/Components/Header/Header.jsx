import React from "react";
import styles from "./Header.module.css";
import useMedia from "../../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 550px)");

  return (
    <header className={styles.header}>
      <nav>
        {mobile ? <button className={styles.btnMobile}></button> : null}
        <ul className={`${mobile ? styles.navMobile : styles.nav}`}>
          <li className={styles.navItem}>
            <a href="#home">Home</a>
          </li>
          <li className={styles.navItem}>
            <a href="#home">Sobre</a>
          </li>
          <li className={styles.navItem}>
            <a href="#home">Portfolio</a>
          </li>
          <li className={styles.navItem}>
            <a href="#home">Contato</a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
