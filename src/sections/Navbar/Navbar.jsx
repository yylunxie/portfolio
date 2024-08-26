import styles from "./NavbarStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import burgerMenuLight from "../../assets/burger-menu-light.svg";
import burgerMenuDark from "../../assets/burger-menu-dark.svg";
import closeMenuLight from "../../assets/close-menu-light.svg";
import closeMenuDark from "../../assets/close-menu-dark.svg";
import { useState } from "react";

function Navbar({ theme, toggleTheme }) {
  const themeIcon = theme === "light" ? sun : moon;
  const burgerIcon = theme === "light" ? burgerMenuLight : burgerMenuDark;
  const closeIcon = theme === "light" ? closeMenuLight : closeMenuDark;

  const [menuOpen, setMenuOpen] = useState(false);
  return (
    <section id="navbar" className={styles.container}>
      <header className={styles.header}>
        <a href="/" className={styles.logo}>
          Allen
        </a>

        <nav className={styles.navbar}>
          <img
            src={menuOpen ? closeIcon : burgerIcon}
            alt="Burger menu icon"
            className={styles.menu}
            onClick={() => setMenuOpen(!menuOpen)}
          />
          <div className={menuOpen ? styles.open : styles.close}>
            <a href="#hero">Home</a>
            <a href="#projects">Projects</a>
            <a href="#skills">Skills</a>
            <a href="#contact">Contact</a>

            <img
              className={styles.colorMode}
              src={themeIcon}
              alt="color mode icon"
              onClick={toggleTheme}
            />
          </div>
        </nav>
      </header>
    </section>
  );
}

export default Navbar;
