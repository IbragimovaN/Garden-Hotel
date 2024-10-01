import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { Container } from "../../Container/Container";
import styles from "./Account-page-layout.module.css";
import { useDispatch } from "react-redux";
import { logout } from "../../../store/usersSlice";
export const AccountPageLayout = ({ children }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const onClickLogout = () => {
    dispatch(logout()).then(() => navigate("../authPage"));
  };
  return (
    <Container>
      <div className={styles.accountPage}>
        {" "}
        <div className={styles.accountPage_col}>
          {" "}
          <h2>Личный кабинет</h2>
          <ul className={styles.navList}>
            <>
              {children} <button onClick={onClickLogout}>Выйти</button>
            </>
          </ul>
        </div>
        <Outlet />
      </div>
    </Container>
  );
};
