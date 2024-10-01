export const AGE_GROUP = {
  ADULT: "Взрослые",
  CHILDREN: "Дети",
};

export const TYPES_ROOM_GROUP = {
  STANDART: "Стандарт",
  SINGLE: "Одноместный",
  DOUBLE: "Двухместный",
  FAMILY: "Семейный",
  LUXE: "Люкс",
};

export const TABLE_HEAD = [
  "Номер",
  "Тип",
  "Цена",
  "Рейтинг",
  "Взрослые места",
  "Места для детей",
  "Удобства",
  "Фото",
  "Бронирования",
  "Управление",
];

export const COMFORTS_CHECKLIST = [
  { name: "hasWifi", checked: false, text: " Есть Wi-fi" },
  { name: "hasConditioner", checked: false, text: " Кондиционер" },
  {
    name: "hasWorkSpace",
    checked: false,
    text: " Рабочее пространство",
  },
  {
    name: "canSmoke",
    checked: false,
    text: " Можно курить",
  },
  {
    name: "canPets",
    checked: false,
    text: " Можно с животными",
  },
];

export const baseURL = "http://localhost:3004";
