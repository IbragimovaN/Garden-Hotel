import { yupResolver } from "@hookform/resolvers/yup";

import { useForm } from "react-hook-form";
import styles from "./Editing-account.module.css";
import { useNavigate } from "react-router-dom";
import { UserInfoInputs } from "../../../../User-info-inputs/User-info-inputs";
import { Button } from "../../../../common";
import { useDispatch, useSelector } from "react-redux";
import {
  CurrentUserSelector,
  editingInfoUser,
  isErrorAuthSelector,
} from "../../../../../store/usersSlice";
import { editingFormSchema } from "../../../../../Validate/editing-form-schema";
export const EditingAccount = () => {
  const currentUser = useSelector(CurrentUserSelector);
  const serverFormError = useSelector(isErrorAuthSelector);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    defaultValues: {
      firstName: currentUser.firstName,
      secondName: currentUser.secondName,
      birthday: new Date(currentUser.birthday).toISOString().split("T")[0],
      email: currentUser.email,
      gender: currentUser.gender,
    },
    resolver: yupResolver(editingFormSchema),
  });
  const navigate = useNavigate();
  const onSubmit = (data) => {
    console.log("submit click", currentUser._id);

    dispatch(editingInfoUser({ data, id: currentUser._id })).then((data) =>
      !data.payload.error ? navigate("../accountInfo") : ""
    );
  };

  const formError =
    errors?.firstName?.message ||
    errors?.secondName?.message ||
    errors?.birthday?.message ||
    errors?.email?.message;

  const errorMessage = formError || serverFormError;
  return (
    <div>
      <div className={styles.infoCard}>
        {/* <div>
          <img
            className={styles.img}
            src={`http://localhost:3004/${currentUser.avatar}`}
          />
          <Button>сменить аватар</Button>
        </div> */}
        <form onSubmit={handleSubmit(onSubmit)}>
          <UserInfoInputs register={register} errorMessage={errorMessage} />
          <Button type="submit">Обновить</Button>
        </form>
      </div>
    </div>
  );
};
