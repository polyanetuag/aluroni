import DefaultPage from "components/DefaultPage";
import { Footer } from "components/Footer";
import MenuBoard from "components/MenuBoard";
import About from "pages/About";
import Menu from "pages/Menu";
import NotFound from "pages/NotFound";
import Plate from "pages/Plate";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";

export default function AppRouter() {
  return (
    <main className='container'>
      <Router>
        <MenuBoard />
        <Routes>
          <Route path='/' element={<DefaultPage/>}>
            <Route index element={<Home />} />
            <Route path='cardapio' element={<Menu />}/>
            <Route path='sobre' element={<About />}/>
          </Route>
            <Route path="*" element={<NotFound/>}/>
            <Route path="prato/:id" element={<Plate/>}/>
      </Routes>
      <Footer />
      </Router>
    </main>
  );
}
