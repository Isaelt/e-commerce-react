import { useState } from "react"
import useCartApi from "../../hooks/useCartApi"
import { useDispatch } from "react-redux"
import './styles/ProductInfo.css'

const ProductInfo = ({product}) => {

    const [counter, setCounter] = useState(1)

    const handleMinus = () => {
        if (counter - 1 >= 1) {
            setCounter(counter - 1)
        }
    }

    const handlePlus = () => setCounter(counter + 1)

    const {addProductInCart} = useCartApi()

    const handleAddCart = () =>{
      const data = {
        quantity: counter,
        productId: product.id
      }
      addProductInCart(data)
    }


  return (
    <article className="info__container">
      <h4 className="info__brand">{product?.brand}</h4>
      <h3 className="info__title">{product?.title}</h3>
      <p className="info__description">{product?.description}</p>
      <section className="info__price">
        <h4 className="info__price-label">Price</h4>
        <span className="info__price-value">{product?.price}</span>
      </section>
      <section>
        <h4>Quantity</h4>
        <div>
            <button onClick={handleMinus}>-</button>
            <span>{counter}</span>
            <button onClick={handlePlus}>+</button>
        </div>
      </section>
      <footer>
        <button onClick={handleAddCart}>Add to cart <i className='bx bxs-cart-add' ></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo
