import './styles/ProductPurchased.css'
const ProductPurchased = ({purchase}) => {
  return (
    <article className='purch__contain'>
      <header className='purch__header'>
        <img className='purch__img' src={purchase.product.images[1].url} alt="" />
      </header>
      <h3>{purchase.product.title}</h3>
      <div>{purchase.quantity}</div>
      <div>{purchase.quantity * purchase.product.price}</div>
    </article>
  )
}

export default ProductPurchased
