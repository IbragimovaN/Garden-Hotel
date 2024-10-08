import { useSelector } from "react-redux";
import { H2 } from "../../../../common/H2/H2";
import styles from "./Account-info.module.css";
import { CurrentUserSelector } from "../../../../../store/usersSlice";
export const AccountInfo = () => {
  const currentUser = useSelector(CurrentUserSelector);
  console.log(currentUser.birthday);
  return (
    <div className={styles.accountInfo}>
      <H2>
        Страница пользователя {currentUser.secondName} {currentUser.firstName}{" "}
      </H2>
      <div className={styles.infoCard}>
        {" "}
        <img
          className={styles.img}
          src={`http://localhost:3004/${currentUser.avatar}`}
        />
        <div className={styles.infoWrapper}>
          {" "}
          <div>Имя: {currentUser.firstName}</div>
          <div>Фамилия: {currentUser.secondName}</div>
          <div>Пол: {currentUser.gender}</div>
          <div>
            Дата рождения:
            {currentUser.birthday.split("T")[0].split("-").reverse().join(".")}
          </div>
          <div>Почта: {currentUser.email}</div>
        </div>
      </div>
    </div>
  );
};
