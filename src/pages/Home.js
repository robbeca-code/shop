import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import cn from 'classnames';
import style from './Home.module.css';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data';
import Sidebar from './Sidebar';

function Home() {
  const userMbti = useSelector(state => state.login.mbti);
  let url = `/shop/${userMbti}`;

  return(
    <section className={cn(style.container)}>
      <aside>
        <Sidebar />
      </aside>
      <Slide />

      <article className={cn(style.recommend)}>
        <h1>고객님<span className={cn(style.point)}>의 취향저격 상품</span></h1>
        <div className={cn(style.grid)}>
          <UserRecommend mbti={userMbti} />
        </div>
        <Link to={url} className={cn(style.moreBtn)}>내가 좋아할 상품</Link>
      </article>

      <aside className={cn(style.banner)}>
        <img src="/public-assets/event/banner1.png" alt="The banner1 image" />
        <img src="/public-assets/event/banner2.png" alt="The banner2 image" />
      </aside>

      <article className={cn(style.recommend)}>
        <h1>상황별 <span className={cn(style.point)}>스타일 추천</span></h1>
        <div className={cn(style.header)}>
          <p className={cn(style.themeInfo)}>
            <strong className={cn(style.title)}>🏫 캠퍼스룩 추천</strong>
          교복을 벗고 처음으로 만날 새 학기, 신입생에게는 모든 것이 낯설고 새로운 날!<br/><br/>
          교복만 입던 신입생에게는 매일 아침 옷 고르는 것만큼 힘든 일은 없을 거예요.<br/>
          옷장 앞에만 서면 입을 옷이 없는 것 같은 신입생을 위해! 활용하면 좋을 여러가지 스타일을 추천할게요~
          </p>
          <div className={cn(style.imgContainer)}>
            <img src="/public-assets/theme/cam.png" alt="Recommend campus" />
          </div>
        </div>

        <div className={cn(style.grid)}>
          <ThemeRecommend kind1={dress} kind2={jacket} kind3={jogger} kind4={pullover} title={'캠퍼스룩'}/>
        </div>
        <Link to="/shop/campus" className={cn(style.moreBtn)}>추천 상품 더보기</Link>

        <div className={cn(style.header)}>
          <div className={cn(style.imgContainer)}>
            <img src="/public-assets/theme/date.png" alt="Recommend Date" />
          </div>
          <p className={cn(style.themeInfo)}>
            <strong className={cn(style.title)}>💓 데이트룩 추천</strong>
            소중한 연인과 데이트를 할 때 신경써서 입고 싶은 날!<br/><br/>
            여기서 여러가지 종류의 옷들로 다양한 룩을 연출할 수 있어요.<br/>
            고객님의 취향과 잘 맞는 옷을 찾아 연인과 행복한 시간을 만들어가길 바랄게요♥
          </p>
        </div>

        <div className={cn(style.grid)}>
          <ThemeRecommend kind1={dress} kind2={shirt} kind3={trouser} kind4={pullover} title={'데이트룩'}/>
        </div>
        <Link to="/shop/date" className={cn(style.moreBtn)}>추천 상품 더보기</Link>

        <div className={cn(style.header)}>
          <p className={cn(style.themeInfo)}>
            <strong className={cn(style.title)}>💐 하객룩 추천</strong>
            코로나가 서서히 끝을 보이면서 늘어난 지인들의 결혼식!<br/><br/>
            결혼식 때 뭘 입어야 할지 감이 안온다면!<br/>
            고급스러운 퀄리티에 다양한 옷 디자인을 소개할게요.<br/>
            예쁘고 격식있는 룩을 찾는다면 분명! 만족할 거예요~
          </p>
          <div className={cn(style.imgContainer)}>
            <img src="/public-assets/theme/guset.png" alt="Recommend guest" />
          </div>
        </div>

        <div className={cn(style.grid)}>
          <ThemeRecommend kind1={dress} kind2={coat} kind3={jacket} kind4={shirt} title={'하객룩'}/>
        </div>
        <Link to="/shop/guest" className={cn(style.moreBtn)}>추천 상품 더보기</Link>
      </article>
    </section>
  );
}

