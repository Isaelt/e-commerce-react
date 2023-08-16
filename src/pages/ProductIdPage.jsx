import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect } from "react"
import ProductInfo from "../components/ProductIdPage/ProductInfo"
import SimilarProducts from "../components/ProductIdPage/SimilarProducts"
import SliderImgs from "../components/ProductIdPage/SliderImgs"
import './styles/ProductIdPage.css'

const ProductIdPage = () => {

    const { id } = useParams()

    const [ product, getSingleProduct ] = useFetch()

    useEffect(() => {
        getSingleProduct(`/products/${id}`)
    },[id])

    console.log(product)

  return (
    <div>
      <div className="product__slider-info">
      <div className="slider__center">
        <SliderImgs
        product={product}
        />

      </div>
        <ProductInfo
        product={product}
        />
      </div>
        <SimilarProducts
        product={product}
        />
    </div>
  )
}

export default ProductIdPage
