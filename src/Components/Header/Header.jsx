import React from "react";
import styles from "./Header.module.css";
import useMedia from "../../Hooks/useMedia";

const Header = () => {
  const mobile = useMedia("(max-width: 550px)");
  const [mobileActive, setMobileActive] = React.useState(false);

  React.useEffect(() => {
    function handleMobile() {
      if (mobile === true) setMobileActive(false);
    }
    window.addEventListener("resize", handleMobile);
    return () => {
      window.removeEventListener("resize", handleMobile);
    };
  }, [mobile]);

  return (
    <header className={styles.header}>
      <div>
        <nav className={styles.headerItems}>
          {mobile ? (
            <button
              onClick={() => setMobileActive(!mobileActive)}
              className={`${styles.btnMobile} ${
                mobileActive && styles.btnMobileActive
              }`}
            ></button>
          ) : null}
          <ul
            className={`${mobile ? styles.navMobile : styles.nav} ${
              mobileActive && styles.navMobileActive
            }`}
          >
            <li className={`${mobile ? styles.navItemMobile : styles.navItem}`}>
              <a href="#home">Início</a>
            </li>
            <li className={`${mobile ? styles.navItemMobile : styles.navItem}`}>
              <a href="#about">Sobre</a>
            </li>
            <li className={`${mobile ? styles.navItemMobile : styles.navItem}`}>
              <a href="#home">Portfolio</a>
            </li>
            <li className={`${mobile ? styles.navItemMobile : styles.navItem}`}>
              <a href="#home">Contato</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
