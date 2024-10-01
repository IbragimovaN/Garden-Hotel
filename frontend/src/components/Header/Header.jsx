import { useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { Navbar, Logo } from "./Header-components";
import styles from "./Header.module.css";
import { CurrentUserSelector } from "../../store/usersSlice";

export const Header = () => {
  const currentUser = JSON.parse(sessionStorage.getItem("currentUser"));
  console.log(currentUser);
  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.header}>
          <Logo />
          <Navbar />
        </div>
        {currentUser && <div> пользователь {currentUser.firstName}</div>}
      </Container>
    </header>
  );
};
