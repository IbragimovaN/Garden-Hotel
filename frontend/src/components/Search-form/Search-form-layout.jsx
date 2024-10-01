import { useDispatch, useSelector } from "react-redux";
import { COMFORTS_CHECKLIST } from "../../constants";
import { Button } from "../common/Button/Button";
import styles from "./Search-form-layout.module.css";
import { fetchRooms } from "../../store/roomsSlice";
import { ComfortsChecklist } from "../forms/Comforts-checklist/Comforts-checklist";
import { SearchFormDates } from "../forms/Search-form-dates/Search-form-dates";

import { useState } from "react";
import {
  adultCountSelector,
  childrenCountSelector,
} from "../../store/counterSlice";
import { GuestCountLayout } from "../Guest-count-layout/Guest-count-layout";

export const SearchFormLayout = ({ fromBookingPage }) => {
  const [checkListFilter, setChecklistFilter] = useState(COMFORTS_CHECKLIST);
  const adultCount = useSelector(adultCountSelector);
  const childrenCount = useSelector(childrenCountSelector);
  const dispatch = useDispatch();

  const onChageComfortsList = (id, checked) => {
    const copyList = checkListFilter.map((item) => {
      if (item.name === id) {
        return { ...item, checked: checked };
      }
      return item;
    });
    console.log(copyList);
    setChecklistFilter(copyList);
  };

  const onSubmitSearchRoom = () => {
    let objComforts = { maxAdult: adultCount, maxChildren: childrenCount };
    checkListFilter.map((item) => {
      if (item.checked) {
        objComforts[item.name] = true;
      }
    });
    console.log(objComforts);
    dispatch(fetchRooms(objComforts));
  };
  return (
    <div className={styles.searchFormLayout}>
      <h3>Найдем подходящий номер</h3>
      <SearchFormDates />
      <GuestCountLayout />
      {fromBookingPage && (
        <ComfortsChecklist
          checkListFilter={checkListFilter}
          onChageComfortsList={onChageComfortsList}
        />
      )}
      <Button type="submit" onClick={onSubmitSearchRoom}>
        Найти номер
      </Button>
    </div>
  );
};
