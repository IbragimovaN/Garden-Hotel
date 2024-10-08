import { Link } from "react-router-dom";
import { AccountPageLayout } from "../Account-page-layout/Account-page-layout";

export const Account = () => {
  return (
    <AccountPageLayout>
      <Link to="accountInfo">Профиль</Link>
      <Link to="myBooking">Мои бронирования</Link>
      <Link to="myFavourite">Понравилось</Link>
      <Link to="editingAccount">Редактировать профиль</Link>
    </AccountPageLayout>
  );
};
