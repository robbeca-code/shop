import React, { useState, useMemo, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data.js';
import style from './Detail.module.css';
import cn from 'classnames';
import Sidebar from './Sidebar.js';
import WriteReview from './Review.js';
import { inputCart } from '../store.js';

function Detail() {
  const dispatch = useDispatch();
  const kind = [dress, jacket, coat, shirt, jeans, trouser, jogger, pullover];
  const userId = useSelector(state => (state.login.id));
  let item = '';
  let {id} = useParams();
  let [tab, setTab] = useState(0);
  let [clickImg, setClickImg] = useState(0);

  // 현재 상품 정보 가져오기
  useMemo(() => {
    kind.forEach(k => {
      if(k.findIndex(k => k.id === id) > -1) {
        item = k.find(k => k.id === id);
      }
    });
  }, [kind]);

  // 현재 상품 정보 localStorage에 중복없이 저장하기
  useMemo(() => {
    let recent = JSON.parse(localStorage.getItem('recent'));
    recent.push({img: item.mainImg[0].img, url: item.url});
    let result = [...new Set(recent)];
    localStorage.setItem('recent', JSON.stringify(result));
  }, [kind]);

  // 메인 이미지를 클릭했을 때 보여줄 이미지 전달하기
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

  // 처음 메인 이미지에 보여줄 이미지
  let [mainImg, setMainImg] = useState(item.mainImg[0].img);

  // 장바구니 버튼 눌렀을 때 실행될 내용
  const clickCartBtn = (item) => {
    if(userId === '') {
      alert('로그인을 해주세요.');
      return;
    }
    else {
      dispatch(inputCart({id: item.id, url: item.url, title: item.title, mainImg: item.mainImg[0].img, cost: item.cost}));
    }
  }

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
          
          <strong>{item.cost.toLocaleString('ko-KR')}원</strong>

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
            <strong>{item.cost.toLocaleString('ko-KR')}</strong>
            <span>원</span>
          </div>

          <div className={cn(style.btnContainer)}>
            <button type="button" className={cn(style.likeBtn)}>
              <img src="/public-assets/icons/likeBtn.png" alt="The Like button" />
            </button>
            <button type="button" className={cn(style.saveBtn)} onClick={() => {clickCartBtn(item)}}>
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
    case 2:
      return(<ReviewPage item={item} />);
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

function ReviewPage({item}) {
  const userId = useSelector(state => (state.login.id));
  let [reviewBtn, setReviewBtn] = useState(false);

  const clickReviewBtn = () => {
    if(userId === '') {
      alert('로그인을 해주세요.');
      return;
    }
    else {
      setReviewBtn(true);
    }
  }

  return(
    <section className={cn(style.reviewContainer)}>
      {
        !reviewBtn
        ? <article className={cn(style.nonReview)}>
            <div className={cn(style.imgContainer)}>
              <img src="/public-assets/icons/exclamationMark.png" alt="" />
            </div>
            <h1 className={cn(style.headerTitle)}>
              따뜻한 첫 후기를 기다리고 있어요.
            </h1>
            <button type="button" className={cn(style.reviewBtn)} onClick={clickReviewBtn}>
                후기 작성하기
            </button>
          </article>
        : <WriteReview setReviewBtn={setReviewBtn} item={item} />
      }
    </section>
  );
}

export default Detail;