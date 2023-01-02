import DefaultPage from "components/DefaultPage";
import MenuBoard from "components/MenuBoard";
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
          </Route>
      </Routes>
      </Router>
    </main>
  );
}
