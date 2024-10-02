import React from 'react';
import { useSelector} from 'react-redux';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import TaskPage from './components/TaskPage';
import LandingPage from './components/LandingPage';
import ThemeToggle from './components/ThemeToggle';
import About from './components/About';
import styled from 'styled-components';
import { FaBars } from 'react-icons/fa';
import { useState } from 'react';
import './App.css';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background: ${(props) =>
    props.theme === 'light'
      ? 'linear-gradient(90deg, rgba(5,0,55,1) 0%, rgba(155,195,188,20) 100%)'
      : 'linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(55,0,55,1) 100%)'};
  color: white;

  & .navbar-logo {
    font-size: 1.5rem;
    font-weight: bold;
    color: white;
    text-decoration: none;
  }

  & .navbar-links {
    list-style: none;
    display: flex;
    align-items: center;

    & li {
      margin-left: 1.5rem;

      & a {
        color: white;
        text-decoration: none;
        font-size: 1rem;

        &:hover {
          text-decoration: underline;
        }
      }
    }

    @media (max-width: 768px) {
      display: ${(props) => (props.isOpen ? 'flex' : 'none')};
      flex-direction: column;
      align-items: flex-start;
      width: 100%;
      background-color: ${(props) =>
        props.theme === 'light' ? '#fff' : '#333'};
      padding: 1rem;
      position: absolute;
      top: 60px;
      left: 0;
      z-index: 1;

      & li {
        margin: 0.5rem 0;

        & a {
          color: ${(props) =>
            props.theme === 'light' ? '#333' : 'white'};
        }
      }
    }
  }

  & .menu-toggle {
    display: none;

    @media (max-width: 768px) {
      display: block;
      cursor: pointer;
    }
  }
`;

const AppContainer = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`;
const App = () => {
  const theme = useSelector((state) => state.theme.theme);
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AppContainer className={`app app-${theme}`}>
      <Router>
        <Navbar theme={theme} isOpen={isOpen}>
          <div className="navbar-logo">
            <Link to="/"><span>Astra</span></Link>
          </div>
          <FaBars className="menu-toggle" onClick={toggleMenu} />
          <ul className="navbar-links">
            <li><Link to="/" onClick={toggleMenu}>Home</Link></li>
            <li><Link to="/about" onClick={toggleMenu}>About</Link></li>
            <li><Link to="/contact" onClick={toggleMenu}>Contact Us</Link></li>
            <li><ThemeToggle theme={theme} /></li>
          </ul>
        </Navbar>
        <Routes>
        <Route path="/" element={<LandingPage theme={theme} />} />
          <Route path="/services" element={<div>Services Page</div>} />
          <Route path="/about" element={<About theme={theme}/>} />
          <Route path="/contact" element={<ContactUs theme={theme} />} />
          <Route path="/tasks" element={<TaskPage theme={theme} />} />
        </Routes>
      </Router>
      </AppContainer>
  );
};

export default App;
