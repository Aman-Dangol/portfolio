import styles from "../css_modules/socials.module.css";
import { Link } from "react-router-dom";
export default function Socials() {
  return (
    <div className={styles.container}>
      <p>Find Me on:</p>
      <div className={styles.socials}>
        <a
          href="https://www.linkedin.com/in/aman-dangol-b260ba259/"
          target="_blank"
        >
          {" "}
          <i className="fa-brands fa-linkedin fa-2xl" target="_blank"></i>
        </a>

        <a href="https://github.com/Aman-Dangol" target="_blank">
          <i class="fa-brands fa-square-github fa-2xl"></i>
        </a>
      </div>
    </div>
  );
}
