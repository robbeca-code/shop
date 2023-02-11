import React from 'react';
import style from './Cart.module.css';
import cn from 'classnames';
import Sidebar from './Sidebar';
import { useDispatch, useSelector } from 'react-redux';
import { deleteCart } from '../store';
import { Link } from "react-router-dom";

function Cart() {
  const cart = useSelector(state => (state.cart));
  const dispatch = useDispatch();

  let result = 0;
  cart.forEach(element => {
    result += element.cost;
  });

  let shippingFee = 2500 * cart.length;

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
                <Link to={item.url} className={cn(style.cartHeader)}>
                  <div className={cn(style.imgContainer)}>
                    <img src={item.mainImg} alt={item.title} />
                  </div>
                  <h4>{item.title}</h4>
                </Link>
                
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
          <li className={cn(style.item)}>
            <span>상품금액</span>
            <span>
              <strong>{result.toLocaleString('ko-KR')}</strong>
              원
            </span>
          </li>
          <li className={cn(style.item)}>
            <span>할인금액</span>
            <span><strong>0</strong>원</span>
          </li>
          <li className={cn(style.item)}>
            <span>배송비</span>
            <span><strong>{shippingFee}</strong>원</span>
          </li>
          <li className={cn(style.resultItem)}>
            <span>결제예정금액</span>
            <span>
              <strong className={cn(style.result)}>{(result + shippingFee).toLocaleString('ko-KR')}</strong>
              원
            </span>
          </li>
        </ol>
      </div>
    </section>
  );
}

export default Cart;