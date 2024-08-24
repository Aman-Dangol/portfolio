import Navbar from "./components/Navbar";
import styles from "./css_modules/app.module.css";
import Greet from "./components/Greet";
import Paragraph from "./components/Paragraph";
import Socials from "./components/Socials";
import { useLoaderData } from "react-router-dom";
function App() {
  const data = useLoaderData();
  return (
    <div className={styles.container}>
      <Navbar hL={data} />
      <Greet></Greet>
      <Paragraph></Paragraph>
      <Socials></Socials>
    </div>
  );
}

export default App;
