import * as yup from "yup";

export const regFormSchema = yup.object().shape({
  firstName: yup
    .string()
    .required("Введите имя")
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Неверный формат, допускаются только буквы")
    .min(2, "Не верный формат. Минимум 2 символа.")
    .max(30, "Не верный формат. Максимум 30 символов"),
  secondName: yup
    .string()
    .required("Введите фамилию")
    .matches(/^[a-zA-Zа-яА-ЯёЁ]+$/, "Неверный формат, допускаются только буквы")
    .min(2, "Не верный формат. Минимум 2 символа.")
    .max(30, "Не верный формат. Максимум 30 символов"),
  email: yup
    .string()
    .required("Введите почту")
    .matches(
      /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      "Неверный формат"
    )
    .min(3, "Не верный формат. Минимум 3 символа.")
    .max(50, "Не верный формат. Максимум 50 символов"),
  birthday: yup
    .date()
    .required("Введите дату рождения")
    .max(new Date(), "Дата рождения не может быть сегодня или в будущем"),

  password: yup
    .string()
    .required("Заполните пароль")
    .matches(
      /^[\w#%]+$/,
      "Неверно заполнен пароль, допускаются буквыб цифры и знаки № %"
    )
    .min(6, "Не верный пароль. Минимум 6 символа.")
    .max(30, "Не верный пароль. Максимум 30 символов"),
  passcheck: yup
    .string()
    .required("Заполните повтор пароля")
    .oneOf([yup.ref("password"), null], "Повтор пароля не совпадает"),
});
