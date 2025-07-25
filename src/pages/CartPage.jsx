import { useDispatch, useSelector } from "react-redux"
import { getCartThunk } from "../store/slices/cart.slice"
import { useEffect } from "react"
import ProductInCart from "../components/CartPage/ProductInCart"
import usePurchases from "../hooks/usePurchases"
import './styles/CartPage.css'

const CartPage = () => {

    const cart = useSelector(reducer => reducer.cart)
    console.log(cart)

    const dispatch = useDispatch()

    useEffect(() => {
      //  dispatch(getCartThunk())
    },[])
    
    const totalAmount = cart.products?.reduce((acc, cv) => {
      const subtotal = cv.quantity * cv.product.price
      return acc + subtotal
    }, 0)

    const { makeAPurchase } = usePurchases()

    const handlePurchase = () => {
      makeAPurchase()
    }

  return (
    <section>
        <h2>Cart</h2>
        <div className="cart__container">
          {
            cart.products?.map(prod => (
                <ProductInCart 
                key={prod.id}
                prodCart={prod}
                />
            ))
          }
        </div>
        <footer>
          <span>Total</span>
          <h3>{totalAmount}</h3>
          <button onClick={handlePurchase}>CheckOut</button>
        </footer>
    </section>
  )
}

export default CartPage
