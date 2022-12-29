import MenuBoard from 'components/MenuBoard';
import Menu from 'pages/Menu';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import Home from './pages/Home';

export default function AppRouter() {
  return (
    <Router>
      <MenuBoard />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
        </Routes>
    </Router>
  );
}