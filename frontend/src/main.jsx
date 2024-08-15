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
  AddRoom,
  BookingList,
  RoomsList,
} from "./components/pages/Admin-page/Admin-page-components/index.js";
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
      {
        path: "admin",
        element: <AdminPage />,
        children: [
          { path: "roomList", element: <RoomsList /> },
          { path: "addRoom", element: <AddRoom /> },
          { path: "bookingList", element: <BookingList /> },
        ],
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
