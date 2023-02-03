import React from 'react';
import style from './Sidebar.module.css';
import cn from 'classnames';

function Sidebar() {
  {/* 메뉴 레이아웃 */}

  return(
    <aside className={cn(style.sidebar)}>
      <button type="button" className={cn(style.closeBtn)}>
        <img src="/public-assets/icons/closeBtn.png" alt="The close button" />
      </button>

      <section className={cn(style.grid)}>
        <article className={cn(style.container)}>
          <div className={cn(style.userImgContainer)}>
            <img src={process.env.PUBLIC_URL + "public-assets/icons/userImage.png"} alt="The user image" />
          </div>
          <div className={cn(style.stateContainer)}>
            <img src={process.env.PUBLIC_URL + "public-assets/icons/state.png"} alt="A state image" />
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

        <article className={cn(style.container, style.view)}>
        <span className={cn(style.title)}>최근 본 상품</span>
        </article>

        <article className={cn(style.container, style.category)}>
          <span className={cn(style.title)}>카테고리</span>
          <div className={cn(style.grid)}>
            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/dress.png" alt="The dress button" />
              <span>원피스</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/jacket.png" alt="The jacket button" />
              <span>자켓</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/coat.png" alt="The coat button" />
              <span>코트</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/shirt.png" alt="The shirt button" />
              <span>셔츠</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/pullover.png" alt="The pullover button" />
              <span>맨투맨</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/jeans.png" alt="The jeans button" />
              <span>청바지</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/trouser.png" alt="The trouser button" />
              <span>슬랙스</span>
            </button>

            <button type="button" className={cn(style.categoryItem)}>
              <img src="/public-assets/icons/jogger.png" alt="The jogger button" />
              <span>조거팬츠</span>
            </button>
          </div>
        </article>

        <article className={cn(style.container, style.theme)}>
          <div className={cn(style.themeContainer)}>
            <span className={cn(style.title)}>MBTI</span>
            <div className={cn(style.grid)}>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>enfj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>enfp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>entj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>entp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>esfj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>esfp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>estj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>estp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>infj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>infp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>intj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>intp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>isfj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>isfp</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>istj</span>
              </button>
              <button type="button" className={cn(style.themeItem, style.mbti)}>
                <span>istp</span>
              </button>
            </div>
          </div>
          
          <div className={cn(style.themeContainer)}>
            <span className={cn(style.title)}>상황룩</span>
            <div className={cn(style.grid)}>
              <button type="button" className={cn(style.themeItem)}>
                <span>데이트룩</span>
              </button>
              <button type="button" className={cn(style.themeItem)}>
                <span>면접룩</span>
              </button>
              <button type="button" className={cn(style.themeItem)}>
                <span>집콕룩</span>
              </button>
              <button type="button" className={cn(style.themeItem)}>
                <span>출근룩</span>
              </button>
              <button type="button" className={cn(style.themeItem)}>
                <span>캠퍼스룩</span>
              </button>
              <button type="button" className={cn(style.themeItem)}>
                <span>하객룩</span>
              </button>
            </div>
          </div>
        </article>
      </section>
    </aside>
  );
}

export default Sidebar;