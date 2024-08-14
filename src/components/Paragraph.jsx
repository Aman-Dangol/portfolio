import styles from "../css_modules/paragraph.module.css"
export default function Paragraph() {
  return (
    <p className={styles.container}>
      A young <span>learning</span> aspring
      developer with craze for front end and back-end web development.
    </p>
  );
}
