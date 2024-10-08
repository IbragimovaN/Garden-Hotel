import { useSelector } from "react-redux";
import { Container } from "../Container/Container";
import { Navbar, Logo } from "./Header-components";
import styles from "./Header.module.css";
import { CurrentUserSelector } from "../../store/usersSlice";

export const Header = () => {
  return (
    <header className={styles.headerWrapper}>
      <Container>
        <div className={styles.header}>
          <Logo />
          <Navbar />
        </div>
      </Container>
    </header>
  );
};
