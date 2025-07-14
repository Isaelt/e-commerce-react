import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import getConfigToken from "../../utils/getConfigToken";

const cartSlice = createSlice({
    name:'cart',
    initialState: {
      id: null,
      userId: null,
      date: null,
      products: []
    },
    reducers:{
        setCartG: (state, action) => action.payload,
        // addCartG: (state, action) => [...state, action.payload],
        addCartG: (state, action) => {
          const { productId, quantity, product } = action.payload;

          if (!state.products) state.products = [];

          const index = state.products.findIndex(
            item => item.product.id === productId
          );

          if (index >= 0) {
            state.products[index].quantity += quantity;
          } else {
            state.products.push({
              id: product.id,
              quantity,
              product
            });
          }
        },
        // deleteCartG: (state, action) => state.filter(prod => prod.id !== action.payload),
        deleteCartG: (state, action) => {
          state.products = state.products.filter(p => p.product.id !== action.payload);
        },
        updateCartG:(state, action) => state.map(prod => prod.id === action.payload ? action.payload : prod)
        
    }
})

export const { setCartG, addCartG, deleteCartG, updateCartG } = cartSlice.actions

export default cartSlice.reducer

// export const getCartThunk = () => distpatch => {
//     const url = 'https://fakestoreapi.com/carts/1'
//     axios.get(url, getConfigToken())
//      .then(res => distpatch(setCartG(res.data)))
//      .catch(err => console.log(err))
// }
export const getCartThunk = () => dispatch => {
  const url = 'https://fakestoreapi.com/carts/1';
  
  axios.get(url)
    .then(async res => {
      const cartRaw = res.data;

      const productDetails = await Promise.all(
        cartRaw.products.map(async (prod) => {
          const productRes = await axios.get(`https://fakestoreapi.com/products/${prod.productId}`);
          return {
            id: prod.productId,
            quantity: prod.quantity,
            product: {
              ...productRes.data,
            }
          };
        })
      );

      const fullCart = {
        id: cartRaw.id,
        userId: cartRaw.userId,
        date: cartRaw.date,
        products: productDetails
      };

      dispatch(setCartG(fullCart));
    })
    .catch(err => console.log(err));
};