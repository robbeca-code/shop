import React, { useState } from 'react';
import {dress} from './shop-data.js';

function Detail() {
  let item;
  if(dress.findIndex((d) => (d.id === 'd1')) > -1) {
    let idx = dress.findIndex((d) => (d.id === 'd1'));
    item = dress[idx];
  }

  let [mainImg, setMainImg] = useState(dress[0].mainImg[0].img);

  return (
    <section>
      <header>
        <div>
          <img src={mainImg} alt="img" />
        </div>
        <div>
          <h1>{item.title}</h1>
          <strong>{item.cost}</strong>
        </div>
      </header>

      <div>
        <div>
          <img src={item.mainImg[0].img} alt="img" onClick={() => (setMainImg(item.mainImg[0].img))} />
        </div>
        <div>
          <img src={item.mainImg[1].img} alt="img" onClick={() => (setMainImg(item.mainImg[1].img))} />
        </div>
        <div>
          <img src={item.mainImg[2].img} alt="img" onClick={() => (setMainImg(item.mainImg[2].img))} />
        </div>
      </div>

      <article>
        <div>
          <h3>Md Tip</h3>
          <pre>
            {item.content.md}
          </pre>
        </div>
        
        <div>
          <h3>Detail Tip</h3>
          <pre>
            {item.content.detail}
          </pre>
        </div>
        
        <div>
          <h3>Size Tip</h3>
          <pre>
            {item.content.size}
          </pre>
        </div>
        

        <div>
          <img src={item.images.wearing[0]} alt="img" />
        </div>
        <div>
          <img src={item.images.wearing[1]} alt="img" />
        </div>
      </article>
      <article>
        <div>
          <img src={item.images.detail} alt="img" />
        </div>
        <div>
          <img src={item.images.material} alt="img" />
        </div>
        <div>
          <img src={item.images.washing} alt="img" />
        </div>
      </article>
    </section>
  );
}

export default Detail;