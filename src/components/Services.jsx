import styles from "../css_modules/app.module.css";
import Navbar from "./Navbar";
import { useLoaderData } from "react-router-dom";
export default function Services() {
  const data = useLoaderData();
  console.log(data);

  return (
    <div className={styles.container}>
      <Navbar hL={data}></Navbar>
    </div>
  );
}
