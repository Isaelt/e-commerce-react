import { configureStore } from "@reduxjs/toolkit";
import products from './slices/prodcuts.slice'
import cart from './slices/cart.slice'

const store = configureStore({
    reducer: {
       products,
       cart
    }
})

export default store