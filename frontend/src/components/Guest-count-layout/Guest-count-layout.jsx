import { GuestCount } from "../forms/Guests-count/Guest-count";
import {
  adultCountSelector,
  childrenCountSelector,
  decrementAdult,
  decrementChildren,
  incrementAdult,
  incrementChildren,
} from "../../store/counterSlice";
import { useSelector } from "react-redux";
import { AGE_GROUP } from "../../constants";
import styles from "./Guest-count-layout.module.css";

export const GuestCountLayout = () => {
  const adultCount = useSelector(adultCountSelector);
  const childrenCount = useSelector(childrenCountSelector);

  return (
    <div className={styles.layout}>
      <GuestCount
        ageGroup={AGE_GROUP.ADULT}
        count={adultCount}
        decrement={decrementAdult}
        increment={incrementAdult}
        defaultCount={1}
      />
      <GuestCount
        ageGroup={AGE_GROUP.CHILDREN}
        count={childrenCount}
        decrement={decrementChildren}
        increment={incrementChildren}
        defaultCount={0}
      />
    </div>
  );
};
