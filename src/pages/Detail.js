import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data.js';
import style from './Detail.module.css';
import cn from 'classnames';
import Sidebar from './Sidebar.js';

function Detail() {
  // let items = dress.filter((d) => d.mbti.indexOf('intp'));
  // let item;

  // if(dress.findIndex((d) => (d.mbti.indexOf('enfp'))) > -1) {
  //   let idx = dress.findIndex((d) => (d.mbti.indexOf('enfp')));
  //   item = dress[idx];
  // }

  const kind = [dress, jacket, coat, shirt, jeans, trouser, jogger, pullover];
  let item = '';
  let {id} = useParams();
  let [tab, setTab] = useState(0);
  let [clickImg, setClickImg] = useState(0);

  useMemo(() => {
    kind.forEach(k => {
      if(k.findIndex(k => k.id === id) > -1) {
        item = k.find(k => k.id === id);
      }
    });
  }, [kind]);

  let [mainImg, setMainImg] = useState(item.mainImg[0].img);

  useEffect(() => {
    switch(clickImg) {
      case 0:
        setMainImg(item.mainImg[0].img);
        break;
      case 1:
        setMainImg(item.mainImg[1].img);
        break;
      case 2:
        setMainImg(item.mainImg[2].img);
        break;
    }
  }, [clickImg]);

  return (
    <section className={cn(style.container)}>
      <aside>
        <Sidebar />
      </aside>
      <header className={cn(style.header)}>
        <div className={cn(style.headerLeft)}>
          <div className={cn(style.mainImgContainer)}>
            <img src={mainImg} alt="img" />
          </div>

          <ul className={cn(style.sideImgList)}>
            {
              item.mainImg.map((item, i) => {
                return(
                  <li onClick={() => setClickImg(i)} key={item.id}
                  className={mainImg === item.img ? cn(style.sideImgContainer, style.click) : cn(style.sideImgContainer)} >
                    <img src={item.img} alt="img" />
                  </li>
                );
              })
            }
          </ul>
        </div>
        
        <div className={cn(style.headerRight)}>
          <h1>{item.title}</h1>
          <ul className={cn(style.themeList)}>
          {
            item.theme.map((item, i) => {
              return(
                <li key={i}>{item}</li>
              );
            })
          }
          </ul>
          
          <strong>{item.cost.concat('원')}</strong>

          <dl className={cn(style.infoItem)}>
            <dt>배송</dt>
            <dd>특급배송</dd>
          </dl>
          <dl className={cn(style.infoItem)}>
            <dt>판매자</dt>
            <dd>테마몰</dd>
          </dl>
          <dl className={cn(style.infoItem)}>
            <dt>포장타입</dt>
            <dd>종이포장</dd>
          </dl>
          <dl className={cn(style.infoItem)}>
            <dt>판매단위</dt>
            <dd>1벌</dd>
          </dl>

          <div className={cn(style.finalCostContainer)}>
            <span>총 상품금액: </span>
            <strong>{item.cost}</strong>
            <span>원</span>
          </div>

          <div className={cn(style.btnContainer)}>
            <button type="button" className={cn(style.likeBtn)}>
              <img src="/public-assets/icons/likeBtn.png" alt="The Like button" />
            </button>
            <button type="button" className={cn(style.saveBtn)}>
              장바구니 담기
            </button>
          </div>
        </div>
      </header>

      <div className={cn(style.tabBtnContainer)}>
        <button type="button" onClick={() => {setTab(0)}} 
        className={tab === 0 ? cn(style.tabBtn, style.click) : cn(style.tabBtn)}>
          상품설명
        </button>
        <button type="button" onClick={() => {setTab(1)}}
        className={tab === 1 ? cn(style.tabBtn, style.click) : cn(style.tabBtn)}>
          상세설명
        </button>
        <button type="button" onClick={() => {setTab(2)}}
        className={tab === 2 ? cn(style.tabBtn, style.click) : cn(style.tabBtn)}>
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
    <article className={cn(style.prodInfoContainer)}>
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
      

      <div className={cn(style.wearingImgContainer)}>
        <img src={item.images.wearing[0]} alt="img" />
      </div>
      <div className={cn(style.wearingImgContainer)}>
        <img src={item.images.wearing[1]} alt="img" />
      </div>
    </article>
  );
}

function PointPage({item}) {
  return(
    <article className={cn(style.pointContainer)}>
      <div className={cn(style.detail)}>
        <img src={item.images.detail} alt="img" />
      </div>
      <div className={cn(style.material)}>
        <img src={item.images.material} alt="img" />
      </div>
      <div className={cn(style.washing)}>
        <img src={item.images.washing} alt="img" />
      </div>
    </article>
  );
}

export default Detail;