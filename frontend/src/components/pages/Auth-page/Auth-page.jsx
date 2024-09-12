import { Button } from "../../common/Button/Button";
import { Container } from "../../Container/Container";
import { Input } from "../../common/Input/Input";
import styles from "./Auth-page.module.css";
import { H2 } from "../../common/H2/H2";

export const AuthPage = () => {
  return (
    <div className={styles.authPageWrapper}>
      <Container>
        <div className={styles.authPage}>
          <form className={styles.authForm}>
            <H2>Вход в личный кабинет</H2>
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
