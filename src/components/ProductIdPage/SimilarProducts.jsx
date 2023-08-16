import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import CardProduct from "../HomePage/CardProduct"
import './styles/SimilarProducts.css'

const SimilarProducts = ({product}) => {

  const [productsByCategory, getProductsByCategory] = useFetch()

  useEffect(() => {
    if(product){
    getProductsByCategory(`/products?categoryId=${product.categoryId}`)}
  },[product])

  const cbFilter = prod => {
    if (prod.id !== product.id) {
        return prod
    }
  }

  return (
    <div className="similar__container">
      <h3 className="similar__name">Similar Products</h3>
      <div className="similar__contain">
        {
            productsByCategory?.filter(cbFilter).map(prod => (
              <CardProduct 
              key={prod.id}
              product={prod}
              />
            ))
        }
      </div>
    </div>
  )
}

export default SimilarProducts
