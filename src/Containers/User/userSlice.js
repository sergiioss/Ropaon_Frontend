import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'usuario',
    initialState:{
        token: "",
        user: "",
    },
    reducers:{
        login: (state, action) => {
            return {
                ...state,
                ...action.payload
            }
        }, 
        logout: (state, action) => {
            return{
                ...state,
                token: "",
                user: "",
                iat: "",
                exp: ""
            }
        },
        register: (state, action) => {
            return {
                ...state,
                isRegister: true,
                successMessage: 'Te has registrado correctamente'
            }
        },
    },
});

export const loginUsuario = (body) => async (dispatch) => {
    try{
        const user = await axios.post('https://ropaon-production.up.railway.app/api/login',body);
        let decodificarToken = jwt(user.data.token);
        if(user.status === 200){
            dispatch(login({
                ...decodificarToken,
                token: user.data.token,
                user: user.data.user
            }))
        }

    }catch (error){
        console.log(error)
    }
};

export const logOut = () => (dispatch) => {
    dispatch(logout());
};

export const registerUser = (name, addres, email, password) => async (dispatch) => {
    try {
        const user = await axios.post('https://ropaon-production.up.railway.app/api/register',
        {
            name: name,
            addres: addres,
            email: email,
            password: password
        })

        let response = user
        if(response.status === 200){
            dispatch(register(response.data))
        } 
    } catch (error) {
        dispatch(logError(error))
    }
}


export const {login, logout} = userSlice.actions

export const selectDatosUsuario = (state) => state.usuario

export default userSlice.reducer;