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

import { useNavigate } from "react-router-dom";

import { UserInfoInputs } from "../../User-info-inputs/User-info-inputs";
import { regFormSchema } from "../../../Validate/reg-form-schema";

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
      gender: "другое",
    },
    resolver: yupResolver(regFormSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("submit click", data);

    dispatch(registrationUser(data)).then((data) =>
      !data.payload.error ? navigate("../authPage") : ""
    );
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
            <UserInfoInputs register={register} errorMessage={errorMessage} />
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
