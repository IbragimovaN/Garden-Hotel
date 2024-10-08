import Input from "../Input/Input";

export const GenderChoiceInputs = ({ register }) => {
  return (
    <>
      <label htmlFor="field-man">
        <Input
          {...register("gender")}
          type="radio"
          value="мужчина"
          id="field-man"
        />
        Мужчина
      </label>
      <label htmlFor="field-woman">
        <Input
          {...register("gender")}
          type="radio"
          value="женщина"
          id="field-woman"
        />
        Женщина
      </label>
      <label htmlFor="field-other">
        <Input
          {...register("gender")}
          type="radio"
          value="другое"
          id="field-other"
        />
        Другое
      </label>
    </>
  );
};
