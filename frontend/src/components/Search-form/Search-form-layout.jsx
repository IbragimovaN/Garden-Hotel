import { AGE_GROUP } from "../../constants";
import { Button } from "../common/Button/Button";
import styles from "./Search-form-layout.module.css";
import { GuestCount, SearchFormDates } from "./Serch-form-components";

export const SearchFormLayout = ({ children }) => {
  return (
    <div className={styles.searchFormLayout}>
      <h3>Найдем подходящий номер</h3>
      <SearchFormDates />
      <GuestCount ageGroup={AGE_GROUP.ADULT} />
      <GuestCount ageGroup={AGE_GROUP.CHILDREN} />
      {children}
      <Button type="submit">Найти номер</Button>
    </div>
  );
};
