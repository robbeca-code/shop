import React from 'react';
import { useParams } from 'react-router-dom';
import {dress, jacket, coat, shirt, jeans, trouser, jogger, pullover} from './shop-data';
import Category from './Category';

function SelectCategory() {
  const {id} = useParams();
  const kind = [dress, jacket, coat, shirt, jeans, trouser, jogger, pullover];

  switch(id) {
    // 옷 종류 카테고리
    case 'dress':
      return(<Category data={dress} id={'원피스'} />);
    case 'jacket':
      return(<Category data={jacket} id={'자켓'} />);
    case 'coat':
      return(<Category data={coat} id={'코트'} />);
    case 'shirt':
      return(<Category data={shirt} id={'셔츠'} />);
    case 'jeans':
      return(<Category data={jeans} id={'청바지'} />);
    case 'trouser':
      return(<Category data={trouser} id={'슬랙스'} />);
    case 'jogger':
      return(<Category data={jogger} id={'조거팬츠'} />);
    case 'pullover':
      return(<Category data={pullover} id={'맨투맨'} />);
    // 상황룩 카테고리
    case 'date':
    case 'interview':
    case 'home':
    case 'work':
    case 'campus':
    case 'guest':
      return(<ThemeCategory id={id} kind={kind} />);
    // MBTI룩 카테고리
    default :
      return(<MbtiCategory id={id} kind={kind} />);
  }
}

function MbtiCategory({id, kind}) {
  let list = [];
  let data;

  kind.forEach(k => {
    list.push(k.filter(k => k.mbti.indexOf(id) > -1));
  });

  data = inputData(data, list, id);

  console.log(list);
  console.log(data);
  return(<Category data={data} id={id} />);
}

function ThemeCategory({id, kind}) {
  let list = [];
  let data;

  switch(id) {
    case 'date' : id = '데이트룩'; break;
    case 'interview': id = '면접룩'; break;
    case 'home': id = '집콕룩'; break;
    case 'work': id = '출근룩'; break;
    case 'campus': id = '캠퍼스룩'; break;
    case 'guest': id = '하객룩'; break;
  }

  kind.forEach(k => {
    list.push(k.filter(k => k.theme.indexOf(id) > -1));
  });

  data = inputData(data, list, id);

  return(<Category data={data} id={id} />);
}

function inputData(data, list) {
  data = list.reduce((acc, cur) => { return acc.concat(cur)});
  return data;
}

export default SelectCategory;