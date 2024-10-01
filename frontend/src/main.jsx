import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import {
  AboutPage,
  AuthPage,
  BookingPage,
  ContactsPage,
  Layout,
  MainPage,
  AdminPage,
} from "./components/index.js";
import {
  BookingList,
  RoomsList,
} from "./components/pages/Admin-page/Admin-page-components/index.js";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import { RegistrationPage } from "./components/pages/Registration-page/Registration-page.jsx";
import { Account } from "./components/pages/Account/Account.jsx";
import { AccountInfo } from "./components/pages/Account/Account-components/Account-info/Account-info.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "", element: <MainPage /> },
      { path: "booking", element: <BookingPage /> },
      { path: "about", element: <AboutPage /> },
      { path: "contacts", element: <ContactsPage /> },
      { path: "authPage", element: <AuthPage /> },
      { path: "registrationPage", element: <RegistrationPage /> },
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          { path: "roomList", element: <RoomsList /> },

          { path: "bookingList", element: <BookingList /> },
        ],
      },
      {
        path: "account",
        element: <Account />,
        children: [
          { path: "myBooking", element: <div>Мои бронирования</div> },

          { path: "accountInfo", element: <AccountInfo /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);
