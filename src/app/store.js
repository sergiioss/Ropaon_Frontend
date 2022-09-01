import {configureStore} from "@reduxjs/toolkit"
import ftituloSlice from "../Containers/Ftitulo/ftituloSlice"
import purchaseSlice from "../Containers/Purchase/purchaseSlice"
import userSlice from "../Containers/User/userSlice"

export default configureStore({
    reducer:{
        usuario : userSlice,
        prod : ftituloSlice,
        purchase: purchaseSlice,
    },
})