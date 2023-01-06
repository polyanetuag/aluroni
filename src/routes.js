import DefaultPage from "components/DefaultPage";
import { Footer } from "components/Footer";
import MenuBoard from "components/MenuBoard";
import About from "pages/About";
import Menu from "pages/Menu";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <main>
      <Router>
        <MenuBoard />
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />}/>
            <Route path='sobre' element={<About />}/>
          </Route>
      </Routes>
      <Footer />
      </Router>
    </main>
  );
}
