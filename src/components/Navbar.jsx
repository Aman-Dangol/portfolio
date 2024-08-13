import styles from "../css_modules/navbar.module.css";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <h1>Aman dangol</h1>
      <div className={styles.listContainer}>
        <li>Home</li>
        <li>About</li>
        <li>Services</li>
        <li>Peojects</li>
      </div>
    </div>
  );
}
