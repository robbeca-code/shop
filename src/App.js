import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';


function App() {
  let [isClick, setIsClick] = useState(false);

  return (
    <section className="relative">
      <article className="container">
        <header className="navContainer">
          <nav className="iconList">
            <button type="button" className="iconContainer">
              <img src={process.env.PUBLIC_URL + "/public-assets/icons/menu.png"} alt="A menu icon" />
            </button>

            <button type="button" className="logo"><img src={process.env.PUBLIC_URL + "/public-assets/icons/menu.png"} /></button>

            <ul className="sideMenu">
              <li className="login">
                <span href="/" >
                  로그인
                </span>
              </li>
              <li>
                <span href="/" >
                  아우터
                </span>
              </li>
              <li>
                <span href="/" >
                  원피스
                </span>
              </li>
              <li>
                <span href="/" >
                  맨투맨
                </span>
              </li>
              <li>
                <span href="/" >
                  셔츠
                </span>
              </li>
              <li>
                <span href="/" >
                  팬츠
                </span>
              </li>
            </ul>
          </nav>
        </header>
      </article>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop/view/d0" element={<Detail />} />
      </Routes>
    </section>
    
  );
}

export default App;
