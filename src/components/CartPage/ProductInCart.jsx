import useCartApi from "../../hooks/useCartApi"
import './styles/ProductInCart.css'

const ProductInCart = ({ prodCart }) => {

    const { deleteProductInCart } = useCartApi()

    const handleDeleteCart = () => {
        deleteProductInCart(prodCart.id)
    }
    console.log(prodCart)

  return (
    <article className="incart__container">
        <header className="incart__header">
            <img className="incart__img" src={prodCart.product.images[0].url} alt="" />
        </header>
        <section>
            <h3>{prodCart.product.title}</h3>
            <span>{prodCart.quantity}</span>
            <button onClick={handleDeleteCart}><i className='bx bx-trash'></i></button>
        </section>
        <footer>
            <span>subtotal:</span>
            <span>{prodCart.product.price * prodCart.quantity}</span>
        </footer>
    </article>
  )
}

export default ProductInCart