function Slide() {
  let [counter, setCounter] = useState(0);

  const clickPrevBtn = () => {
    setCounter(counter-1);
    carousel();
  };

  const clickNextBtn = () => {
    setCounter(counter+1);
    carousel();
  };

  const carousel = () => {
    if(counter < 0) {
      setCounter(1);
    } else if (counter == 1) {
      setCounter(0);
    }
  };
  
  return(
    <article className={cn(style.slideContainer)}>
      <button type="button" className={cn(style.slideBtn, style.prevBtn)} onClick={clickPrevBtn}>
        <img src="/public-assets/icons/prevBtn.png" alt="The previous button" />
      </button>

      <button type="button" className={cn(style.slideBtn, style.nextBtn)} onClick={clickNextBtn}>
        <img src="/public-assets/icons/nextBtn.png" alt="The next button" />
      </button>

      <div className={cn(style.slideImgContainer)} style={{
        left: "0%",
        transform: `translateX(-${counter * 100}%)`
      }}>
        <img src="/public-assets/event/slide1.png" alt="The event1 image" />
      </div>
      
      <div className={cn(style.slideImgContainer)} style={{
        left: "100%",
        transform: `translateX(-${counter * 100}%)`
      }}>
        <img src="/public-assets/event/slide2.png" alt="The event2 image" className={cn(style.event2)} />
      </div>
    </article>
  );
}

function UserRecommend({mbti}) {
  let list = [];

  useMemo(() => {
    list.push(dress.find(d => d.mbti.indexOf(mbti) > -1));
    list.push(jacket.find(j => j.mbti.indexOf(mbti) > -1));
    list.push(coat.find(c => c.mbti.indexOf(mbti) > -1));
    list.push(shirt.find(d => d.mbti.indexOf(mbti) > -1));
    list.push(jeans.find(b => b.mbti.indexOf(mbti) > -1));
    list.push(trouser.find(t => t.mbti.indexOf(mbti) > -1));
    list.push(jogger.find(g => g.mbti.indexOf(mbti) > -1));
    list.push(pullover.find(p => p.mbti.indexOf(mbti) > -1));
  }, [mbti]);
  
  return(
    list.map((item) => {
      if(item === undefined) {
        return null;
      }
      return(
        <Link to={item.url} className={cn(style.cardContainer)} key={item.id}>
          <div className={cn(style.imgContainer)}>
            <img src={item.mainImg[0].img} alt={item.title} />
          </div>
          <div className={cn(style.cardInfo)}>
            <span className={cn(style.kindInfo)}>
              {item.theme[1]}
            </span>
            <span>{item.title}</span>
            <h4>{item.cost.toLocaleString('ko-KR')}원</h4>
          </div>
        </Link>
      );
    })
  );
}

function ThemeRecommend({kind1, kind2, kind3, kind4, title}) {
  let list = [];
  list.push(kind1.find(k => k.theme.indexOf(title) > -1));
  list.push(kind2.find(k => k.theme.indexOf(title) > -1));
  list.push(kind3.find(k => k.theme.indexOf(title) > -1));
  list.push(kind4.find(k => k.theme.indexOf(title) > -1));
  
  return(
    list.map((item) => {
      return(
        <Link to={item.url} className={cn(style.cardContainer)} key={item.id}>
          <div className={cn(style.imgContainer)}>
            <img src={item.mainImg[0].img} alt={item.title} />
          </div>
          <div className={cn(style.cardInfo)}>
            <span className={cn(style.kindInfo)}>
              {title}
            </span>
            <span>{item.title}</span>
            <h4>{item.cost.toLocaleString('ko-KR')}원</h4>
          </div>
        </Link>
      );
    })
  );
}

export default Home;