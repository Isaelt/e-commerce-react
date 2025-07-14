import { useDispatch } from "react-redux"
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import axios from "axios"
import { addCartG } from "../store/slices/cart.slice";


const useCartApi = () => {
  
    const baseUrl = 'https://fakestoreapi.com/carts/1'

    const distpatch = useDispatch()

    //POST
    // const addProductInCart = (data) => {
    //     const url = `${baseUrl}`
    //     axios.put(url, data, getConfigToken())
    //      .then(res => {
    //         distpatch(getCartThunk())
    //         console.log(res.data)
    //       })
    //      .catch(err => console.log(err))
    // }

    const addProductInCart = (product) => {
      const data = {
        id: product.id,
        quantity: 1,
        product: {
          ...product
        }
      };
      distpatch(addCartG(data));
    };
    //DELETE 
    // const deleteProductInCart = (id) => {
    //   const url = `${baseUrl}/${id}`
    //   axios.delete(url, getConfigToken())
    //    .then(res => {
    //     console.log(res.data)
    //     // distpatch(getCartThunk())
    //     distpatch(deleteCartG(id))
    //   })
    //    .catch(err => console.log(err))
    // }

    const deleteProductInCart = (productId) => {
    distpatch(deleteCartG(productId));
  };

    //UPDATE
    const updateProductInCart = (id, data) => {
      const url = `${baseUrl}/${id}`
      axios.put(url, data, getConfigToken())
       .then(res => {
        console.log(res.data)
       })
       .catch(err => console.log(err))
    }

  return{ addProductInCart, deleteProductInCart, updateProductInCart}
}

export default useCartApi
