import Navbar from "./components/Navbar";
import styles from "./css_modules/app.module.css";
import Greet from "./components/Greet";
import Paragraph from "./components/Paragraph";
function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Greet></Greet>
      <Paragraph></Paragraph>
    </div>
  );
}

export default App;
