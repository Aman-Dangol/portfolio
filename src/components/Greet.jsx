import styles from "../css_modules/greet.module.css";

export default function Greet() {
  return (
    <>
      <h2>
        Hi, I am <span className={styles.name}>Aman Dangol</span>
      </h2>
      <h3 className={styles.position}>
        WEB DEVELOPER
      </h3>
    </>
  );
}
