import React from 'react';
import style from './Category.module.css';
import cn from 'classnames';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import Sidebar from './Sidebar';
import { inputCart } from '../store';

function Category({data, id}) {
  const dispatch = useDispatch();
  
  return(
    <section className={cn(style.container)}>
      <aside>
        <Sidebar />
      </aside>

      <h1 className={cn(style.headerTitle)}>{id}</h1>
      
      <p className={cn(style.prodCount)}>{data.length + '개 상품'}</p>

      <div className={cn(style.prodList)}>
        {
          data.map(item => {
            return(
              <article className={cn(style.prodItem)} key={item.id}>
                <Link to={item.url} className="link">
                  <div className={cn(style.imgContainer)}>
                    <img src={item.mainImg[0].img} alt="The main image" />
                  </div>
                  <div className={cn(style.prodInfo)}>
                    <span className={cn(style.theme)}>
                      {item.theme[1]}
                    </span>
                    <h2 className={cn(style.prodTitle)}>
                      {item.title}
                    </h2>
                    <h4 className={cn(style.prodCost)}>
                      {item.cost.toLocaleString('ko-KR')}원
                    </h4>
                  </div>
                </Link>
                
                <button type="button" className={cn(style.cartBtn)} onClick={() => {
                  dispatch(inputCart({id: item.id, title: item.title, mainImg: item.mainImg[0].img, cost: item.cost}))
                }}>
                  <img src="/public-assets/icons/cartBtn.png" alt="The cart button" />
                </button>
              </article>
            );
          })
        }
      </div>
    </section>
  );
}

export default Category;