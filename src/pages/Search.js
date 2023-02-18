import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import style from './Search.module.css';
import cn from 'classnames';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data';

function Search() {
  let kind = [];
  let [keyword, setKeyword] = useState('');
  let [result, setResult] = useState(null);

  dress.forEach(v => kind.push(v));
  jacket.forEach(v => kind.push(v));
  coat.forEach(v => kind.push(v));
  shirt.forEach(v => kind.push(v));
  jeans.forEach(v => kind.push(v));
  trouser.forEach(v => kind.push(v));
  jogger.forEach(v => kind.push(v));
  pullover.forEach(v => kind.push(v));

  const handleInput = (v) => {
    setKeyword(v);
    const reset = null;
    setResult(reset);
  }

  const handleSearch = () => {
    setResult(kind.filter(k => k.title.includes(keyword)));
  }

  return(
    <article className={cn(style.container)}>
      <header className={cn(style.inputContainer)}>
        <input className={cn(style.search)} placeholder="검색어를 입력해주세요." onChange={(e) => {handleInput(e.target.value)}} />
        <button type="button" className={cn(style.searchBtn)} onClick={() => {
          handleSearch()
        }}>
          <img src="/public-assets/icons/searchBtn.png" alt="The search button" />
        </button>
      </header>
      
      {
        result === null
        ? <h3 className={cn(style.infoTitle)}>결과가 없습니다.</h3>
        : <article className={cn(style.resultList)}><ShowResult result={result} /></article>
      }
    </article>
  );
}

function ShowResult({result}) {
  if(result.length === 0) {
    return(<h3 className={cn(style.infoTitle)}>결과가 없습니다.</h3>);
  }
  else {
    return(
      result.map((item) => {
        return(
          <Link to={item.url} className={cn(style.item)} key={item.id}>
            <div className={cn(style.imgContainer)}>
              <img src={item.mainImg[0].img} alt={item.title} />
            </div>
            <div className={cn(style.itemInfo)}>
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
}

export default Search;