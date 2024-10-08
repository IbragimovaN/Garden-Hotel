import { Button } from "../../common/Button/Button";
import { Container } from "../../Container/Container";
import Input from "../../common/Input/Input";
import styles from "./Auth-page.module.css";
import { H2 } from "../../common/H2/H2";
import { Link, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteServerError,
  isErrorAuthSelector,
  loginUser,
} from "../../../store/usersSlice";

import { authFormSchema } from "../../../Validate/auth-form-schema";

export const AuthPage = () => {
  const dispatch = useDispatch();
  const serverFormError = useSelector(isErrorAuthSelector);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
    resolver: yupResolver(authFormSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("submit click", data);
    dispatch(loginUser(data)).then((data) =>
      !data.payload.error ? navigate("../authPage") : ""
    );
  };

  const formError = errors?.email?.message || errors?.password?.message;

  const errorMessage = formError || serverFormError;

  return (
    <div className={styles.authPageWrapper}>
      <Container>
        <div className={styles.authPage}>
          <form className={styles.authForm} onSubmit={handleSubmit(onSubmit)}>
            <H2>Вход в личный кабинет</H2>
            <div>
              {errorMessage && (
                <div className={styles.error}>{errorMessage}</div>
              )}
            </div>
            <Input
              type="email"
              placeholder="email"
              {...register("email", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Input
              type="password"
              placeholder="пароль"
              {...register("password", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Button type="submit">Войти</Button>
            <Link to="../registrationPage">Зарегестироваться</Link>
          </form>
        </div>
      </Container>
    </div>
  );
};
