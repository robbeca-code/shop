import React, { useState } from 'react';
import style from './Cart.module.css';
import cn from 'classnames';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../store';

function Cart() {
  const cart = useSelector(state => (state.cart));
  const dispatch = useDispatch();
  let reset = [];
  reset.length = cart.length;
  reset.fill(true);
  let resultCost = 0;
  cart.forEach(item => {
    resultCost += item.cost;
  })
  let [click, setClick] = useState(reset);
  let [shippingFee, setShippingFee] = useState(2500 * cart.length);
  let [result, setResult] = useState(resultCost);

  const handleClickBtn = (index) => {
    let copyClick = [...click];
    copyClick[index] = !copyClick[index];
    setClick(copyClick);

    handleResultCost();
  }

  const handleResultCost = () => {
    let cost = 0;
    cart.forEach((item, i) => {
      if(!click[i]) {
        cost += cart[i].cost;
      }
    });
    setResult(cost);
  }

  return(
    <section className={cn(style.container)}>
      <aside>
        <Sidebar />
      </aside>

      <h1 className={cn(style.headerTitle)}>장바구니</h1>

      <div className={cn(style.content)}>
        <div className={cn(style.grid)}>
        {
          cart.map((item, index) => {
            return(
              <article className={cn(style.cartContainer)} key={index}>
                <button type="button" className={cn(style.clickBtn)} onClick={() => {handleClickBtn(index)}}>
                  {
                    !click[index]
                    ? <img src="/public-assets/icons/checkBtn.png" alt="Unclicked check button" />
                    : <img src="/public-assets/icons/clickCheckBtn.png" alt="Clicked check button" />
                  }
                </button>
                <header className={cn(style.cartHedaer)}>
                  <div className={cn(style.imgContainer)}>
                    <img src={item.mainImg} alt={item.title} />
                  </div>
                  <h3>{item.title}</h3>
                </header>
                
                <span>1벌</span>

                <strong>{item.cost.toLocaleString('ko-KR')}원</strong>

                <button type="button" className={cn(style.deleteBtn)} onClick={() => {
                  dispatch(deleteCart(item.id))
                }}>
                  <img src="/public-assets/icons/deleteBtn.png" alt="The delete button" />
                </button>
              </article>
            );
          })
        }
        </div>

        <ol className={cn(style.resultContainer)}>
          <li>
            <span>상품금액</span>
            <strong>{result.toLocaleString('ko-KR')}</strong>원
          </li>
          <li>
            <span>할인금액</span>
            <strong>0</strong>원
          </li>
          <li>
            <span>배송비</span>
            <strong>{shippingFee}</strong>원
          </li>
          <li className={cn(style.result)}>
            <span>결제예정금액</span>
            <strong>{(result + shippingFee).toLocaleString('ko-KR')}</strong>원
          </li>
        </ol>
      </div>


    </section>
  );
}

export default Cart;