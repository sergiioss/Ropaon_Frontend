import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'usuario',
    initialState:{
        token: ""
    },
    reducers:{
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }, 
    },
});


export const {login} = userSlice.actions

export const selectDatosUsuario = (state) => state.usuario

export default userSlice.reducer;