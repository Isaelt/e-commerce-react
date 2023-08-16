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
      <div className="info__price-counter">
      <section className="info__price">
        <h4 className="info__price-label">Price</h4>
        <span className="info__price-value">{product?.price}</span>
      </section>
      <section className="info__quant">
        <h4 className="info__price-label">Quantity</h4>
        <div className="info__counter">
            <button className="info__sum" onClick={handleMinus}>-</button>
            <span className="info__value-sum">{counter}</span>
            <button className="info__sum" onClick={handlePlus}>+</button>
        </div>
      </section>
      </div>
      <footer className="info__footer">
        <button className="info__btn" onClick={handleAddCart}>Add to cart <i className='bx bxs-cart-add' ></i></button>
      </footer>
    </article>
  )
}

export default ProductInfo
