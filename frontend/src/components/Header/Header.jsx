import { Container } from "../Container/Container";
import { Navbar, Logo } from "./Header-components";
import styles from "./Header.module.css";

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
