import styles from "../css_modules/navbar.module.css";
import Myname from "./Myname";
import NavbarComponents from "./NavbarComponents";
export default function Navbar() {
  return (
    <div className={styles.container}>
      <Myname />
      <NavbarComponents />
    </div>
  );
}
