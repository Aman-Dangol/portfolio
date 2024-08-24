import styles from "../css_modules/navbarcomponent.module.css";
import { Link } from "react-router-dom";
export default function NavbarComponents({ highlight }) {
  return (
    <div className={styles.listContainer}>
      <li className={highlight == "home" ? styles.highlight : ""}>
        <Link
          to={{
            pathname: "/",
          }}
        >
          Home
        </Link>{" "}
      </li>
      <li className={highlight == "services" ? styles.highlight : ""}>
        <Link
          to={{
            pathname: "/services",
          }}
        >
          Services
        </Link>
      </li>
      <li className={highlight == "projects" ? styles.highlight : ""}>
        <a href="/projects">Projects</a>
      </li>
    </div>
  );
}
