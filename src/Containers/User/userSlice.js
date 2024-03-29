import { createSlice } from '@reduxjs/toolkit';
import axios from 'axios';
import jwt from 'jwt-decode';

export const userSlice = createSlice({
    name: 'usuario',
    initialState:{
        token: "",
        user: {
            name:"",
            addres:"",
            photo:""
        }
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
        update:(state, action)=>{
            return{
                ...state,
                ...action.payload
            }
        }
    },
});

export const loginUsuario = (body) => async (dispatch) => {
    try{
        const user = await axios.post('https://sergi.lighthousemarketing.es/public/api/login'/* 'http://localhost:8000/api/login' */,body);
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

export const newUpdated = (name, address, photo) => (dispatch) => {
    console.log(name, address, photo)
    dispatch(update({
        user:{
            name:name,
            addres:address,
            photo:photo
        }
    }))
}

export const registerUser = (name, addres, email, password) => async (dispatch) => {
    try {
        const user = await axios.post('https://sergi.lighthousemarketing.es/public/api/register'/* 'http://localhost:8000/api/register' */,
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


export const {login, logout, update} = userSlice.actions

export const selectDatosUsuario = (state) => state.usuario

export default userSlice.reducer;