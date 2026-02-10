import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    status: 'not-authenticated', // 'checking', 'autheticated'
    uid: null,
    email: null,
    displayName: null,
    photoUrl: null,
    errorMensaje: null,
}

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: ( state, action ) => {

    },
    logout: (state, payload) => {

    },
    checkingCredentials: ( state ) => {
      state.status = 'checking';
    },
  }
});

export const { login, logout, checkingCredentials } = authSlice.actions;