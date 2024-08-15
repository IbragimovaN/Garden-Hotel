import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// isActive ? `${styles.link} ${styles.activeLink}` : styles.link;

export const isActiveLink = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;
export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <ul className={styles.list}>
        {" "}
        <NavLink to="/" className={isActiveLink}>
          Главная
        </NavLink>
        <NavLink to="booking" className={isActiveLink}>
          Бронирование
        </NavLink>
        <NavLink to="about" className={isActiveLink}>
          О нас
        </NavLink>
        <NavLink to="contacts" className={isActiveLink}>
          Контакты
        </NavLink>
        <NavLink to="admin" className={isActiveLink}>
          Личный кабинет
        </NavLink>
      </ul>
    </nav>
  );
};
