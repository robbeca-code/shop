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


export let { setNavMenu } = navMenu.actions;
export let { setId, setPass, setMbti, setLogin, setLogout} = login.actions;


export default configureStore({
  reducer: {
    navMenu: navMenu.reducer,
    login: login.reducer
  }
});