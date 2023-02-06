import React from 'react';
import style from './Sidebar.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { setNavMenu } from '../store';

function Sidebar() {
  const login = useSelector(state => state.login.login);
  const navMenu = useSelector(state => state.navMenu);
  const dispatch = useDispatch();

  if(!navMenu) {
    return null;
  }
  else {
    return(
      <aside className={cn(style.sidebar)}>
        <button type="button" className={cn(style.closeBtn)} onClick={() => {
          dispatch(setNavMenu())
        }}>
          <img src="/public-assets/icons/closeBtn.png" alt="The close button" />
        </button>
  
        <section className={cn(style.grid)}>
          {
            !login
            ? <HideMyPage />
            : <ShowMyPage />
          }
  
          <article className={cn(style.container, style.view)}>
            <span className={cn(style.title)}>최근 본 상품</span>
          </article>
  
          <article className={cn(style.container, style.category)}>
            <span className={cn(style.title)}>카테고리</span>
            <div className={cn(style.grid)}>
              <Link to="/shop/dress" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/dress.png" alt="The dress button" />
                <span>원피스</span>
              </Link>
  
              <Link to="/shop/jacket" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/jacket.png" alt="The jacket button" />
                <span>자켓</span>
              </Link>
  
              <Link to="/shop/coat" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/coat.png" alt="The coat button" />
                <span>코트</span>
              </Link>
  
              <Link to="/shop/shirt" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/shirt.png" alt="The shirt button" />
                <span>셔츠</span>
              </Link>
  
              <Link to="/shop/pullover" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/pullover.png" alt="The pullover button" />
                <span>맨투맨</span>
              </Link>
  
              <Link to="/shop/jeans" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/jeans.png" alt="The jeans button" />
                <span>청바지</span>
              </Link>
  
              <Link to="/shop/trouser" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/trouser.png" alt="The trouser button" />
                <span>슬랙스</span>
              </Link>
  
              <Link to="/shop/jogger" className={cn(style.categoryItem)}>
                <img src="/public-assets/icons/jogger.png" alt="The jogger button" />
                <span>조거팬츠</span>
              </Link>
            </div>
          </article>
  
          <article className={cn(style.container, style.theme)}>
            <div className={cn(style.themeContainer)}>
              <span className={cn(style.title)}>MBTI</span>
              <div className={cn(style.grid)}>
                <Link to="/shop/enfj" className={cn(style.themeItem, style.mbti)}>
                  <span>enfj</span>
                </Link>
                <Link to="/shop/enfp" className={cn(style.themeItem, style.mbti)}>
                  <span>enfp</span>
                </Link>
                <Link to="/shop/entj" className={cn(style.themeItem, style.mbti)}>
                  <span>entj</span>
                </Link>
                <Link to="/shop/entp" className={cn(style.themeItem, style.mbti)}>
                  <span>entp</span>
                </Link>
                <Link to="/shop/esfj" className={cn(style.themeItem, style.mbti)}>
                  <span>esfj</span>
                </Link>
                <Link to="/shop/esfp" className={cn(style.themeItem, style.mbti)}>
                  <span>esfp</span>
                </Link>
                <Link to="/shop/estj" className={cn(style.themeItem, style.mbti)}>
                  <span>estj</span>
                </Link>
                <Link to="/shop/estp" className={cn(style.themeItem, style.mbti)}>
                  <span>estp</span>
                </Link>
                <Link to="/shop/infj" className={cn(style.themeItem, style.mbti)}>
                  <span>infj</span>
                </Link>
                <Link to="/shop/infp" className={cn(style.themeItem, style.mbti)}>
                  <span>infp</span>
                </Link>
                <Link to="/shop/intj" className={cn(style.themeItem, style.mbti)}>
                  <span>intj</span>
                </Link>
                <Link to="/shop/intp" className={cn(style.themeItem, style.mbti)}>
                  <span>intp</span>
                </Link>
                <Link to="/shop/isfj" className={cn(style.themeItem, style.mbti)}>
                  <span>isfj</span>
                </Link>
                <Link to="/shop/isfp" className={cn(style.themeItem, style.mbti)}>
                  <span>isfp</span>
                </Link>
                <Link to="/shop/istj" className={cn(style.themeItem, style.mbti)}>
                  <span>istj</span>
                </Link>
                <Link to="/shop/istp" className={cn(style.themeItem, style.mbti)}>
                  <span>istp</span>
                </Link>
              </div>
            </div>
            
            <div className={cn(style.themeContainer)}>
              <span className={cn(style.title)}>상황룩</span>
              <div className={cn(style.grid)}>
                <Link to="/shop/date" className={cn(style.themeItem)}>
                  <span>데이트룩</span>
                </Link>
                <Link to="/shop/interview" className={cn(style.themeItem)}>
                  <span>면접룩</span>
                </Link>
                <Link to="/shop/home" className={cn(style.themeItem)}>
                  <span>집콕룩</span>
                </Link>
                <Link to="/shop/work" className={cn(style.themeItem)}>
                  <span>출근룩</span>
                </Link>
                <Link to="/shop/campus" className={cn(style.themeItem)}>
                  <span>캠퍼스룩</span>
                </Link>
                <Link to="/shop/guest" className={cn(style.themeItem)}>
                  <span>하객룩</span>
                </Link>
              </div>
            </div>
          </article>
        </section>
      </aside>
    );
  }
}

function HideMyPage() {

  return(
    <article className={cn(style.container)}>
      <h1 className={cn(style.headerTitle)}>
        로그인 하고<br/>
        다양한 혜택을 받아보세요!
      </h1>
      <Link to="/login" className={cn(style.loginBtn)}>
        로그인
      </Link>
    </article>
  );
}

function ShowMyPage() {
  return(
    <article className={cn(style.container)}>
      <div className={cn(style.userImgContainer)}>
        <img src="/public-assets/icons/userImage.png" alt="The user image" />
      </div>
      <div className={cn(style.stateContainer)}>
        <img src="/public-assets/icons/state.png" alt="A state image" />
      </div>

      <ul className={cn(style.menuList)}>
        <li className={cn(style.menuItem)}>
          <strong>보유쿠폰</strong>
          <span>0 장</span>
        </li>
        <li className={cn(style.menuItem)}>
          <strong>적립금</strong>
          <span>0 원</span>
        </li>
        <li className={cn(style.menuItem)}>
          <strong>tm포인트</strong>
          <span>0 pt</span>
        </li>
      </ul>
    </article>
  );
}

export default Sidebar;