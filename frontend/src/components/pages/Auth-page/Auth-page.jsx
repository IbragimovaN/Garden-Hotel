import { Button } from "../../Button/Button";
import { Container } from "../../Container/Container";
import { Input } from "../../Input/Input";
import styles from "./Auth-page.module.css";

export const AuthPage = () => {
  return (
    <div className={styles.authPageWrapper}>
      <Container>
        <div className={styles.authPage}>
          <form className={styles.authForm}>
            <h2>Вход в личный кабинет</h2>
            <Input type="login" placeholder="логин" />
            <Input type="password" placeholder="пароль" />
            <Button>Войти</Button>
            <div>Зарегестироваться</div>
          </form>
        </div>
      </Container>
    </div>
  );
};
