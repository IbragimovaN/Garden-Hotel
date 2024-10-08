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
  EditingAccount,
  Account,
  AccountInfo,
  RegistrationPage,
  BookingList,
  RoomsList,
} from "./components/index.js";

import { Provider } from "react-redux";
import { store } from "./store/store.js";

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
          { path: "editingAccount", element: <EditingAccount /> },

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
