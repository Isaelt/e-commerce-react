import { useDispatch } from "react-redux"
import { deleteCartG, getCartThunk } from "../store/slices/cart.slice"
import getConfigToken from "../utils/getConfigToken"
import axios from "axios"


const useCartApi = () => {
  
    const baseUrl = 'https://e-commerce-api-v2.academlo.tech/api/v1'

    const distpatch = useDispatch()

    //POST
    const addProductInCart = (data) => {
        const url = `${baseUrl}/cart`
        axios.post(url, data, getConfigToken())
         .then(res => {
            distpatch(getCartThunk())
            console.log(res.data)
          })
         .catch(err => console.log(err))
    }
    //DELETE
    const deleteProductInCart = (id) => {
      const url = `${baseUrl}/cart/${id}`
      axios.delete(url, getConfigToken())
       .then(res => {
        console.log(res.data)
        // distpatch(getCartThunk())
        distpatch(deleteCartG(id))
      })
       .catch(err => console.log(err))
    }

  return{ addProductInCart, deleteProductInCart}
}

export default useCartApi
