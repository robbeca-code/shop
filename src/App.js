import React, { useState } from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SelectCategory from './pages/SelectCategory';


function App() {
  let [isClick, setIsClick] = useState(false);

  return (
    <section className="relative">
      <header className="navContainer">
        <nav className="iconList">
          <button type="button" className="iconContainer">
            <img src={process.env.PUBLIC_URL + "/public-assets/icons/menu.png"} alt="A menu icon" />
          </button>

          <Link to="/" className="logo">
            <img src={process.env.PUBLIC_URL + "/public-assets/icons/logo.png"} alt="The Theme logo" />
          </Link>

          <ul className="sideMenu">
            <li className="login">
              <span href="/" >
                로그인
              </span>
            </li>
            <li>
              <Link to="/shop/dress" className="link">
                원피스
              </Link>
            </li>
            <li>
              <Link to="/shop/pullover" className="link">
                맨투맨
              </Link>
            </li>
            <li>
              <Link to="/shop/shirt" className="link">
                셔츠
              </Link>
            </li>
            <li>
              <Link to="/shop/entj" className="link">
                ENTJ룩
              </Link>
            </li>
            <li>
              <Link to="/shop/home" className="link">
                집콕룩
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/:id" element={<SelectCategory />} />
        <Route path="/shop/view/:id" element={<Detail />} />
      </Routes>
    </section>
    
  );
}

export default App;
