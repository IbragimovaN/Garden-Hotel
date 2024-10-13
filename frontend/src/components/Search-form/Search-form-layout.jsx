import { useDispatch, useSelector } from "react-redux";
import { Button } from "../common/Button/Button";
import styles from "./Search-form-layout.module.css";
import { fetchRooms } from "../../store/roomsSlice";
import { ComfortsChecklist } from "../forms/Comforts-checklist/Comforts-checklist";
import { SearchFormDates } from "../forms/Search-form-dates/Search-form-dates";
import { useArrayState } from "../../hooks/useArrayState";

import { useState } from "react";
import {
  adultCountSelector,
  childrenCountSelector,
} from "../../store/counterSlice";
import { GuestCountLayout } from "../Guest-count-layout/Guest-count-layout";

export const SearchFormLayout = ({ fromBookingPage }) => {
  const adultCount = useSelector(adultCountSelector);
  const childrenCount = useSelector(childrenCountSelector);
  const dispatch = useDispatch();

  const [checkListFilter, { add, remove }] = useArrayState();

  const onChageComfortsList = (id, checked) => {
    if (checked) {
      add(id);
    } else {
      remove(id);
    }
  };

  const onSubmitSearchRoom = () => {
    console.log(checkListFilter);

    let objComforts = { maxAdult: adultCount, maxChildren: childrenCount };
    checkListFilter.map((item) => {
      objComforts[item] = true;
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
        <ComfortsChecklist onChageComfortsList={onChageComfortsList} />
      )}
      <Button type="submit" onClick={onSubmitSearchRoom}>
        Найти номер
      </Button>
    </div>
  );
};
