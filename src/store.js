import { configureStore, createSlice } from '@reduxjs/toolkit';

let navMenu = createSlice({
  name: 'navMenu',
  initialState: false,

  reducers: {
    setNavMenu(state) {
      return !state;
    }
  }
});

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


export let { setNavMenu } = navMenu.actions;
export let { setId, setPass, setMbti, setLogin, setLogout} = login.actions;
export let {inputCart, deleteCart} = cart.actions;


export default configureStore({
  reducer: {
    navMenu: navMenu.reducer,
    login: login.reducer,
    cart: cart.reducer
  }
});