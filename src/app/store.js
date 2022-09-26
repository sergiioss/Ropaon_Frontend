import {configureStore} from "@reduxjs/toolkit"
import adminSlice from "../Containers/Admin/adminSlice"
import ftituloSlice from "../Containers/Ftitulo/ftituloSlice"
import maleSlice from "../Containers/Male/maleSlice"
import purchaseSlice from "../Containers/Purchase/purchaseSlice"
import userSlice from "../Containers/User/userSlice"

export default configureStore({
    reducer:{
        usuario : userSlice,
        prod : ftituloSlice,
        purchase: purchaseSlice,
        product: adminSlice,
        genders: maleSlice,
    },
})