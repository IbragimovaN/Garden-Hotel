import { Container } from "../../Container/Container";
import { SearchFormLayout } from "../../Search-form/Search-form-layout";
import styles from "./Main-page.module.css";

export const MainPage = () => {
  return (
    <main className={styles.mainPage}>
      <Container>
        {" "}
        <SearchFormLayout />
      </Container>
    </main>
  );
};
