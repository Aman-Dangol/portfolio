import styles from "../css_modules/navbarcomponent.module.css";
export default function NavbarComponents() {
  return (
    <div className={styles.listContainer}>
      <li>Home</li>
      <li>About</li>
      <li>Services</li>
      <li>Peojects</li>
    </div>
  );
}
