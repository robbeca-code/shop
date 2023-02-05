import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setNavMenu, setLogout } from './store';
import './App.css';
import Detail from './pages/Detail';
import Home from './pages/Home';
import SelectCategory from './pages/SelectCategory';
import Login from './pages/Login';


function App() {
  const login = useSelector(state => state.login.login);
  let dispatch = useDispatch();

  return (
    <section className="relative">
      <header className="navContainer">
        <nav className="navList">
          <Link to="/" className="navLogo">
            <img src={process.env.PUBLIC_URL + "/public-assets/icons/logo.png"} alt="The Theme logo" />
          </Link>

          <div className="navItem">
            <button type="button" className="navMenu" onClick={() => {
              dispatch(setNavMenu())
            }}>
              <img src={process.env.PUBLIC_URL + "/public-assets/icons/menu.png"} alt="A menu icon" />
            </button>

            <ul className="navSide">
              <li className="login">
                {
                  !login
                  ? <Link to="/login" className="link loginBtn">로그인</Link>
                  : <button type="button" className="loginBtn" onClick={() => {
                      dispatch(setLogout())
                    }}>로그아웃</button>
                }
                
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
          </div>
          
        </nav>
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/shop/:id" element={<SelectCategory />} />
        <Route path="/shop/view/:id" element={<Detail />} />
      </Routes>
    </section>
    
  );
}

export default App;
