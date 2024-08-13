import styles from "../css_modules/greet.module.css";

export default function Greet() {
  return (
    <h2>
      Hi i am <span className={styles.name}>Aman Dangol</span>
    </h2>
  );
}
