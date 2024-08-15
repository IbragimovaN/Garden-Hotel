import { Outlet } from "react-router-dom";
import { Header } from "../Header/Header";
import { Footer } from "../Footer/Footer";
import styles from "./Layout.module.css";

export const Layout = () => {
  return (
    <div className={styles.layout}>
      <Header />
      <div className={styles.outlet}>
        {" "}
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};
