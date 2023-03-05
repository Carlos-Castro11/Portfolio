import React from "react";
import styles from "./Hero.module.css";
// TYPE
import { Cursor, useTypewriter } from "react-simple-typewriter";

const Hero = () => {
  // const title = React.useRef();

  const [text] = useTypewriter({
    words: ["JavaScript!", "React!", "Node!", "Pizza!"],
    loop: true,
    delaySpeed: 2000,
  });

  // React.useEffect(() => {
  //   function handleScroll() {
  //     let value = window.scrollY;
  //     title.current.style.marginBottom = value * 2 + "px";
  //   }

  //   window.addEventListener("scroll", handleScroll);
  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  return (
    <div className={`${styles.hero} `}>
      <h1>
        Olá, meu nome é Carlos. <br />
        Sou apaixonado por <br />
        <span style={{ color: "#fb1" }}>{text}</span>
        <Cursor cursorColor="#fb1" />
      </h1>
    </div>
  );
};

export default Hero;
