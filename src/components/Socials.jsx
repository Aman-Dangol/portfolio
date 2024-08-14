import styles from "../css_modules/socials.module.css";

export default function Socials() {
  return (
    <div className={styles.container}>
      <p>Find Me on:</p>
      <div className={styles.socials}>
        <i className="fa-brands fa-linkedin fa-xl" target="_blank">
          <a href="https://www.linkedin.com/in/aman-dangol-b260ba259/"></a>
        </i>
        <i class="fa-brands fa-square-github fa-xl">
          <a href="https://github.com/Aman-Dangol"></a>
        </i>
      </div>
    </div>
  );
}
