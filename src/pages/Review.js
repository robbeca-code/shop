import React, { useState } from "react";
import { useSelector } from 'react-redux';
import style from './Review.module.css';
import cn from 'classnames';
import Clock from 'react-live-clock';

function WriteReview({setReviewBtn, item}) {
  let [submitBtn, setSubmitBtn] = useState(false);
  let [tall, setTall] = useState('');
  let [weight, setWeight] = useState('');
  let [color, setColor] = useState('');
  let [size, setSize] = useState('');
  let [rate, setRate] = useState(5);
  let [content, setContent] = useState('');

  return(
    <section>
      {
        !submitBtn
        ? <article className={cn(style.container)}>
            <header className={cn(style.headerTitle)}>
              <div className={cn(style.imgContainer)}>
                <img src={item.mainImg[0].img} alt={item.title} />
              </div>
              <div className={cn(style.prodInfo)}>
                <h1>
                  {item.title.length > 20 
                  ? item.title.slice(0, 21).concat('...')
                  : item.title}
                </h1>
                <strong>{item.cost.concat('원')}</strong>
              </div>
              
              <button type="button" className={cn(style.closeBtn)} onClick={() => { setReviewBtn(false) }}>
                <img src="/public-assets/icons/reviewClose.png" alt="The close button" />
              </button>
            </header>

            <form className={cn(style.formStyle)}>
              <h2></h2>
              <div className={cn(style.userInfo)}>
                <input type="text" className={cn(style.inputStyle)} placeholder="키를 입력해주세요" onChange={(e) => {
                  setTall(e.target.value)
                }} />
                <input type="text" className={cn(style.inputStyle)} placeholder="몸무게를 입력해주세요" onChange={(e) => {
                  setWeight(e.target.value)
                }} />
              </div>

              <div className={cn(style.prodOpinion)}>
                <div className={cn(style.opinionItem)}>
                  <h3>색상 체크</h3>
                  <div className={cn(style.btnContainer)}>
                    <button type="button" className={
                      color === '연해요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setColor('연해요')
                    }}>연해요</button>

                    <button type="button" className={
                      color === '똑같아요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setColor('똑같아요')
                    }}>똑같아요</button>

                    <button type="button" className={
                      color === '진해요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setColor('진해요')
                    }}>진해요</button>
                  </div>
                </div>

                <div className={cn(style.opinionItem)}>
                  <h3>사이즈 체크</h3>
                  <div className={cn(style.btnContainer)}>
                    <button type="button" className={
                      size === '작아요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setSize('작아요')
                    }}>작아요</button>

                    <button type="button" className={
                      size === '잘맞아요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setSize('잘맞아요')
                    }}>잘맞아요</button>

                    <button type="button" className={
                      size === '커요'
                      ? cn(style.opinionBtn, style.click)
                      : cn(style.opinionBtn)
                    } onClick={() => {
                      setSize('커요')
                    }}>커요</button>
                  </div>
                </div>
              </div>

              <div className={cn(style.userRate)}>
                <span>상품 만족도</span>
                <div className={cn(style.rateContainer)}>
                  <button type="button" className={cn(style.rateBtn)} onClick={() => {
                    setRate(1)
                  }}>
                    <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
                  </button>

                  <button type="button" className={cn(style.rateBtn)} onClick={() => {
                    setRate(2)
                  }}>
                    {
                      rate > 1
                      ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
                      : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
                    }
                  </button>

                  <button type="button" className={cn(style.rateBtn)} onClick={() => {
                    setRate(3)
                  }}>
                    {
                      rate > 2
                      ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
                      : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
                    }
                  </button>

                  <button type="button" className={cn(style.rateBtn)} onClick={() => {
                    setRate(4)
                  }}>
                    {
                      rate > 3
                      ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
                      : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
                    }
                  </button>

                  <button type="button" className={cn(style.rateBtn)} onClick={() => {
                    setRate(5)
                  }}>
                    {
                      rate > 4
                      ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
                      : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
                    }
                  </button>
                </div>
              </div>

              <div className={cn(style.userReview)}>
                <textarea className={cn(style.textareaStyle)} placeholder="상품평을 입력해주세요" onChange={(e) => {
                  setContent(e.target.value)
                }} ></textarea>
              </div>

              <button type="button" className={cn(style.submitBtn)} onClick={() => {
                setSubmitBtn(true)
              }}>후기 작성하기</button>
            </form>
          </article>
        : <ShowReview tall={tall} weight={weight} color={color} size={size} rate={rate} content={content} />
      }
    </section>
  );
}

function ShowReview({tall, weight, color, size, rate, content}) {
  const userId = useSelector(state => state.login.id);

  return(
    <article className={cn(style.reviewContainer)}>
      <header className={cn(style.headerTitle)}>
        <div className={cn(style.userProfile)}>
          <div className={cn(style.imgContainer)}>
            <img src="/public-assets/icons/userImage.png" alt="The user image" />
          </div>
          <h3>{userId.length > 6 ? userId.slice(0, 7) : userId}</h3>
        </div>
        <ol className={cn(style.userInfo)}>
          <li className={cn(style.userInfoItem)}>
            <span>{tall}cm / </span>
          </li>
          <li className={cn(style.userInfoItem)}>
            <span>{weight}kg</span>
          </li>
        </ol>
      </header>
      <div className={cn(style.reviewInfo)}>
        <div className={cn(style.rateContainer)}>
          <div className={cn(style.rateImgContainer)}>
            <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
          </div>

          <div className={cn(style.rateImgContainer)}>
            {
              rate > 1
              ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
              : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
            }
          </div>

          <div className={cn(style.rateImgContainer)}>
            {
              rate > 2
              ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
              : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
            }
          </div>

          <div className={cn(style.rateImgContainer)}>
            {
              rate > 3
              ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
              : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
            }
          </div>

          <div className={cn(style.rateImgContainer)}>
            {
              rate > 4
              ? <img src="/public-assets/icons/clickStar.png" alt="Clicked star button" />
              : <img src="/public-assets/icons/star.png" alt="Unclicked star button" />
            }
          </div>
          <strong>{rate}</strong>
          <span>
            <Clock format={"MM.DD"} ticking={false} timezone={"Asia/Seoul"} />
          </span>
        </div>
        
        <ol className={cn(style.optionsContainer)}>
          <li className={cn(style.option)}>
            <span>색상 - </span>
            <strong>{color}</strong>
          </li>
          <li className={cn(style.option)}>
            <span>사이즈 - </span>
            <strong>{size}</strong>
          </li>
        </ol>

        <p className={cn(style.contentContainer)}>
          {content}
        </p>
      </div>
    </article>
  );
}

export default WriteReview;