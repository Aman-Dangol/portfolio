import styles from "../css_modules/navbarcomponent.module.css";
export default function NavbarComponents() {
  return (
    <div className={styles.listContainer}>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/services" target="_blank">
          Services
        </a>
      </li>
      <li>
        <a href="/projects">Projects</a>
      </li>
    </div>
  );
}
