import { NavLink } from "react-router-dom";
import styles from "./Navbar.module.css";
import { useSelector } from "react-redux";
import { CurrentUserSelector } from "../../../../store/usersSlice";

export const isActiveLink = ({ isActive }) =>
  isActive ? styles.activeLink : styles.link;

export const Navbar = () => {
  // const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));

  const currentUser = useSelector(CurrentUserSelector);
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
                : "account/accountInfo"
              : "authPage"
          }
          className={isActiveLink}
        >
          {currentUser ? "Личный кабинет" : "Вход/регистрация"}
        </NavLink>
      </ul>
    </nav>
  );
};
