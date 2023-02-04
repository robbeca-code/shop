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

export let { setNavMenu } = navMenu.actions;

export default configureStore({
  reducer: {
    navMenu: navMenu.reducer
  }
});