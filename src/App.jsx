import Navbar from "./components/Navbar";
import styles from "./css_modules/app.module.css";
import Greet from "./components/Greet";
function App() {
  return (
    <div className={styles.container}>
      <Navbar />
      <Greet></Greet>
    </div>
  );
}

export default App;
