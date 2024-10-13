import { COMFORTS_CHECKLIST } from "../../../constants";
import { InputCheckbox } from "../../common";
import styles from "./Comforts-checklist.module.css";

export const ComfortsChecklist = ({ onChageComfortsList }) => {
  return (
    <form className={styles.chexboxList}>
      <div>Удобства и условия</div>
      {COMFORTS_CHECKLIST.map((item) => (
        <InputCheckbox
          key={item.name}
          text={item.text}
          id={item.name}
          onChange={onChageComfortsList}
        />
      ))}
    </form>
  );
};
