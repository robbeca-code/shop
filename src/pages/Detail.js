import React, { useState, useMemo, useEffect } from 'react';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data.js';
import style from './Detail.module.css';
import cn from 'classnames';

function Detail() {
  // let items = dress.filter((d) => d.mbti.indexOf('intp'));
  // let item;

  // if(dress.findIndex((d) => (d.mbti.indexOf('enfp'))) > -1) {
  //   let idx = dress.findIndex((d) => (d.mbti.indexOf('enfp')));
  //   item = dress[idx];
  // }

  const kind = [dress, jacket, coat, shirt, jeans, trouser, jogger, pullover];
  let item = '';
  let id = 'd1';

  useMemo(() => {
    kind.forEach(k => {
      if(k.findIndex(k => k.id === id) > -1) {
        item = k.find(k => k.id === id);
        console.log(item);
      }
    });
  }, [kind]);

  console.log(item);
  let [clickImg, setClickImg] = useState(0);
  let [mainImg, setMainImg] = useState(item.mainImg[0].img);

  useEffect(() => {
    switch(clickImg) {
      case 0:
        setMainImg(item.mainImg[0].img);
        console.log(mainImg);
        break;
      case 1:
        setMainImg(item.mainImg[1].img);
        console.log(mainImg);
        break;
      case 2:
        setMainImg(item.mainImg[2].img);
        break;
    }
  }, [clickImg]);

  let [tab, setTab] = useState(0);

  return (
    <section className={cn(style.container)}>
      <header className={cn(style.header)}>
        <div className={cn(style.headerLeft)}>
          <div className={cn(style.mainImgContainer)}>
            <img src={mainImg} alt="img" />
          </div>

          <ul className={cn(style.sideImgList)}>
            {
              item.mainImg.map((item, i) => {
                return(
                  <li className={cn(style.sideImgContainer)} onClick={() => setClickImg(i)} key={item.id}>
                    <img src={item.img} alt="img" />
                  </li>
                );
              })
            }
          </ul>
        </div>
        
        <div className={cn(style.headerRight)}>
          <h1>{item.title}</h1>
          <strong>{item.cost.concat('원')}</strong>
          <ul>
            <li>
              <span>배송</span>
              <span>특급배송</span>
            </li>
            <li>
              <span>판매자</span>
              <span>테마몰</span>
            </li>
            <li>
              <span>포장타입</span>
              <span>종이포장</span>
            </li>
            <li>
              <span>판매단위</span>
              <span>1벌</span>
            </li>
          </ul>
        </div>
      </header>

      <div>
        <button type="button" className={cn(style.tabBtn)} onClick={() => {setTab(0)}}>
          상품설명
        </button>
        <button type="button" className={cn(style.tabBtn)} onClick={() => {setTab(1)}}>
          상세설명
        </button>
        <button type="button" className={cn(style.tabBtn)} onClick={() => {setTab(2)}}>
          후기
        </button>
      </div>

      <TabPage tab={tab} item={item} />

    </section>
  );
}

function TabPage ({tab, item}) {
  switch(tab) {
    case 0:
      return(<DescribePage item={item} />);
    case 1:
      return(<PointPage item={item} />);
  }
}

function DescribePage({item}) {
  return(
    <article className={cn(style.describeContainer)}>
      <div className={cn(style.tipContainer)}>
        <h3>Md Tip</h3>
        <pre>
          {item.content.md}
        </pre>
      </div>
      
      <div className={cn(style.tipContainer)}>
        <h3>Detail Tip</h3>
        <pre>
          {item.content.detail}
        </pre>
      </div>
      
      <div className={cn(style.tipContainer)}>
        <h3>Size Tip</h3>
        <pre>
          {item.content.size}
        </pre>
      </div>
      

      <div className={cn(style.wearImgContainer)}>
        <img src={item.images.wearing[0]} alt="img" />
      </div>
      <div className={cn(style.wearImgContainer)}>
        <img src={item.images.wearing[1]} alt="img" />
      </div>
    </article>
  );
}

function PointPage({item}) {
  return(
    <article className={cn(style.pointContainer)}>
      <div className={cn(style.pointDContainer)}>
        <img src={item.images.detail} alt="img" />
      </div>
      <div className={cn(style.pointMContainer)}>
        <img src={item.images.material} alt="img" />
      </div>
      <div className={cn(style.pointWContainer)}>
        <img src={item.images.washing} alt="img" />
      </div>
    </article>
  );
}

export default Detail;