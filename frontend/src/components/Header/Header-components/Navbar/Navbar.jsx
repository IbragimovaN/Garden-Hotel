import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";

// isActive ? `${styles.link} ${styles.activeLink}` : styles.link;
const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
console.log(currentUser);

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
        <NavLink
          to={
            currentUser
              ? currentUser.role === "admin"
                ? "admin"
                : "account"
              : "authPage"
          }
          className={isActiveLink}
        >
          Личный кабинет
        </NavLink>
      </ul>
    </nav>
  );
};
