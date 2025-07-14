import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const productsSlice = createSlice({
   name: 'products',
   initialState: null,
    reducers: {
      setProductsG: (state, action) => action.payload
    }
})

export const { setProductsG } = productsSlice.actions

export default productsSlice.reducer

export const getAllProductsThunk = () => dispatch => {
    const url = 'https://fakestoreapi.com/products'
    axios.get(url)
      .then(res => dispatch(setProductsG(res.data)))
      .catch(err => console.log(err))
    }

export const getFilteredProductsThunk = (id) => dispatch => {
  const url = ''
  axios.get(url)
    .then(res => dispatch(setProductsG(res.data)))
    .catch(err => console.log(err))
}