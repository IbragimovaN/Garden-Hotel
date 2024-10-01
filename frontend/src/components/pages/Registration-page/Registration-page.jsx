import { Button } from "../../common/Button/Button";
import { Container } from "../../Container/Container";
import Input from "../../common/Input/Input";
import styles from "./Registration-page.module.css";
import { H2 } from "../../common/H2/H2";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import {
  deleteServerError,
  isErrorAuthSelector,
  registrationUser,
} from "../../../store/usersSlice";
import { useDispatch, useSelector } from "react-redux";
import { regFromSchema } from "./reg-form-schema";
import { useNavigate } from "react-router-dom";

export const RegistrationPage = () => {
  const dispatch = useDispatch();
  const serverFormError = useSelector(isErrorAuthSelector);
  console.log(serverFormError);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: "",
      secondName: "",
      birthday: new Date().toISOString().split("T")[0],
      email: "",
      password: "",
      passcheck: "",
    },
    resolver: yupResolver(regFromSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("submit click");
    dispatch(registrationUser(data)).then(() => navigate("../authPage"));
  };

  const formError =
    errors?.firstName?.message ||
    errors?.secondName?.message ||
    errors?.birthday?.message ||
    errors?.email?.message ||
    errors?.password?.message ||
    errors?.passcheck?.message;

  const errorMessage = formError || serverFormError;

  return (
    <div className={styles.registrationPageWrapper}>
      <Container>
        <div className={styles.regPage}>
          <form className={styles.regForm} onSubmit={handleSubmit(onSubmit)}>
            <H2>Страница регистрации</H2>
            <div>
              {errorMessage && (
                <div className={styles.error}>{errorMessage}</div>
              )}
            </div>
            <Input
              type="text"
              placeholder="Имя"
              {...register("firstName", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Input
              type="text"
              placeholder="Фамилия"
              {...register("secondName", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />

            <Input
              className={styles.input}
              type="date"
              placeholder="Дата рождения"
              {...register("birthday")}
            />
            <Input
              type="email"
              placeholder="Email"
              {...register("email", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Input
              type="password"
              placeholder="Пароль"
              {...register("password", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Input
              type="password"
              placeholder="Повторите пароль"
              {...register("passcheck", {
                onChange: () => dispatch(deleteServerError()),
              })}
            />
            <Button type="submit">Зарегестироваться</Button>
          </form>
        </div>
      </Container>
    </div>
  );
};
