import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import cn from 'classnames';
import style from './Home.module.css';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data';

function Home() {

  return(
    <section className={cn(style.grid)}>
      <article className={cn(style.slide)}>
      </article>

      <article className={cn(style.recommend)}>
        <h1>고객님<span className={cn(style.point)}>의 취향저격 상품</span></h1>
        <div className={cn(style.grid)}>
          <UserRecommend />
        </div>
      </article>

      <aside>{/*배너넣기*/}</aside>

      <article className={cn(style.recommend)}>
        <h1>상황별 <span className={cn(style.point)}>스타일 추천</span></h1>
        <div className={cn(style.campusRecommend)}>
          <div className={cn(style.header)}>
            <p>
              <strong className={cn(style.title)}>캠퍼스룩 추천</strong>
            교복을 벗고 처음으로 만날 새 학기, 신입생에게는 모든 것이 낯설고 새로운 날!<br/>
            지옥철을 뚫고 맞을 1교시 수업, 어떻게 활용해야 할지 1도 모르는 공강, <br/>
            학식 점심 메뉴 선택 등 다양하고 신선한 고민이 있을 거예요.<br/>
            그중, 교복만 입던 신입생에게는 매일 아침 옷 고르는 것만큼 힘든 일은 없을 거예요.<br/>
            옷장 앞에만 서면 입을 옷이 없는 것 같은 신입생을 위해! 활용하면 좋을 여러가지 스타일을 추천할게요~
            </p>
            <div className={cn(style.imgContainer)}>
              <img src="/public-assets/theme/cam.png" alt="Recommend campus" />
            </div>
          </div>

          <div className={cn(style.grid)}>
            <ThemeRecommend kind1={dress} kind2={jacket} kind3={jogger} kind4={pullover} title={'캠퍼스룩'}/>
          </div>
          <Link to="/campus" className="link">추천 상품 더보기</Link>
        </div>

        <div className={cn(style.dateRecommend)}>
          <div className={cn(style.header)}>
            <div className={cn(style.imgContainer)}>
              <img src="/public-assets/theme/cam.png" alt="Recommend campus" />
            </div>
            <p>
            <strong className={cn(style.title)}>데이트룩 추천</strong>
            소중한 연인과 데이트를 할 때 신경써서 입고 싶은 날!<br/>
            항상 비슷한 옷만 입고 나가서 새로운 느낌으로 다시 시작하고 싶은 날!<br/>
            여기서 여러가지 종류의 옷들로 다양한 룩을 연출할 수 있어요.<br/>
            고객님의 취향과 잘 맞는 옷을 찾아 연인과 행복한 시간을 만들어가길 바랄게요♥
            </p>
          </div>

          <div className={cn(style.grid)}>
            <ThemeRecommend kind1={dress} kind2={shirt} kind3={trouser} kind4={pullover} title={'데이트룩'}/>
          </div>

          <Link to="/date" className="link">추천 상품 더보기</Link>
        </div>

        <div className={cn(style.guestRecommend)}>
          <div className={cn(style.header)}>
            <div className={cn(style.imgContainer)}>
              <img src="/public-assets/theme/cam.png" alt="Recommend campus" />
            </div>
            <p>
            <strong className={cn(style.title)}>하객룩 추천</strong>
            코로나가 서서히 끝을 보이면서 늘어난 지인들의 결혼식!<br/>
            결혼식 때 뭘 입어야 할지 감이 안온다면!<br/>
            고급스러운 퀄리티에 다양한 옷 디자인을 소개할게요.<br/>
            예쁘고 격식있는 룩을 찾는다면 분명! 만족할 거예요~
            </p>
          </div>

          <div className={cn(style.grid)}>
            <ThemeRecommend kind1={dress} kind2={coat} kind3={jacket} kind4={shirt} title={'하객룩'}/>
          </div>
          <Link to="/guest" className="link">추천 상품 더보기</Link>
        </div>
      </article>
    </section>
  );
}

function UserRecommend() {
  let list = [];

  // 사용자가 로그인할 때 선택한 mbti가 변경될 때마다 1번씩 실행
  // useEffect(() => {
  //   list.push(dress.find(d => d.mbti.indexOf('enfp') > -1))
  //   list.push(jacket.find(j => j.mbti.indexOf('enfp') > -1))
  //   list.push(coat.find(c => c.mbti.indexOf('enfp') > -1))
  //   list.push(shirt.find(d => d.mbti.indexOf('enfp') > -1))
  //   list.push(jeans.find(b => b.mbti.indexOf('enfp') > -1))
  //   list.push(trouser.find(t => t.mbti.indexOf('enfp') > -1))
  //   list.push(jogger.find(g => g.mbti.indexOf('enfp') > -1))
  //   list.push(pullover.find(p => p.mbti.indexOf('enfp') > -1))
  // });

  list.push(dress.find(d => d.mbti.indexOf('enfp') > -1));
  list.push(jacket.find(j => j.mbti.indexOf('enfp') > -1));
  list.push(coat.find(c => c.mbti.indexOf('enfp') > -1));
  list.push(shirt.find(d => d.mbti.indexOf('enfp') > -1));
  list.push(jeans.find(b => b.mbti.indexOf('enfp') > -1));
  list.push(trouser.find(t => t.mbti.indexOf('enfp') > -1));
  list.push(jogger.find(g => g.mbti.indexOf('enfp') > -1));
  list.push(pullover.find(p => p.mbti.indexOf('enfp') > -1));
  
  return(
    list.map((item) => {
      return(
        <article className={cn(style.cardContainer)} key={item.id}>
          <div className={cn(style.imgContainer)}>
            <img src={item.mainImg[0].img} alt={item.title} />
          </div>
          <div className={cn(style.cardInfo)}>
            <span>{item.title}</span>
            <h4>{item.cost.concat('원')}</h4>
          </div>
        </article>
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
        <article className={cn(style.cardContainer)} key={item.id}>
          <div className={cn(style.imgContainer)}>
            <img src={item.mainImg[0].img} alt={item.title} />
          </div>
          <div className={cn(style.cardInfo)}>
            <span>{item.title}</span>
            <h4>{item.cost.concat('원')}</h4>
          </div>
        </article>
      );
    })
  );
}

export default Home;