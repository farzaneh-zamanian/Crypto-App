import React, { Children } from "react";
import styles from "./Layout.module.css";

function Layout({ children }) {
  return (
    <>
      <header className={styles.header}>
        <h1>Crypto App</h1>
        <p>React js Project</p>
      </header>
      {children}
      <footer className={styles.footer}>
        <p>Developed By ZamanianZ</p>
      </footer>
    </>
  );
}

export default Layout;
