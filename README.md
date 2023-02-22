# THEME MALL (React 프로젝트)
### 사이트 주제
- 옷만 판매하는 곳이 아닌, 유행하는 **MBTI에 맞는 룩**과 **상황에 맞는 룩**을 추천해줘서 입고 싶은 옷을 알맞게 매치할 수 있게 도와줍니다.
</br>

### 주요 기능
1. [로그인](#로그인)
2. [최근 본 상품](#최근-본-상품)
3. [장바구니 저장](#장바구니-저장)
</br>
</br>

### #로그인
📌 기본적으로 아이디와 비밀번호를 입력하고, MBTI를 입력하면 홈 화면에서 입력한 MBTI와 어울리는 룩을 추천해줍니다.
</br>

**화면**
</br>

<img width="173" alt="login" src="https://user-images.githubusercontent.com/79409722/220277914-4d68c765-2954-4b5b-8c57-62bde546e026.png">
</br>

**주요 코드**
</br>

*Redux 활용해서 로그인 정보 저장하기*
```js
let login = createSlice({
  name: 'login',
  initialState: {id: '', pass: '', mbti: 'enfp', login: false},

  reducers: {
    setId(state, value) {
      state.id = value.payload;
    },

    setPass(state, value) {
      state.pass = value.payload;
    },

    setMbti(state, value) {
      state.mbti = '';
      state.mbti = value.payload;
    },

    setLogin(state) {
      state.login = true;
    },

    setLogout(state) {
      state.id = '';
      state.pass = '';
      state.mbti = 'enfp';
      state.login = false;
    }
  }
});
```
- Login을 했을 때는 setId, setPass, setMbti, setLogin이 활성화되고, Logout을 했을 때는 setLogout이 활성화 됩니다.
***
</br>

### #최근 본 상품
📌 최근 본 상품을 LocalStorage에 차례대로 저장하고 사이드바를 통해서 사용자에게 보여줍니다.
</br>

**화면**
</br>

<img width="168" alt="최근본상품" src="https://user-images.githubusercontent.com/79409722/220279998-e7e93c44-c79e-4686-a567-52147cdc4a56.png">

**주요 코드**
</br>

*1. LocalStorage 생성*
```jsx
useEffect(() => {
  localStorage.setItem('recent', JSON.stringify([]));
}, []);
```
- 전체 파일을 담고 있는 App.js에 작성해서 해당 프로젝트가 실행될 때 LocalStorage에 `recent`라는 이름으로 생성됩니다.
- LocalStorage에는 문자열만 저장할 수 있어서 JSON을 활용해서 문자열로 변환(`stringify`)해야 합니다.
</br>

*2. LocalStorage에 상품 저장*
```jsx
useMemo(() => {
  let recent = JSON.parse(localStorage.getItem('recent'));
  recent.push({img: item.mainImg[0].img, url: item.url});
  let result = [...new Set(recent)];
  localStorage.setItem('recent', JSON.stringify(result));
}, [kind]);
```
- `localStorage.getItem('recent')`로 가져올 때, 문자열이 아닌 JSON으로 변환(`parse`)해서 가져옵니다.
- Set을 활용해서 중복된 상품을 없애고 result에 저장합니다.
- result를 다시 문자열로 변환한 뒤 LocalStorage에 저장합니다.
</br>

*3. LocalStorage에 저장된 값 가져오기*
```jsx
<article className={cn(style.recentContainer)}>
  <h4 className={cn(style.title)}>최근 본 상품</h4>
  <div className={cn(style.grid)}>
    {
      recent.map((item, i) => {
        return(
          <Link to={item.url} className={cn(style.recentItem)} key={i}>
            <div className={cn(style.imgContainer)}>
              <img src={item.img} alt="The recent product" />
            </div>
          </Link>
        );
      })
    }
  </div>
</article>
```
- 최근 본 상품은 사이드바를 통해서 보여줄 거라고 Sidebar.js에 작성했습니다.
- map을 활용해서 중복되는 코드를 줄여 가독성을 높였습니다.
- Link를 통해서 최근 본 상품의 상세 설명 페이지를 볼 수 있습니다.
***
</br>

### #장바구니 저장
📌 장바구니 버튼을 누르면 사이드바와 장바구니 화면에 저장된 상품이 보여지게 됩니다. 
</br>

**화면**
</br>

<p align="left">
<img width="173" alt="cartPage" src="https://user-images.githubusercontent.com/79409722/220546139-ea5613cf-7770-4278-ac30-5435fc9e21dd.png">
<img width="173" alt="cartSidebar" src="https://user-images.githubusercontent.com/79409722/220546099-a023fa06-7e31-46e0-9316-6603a2a0efa5.png">
</p>

**주요 코드**
</br>

*1. 장바구니에 저장*
```jsx
let cart = createSlice({
  name: 'cart',
  initialState: [],

  reducers: {
    inputCart(state, val) {
      state.push(val.payload);
    },

    deleteCart(state, id) {
      state.forEach((item, index) => {
        if(item.id === id.payload) {
          state.splice(index, 1);
        }
      })
    }
  }
});
```
- Redux를 활용해서 장바구니 버튼을 누르면 **inputCart**가 활성화 되면서 `해당 상품의 이름, 가격, 이미지, url`이 저장됩니다.
- 장바구니 페이지에서 `✕ 버튼`을 누르면 **deleteCart**가 활성화 되면서 `해당 상품의 정보`가 삭제됩니다.
</br>

*2. 저장된 장바구니 화면에 출력*
```jsx
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
```
- button을 누르면 onClick을 활용해서 deleteCart가 활성화되도록 개발했습니다.
- 가격은 **toLocaleString()** 사용해서 `()에 있는 인자에 맞는 표현법으로` 보여집니다.
