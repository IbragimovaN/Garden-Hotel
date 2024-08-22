import { NavLink, Outlet } from "react-router-dom";

import { Container } from "../../Container/Container";
import styles from "./Admin-page.module.css";

export const AdminPage = () => {
  return (
    <Container>
      <div className={styles.adminPage}>
        {" "}
        <div className={styles.adminPage_col}>
          {" "}
          <h2>Личный кабинет админа</h2>
          <ul className={styles.navList}>
            {" "}
            <NavLink to="roomList">Редактирование номеров</NavLink>
            <NavLink to="bookingList">Бронирования</NavLink>
            <NavLink to="../authPage">Выйти</NavLink>
          </ul>
        </div>
        <Outlet />
      </div>
    </Container>
  );
};
