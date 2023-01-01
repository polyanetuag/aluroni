import MenuBoard from "components/MenuBoard";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import styles from "./Routes.module.css";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <MenuBoard />
        <header className={styles.header}>
          <div className={styles.header__text}> A casa do código e da massa</div>
        </header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
        </Routes>
      </Router>
    </main>
  );
}
