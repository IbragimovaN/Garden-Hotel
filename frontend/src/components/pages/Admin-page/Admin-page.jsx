import { NavLink, Outlet } from "react-router-dom";

import { AccountPageLayout } from "../Account-page-layout/Account-page-layout";

export const AdminPage = () => {
  return (
    <AccountPageLayout>
      <NavLink to="roomList">Редактирование номеров</NavLink>
      <NavLink to="bookingList">Бронирования</NavLink>
    </AccountPageLayout>
  );
};
