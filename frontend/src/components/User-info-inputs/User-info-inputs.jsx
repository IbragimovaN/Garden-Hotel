import { useDispatch } from "react-redux";
import Input from "../common/Input/Input";
import styles from "./User-infi-inputs.module.css";
import { deleteServerError } from "../../store/usersSlice";
import { GenderChoiceInputs } from "../common";
export const UserInfoInputs = ({ register, errorMessage }) => {
  const dispatch = useDispatch();

  return (
    <>
      <div>
        {errorMessage && <div className={styles.error}>{errorMessage}</div>}
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
      <GenderChoiceInputs register={register} />
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
    </>
  );
};
