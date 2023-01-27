import React from 'react';

function Sidebar() {
  {/* 메뉴 레이아웃 */}

  return(
    <aside className="sidebar">
      <article className="mypage">
        <div className="userImgContainer">
          <img src={process.env.PUBLIC_URL + "public-assets/icons/userImage.png"} alt="The user image" />
        </div>
        <div className="stateContainer">
          <img src={process.env.PUBLIC_URL + "public-assets/icons/state.png"} alt="A state image" />
        </div>

        <ul className="menuList">
          <li>
            <h3>보유쿠폰</h3>
            <span>0 장</span>
          </li>
          <li>
            <h3>적립금</h3>
            <span>0 원</span>
          </li>
          <li>
            <h3>tm포인트</h3>
            <span>0 pt</span>
          </li>
        </ul>
      </article>

      <article className="view">
        <div>
          최근 본 상품 배치
        </div>
      </article>

      <article className="category">
        <div className="grid">
          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/dress.png" alt="The dress button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/jacket.png" alt="The jacket button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/coat.png" alt="The coat button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/shirt.png" alt="The shirt button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/pullover.png" alt="The pullover button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/jeans.png" alt="The jeans button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/trouser.png" alt="The trouser button" />
          </button>

          <button type="button" className="categoryItem">
            <img src="/public-assets/icons/jogger.png" alt="The jogger button" />
          </button>
        </div>
      </article>

      <article className="theme">
        <div className="themeContainer">
          <h3>MBTI</h3>
          <div className="grid">
            <button type="button">
              <span>enfj</span>
            </button>
            <button type="button">
              <span>enfp</span>
            </button>
            <button type="button">
              <span>entj</span>
            </button>
            <button type="button">
              <span>entp</span>
            </button>
            <button type="button">
              <span>esfj</span>
            </button>
            <button type="button">
              <span>esfp</span>
            </button>
            <button type="button">
              <span>estj</span>
            </button>
            <button type="button">
              <span>estp</span>
            </button>
            <button type="button">
              <span>infj</span>
            </button>
            <button type="button">
              <span>infp</span>
            </button>
            <button type="button">
              <span>intj</span>
            </button>
            <button type="button">
              <span>intp</span>
            </button>
            <button type="button">
              <span>isfj</span>
            </button>
            <button type="button">
              <span>isfp</span>
            </button>
            <button type="button">
              <span>istj</span>
            </button>
            <button type="button">
              <span>istp</span>
            </button>
          </div>
        </div>
        
        <div className="themeContainer">
          <h3>상황룩</h3>
          <div className="grid">
            <button type="button">
              <span>데이트룩</span>
            </button>
            <button type="button">
              <span>면접프리패스룩</span>
            </button>
            <button type="button">
              <span>집순이룩</span>
            </button>
            <button type="button">
              <span>출근룩</span>
            </button>
            <button type="button">
              <span>캠퍼스룩</span>
            </button>
            <button type="button">
              <span>하객룩</span>
            </button>
          </div>
        </div>
      </article>
    </aside>
  );
}

export default Sidebar;