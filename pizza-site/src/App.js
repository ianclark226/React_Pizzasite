import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import MenuPage from './pages/MenuPage';
import AboutPage from './pages/AboutPage';
import ContactPage from './pages/ContactPage';
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';

const App = () =>{
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/menu" element={<MenuPage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/contact" element={<ContactPage />} />
      </Routes>
      <Footer />
      </Router>
      
    </div>
  );
}

export default App;
