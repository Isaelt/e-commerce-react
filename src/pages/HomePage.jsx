import { useSelector } from "react-redux"
import CardProduct from "../components/HomePage/CardProduct"
import { useRef, useState } from "react"
import FilterCategory from "../components/HomePage/FilterCategory"
import FilterPrice from "../components/HomePage/FilterPrice"
import './styles/HomePage.css'

const HomePage = () => {

    const products = useSelector(reducer => reducer.products)

    const [nameValue, setNameValue] = useState('')
    const [fromTo, setFromTo] = useState({
      from: 0,
      to: Infinity
    })

    const inputName = useRef()

    const handleFilterName = () => {
      setNameValue(inputName.current.value)
    }

    const cbFilter = prod => {
      //filter by name
      const inputNameLower = nameValue.toLowerCase().trim()
      const nameReal = prod.title.toLowerCase()
      //filter by price
      const price = +prod.price
      const filterPrice = fromTo.from <= price && price <= fromTo.to
      return nameReal.includes(inputNameLower) && filterPrice
    } 



    return (
    <div className="home__container">
      <div className="home__contain-form">
        <input className="home__input-filtername"
        onChange={handleFilterName} 
        type="text"
        ref={inputName}
        value={nameValue}
        placeholder="What are you looking for?"
        />
        <button className="home__btn-search"><i className='bx bx-search'></i></button>
      </div>
      <div className="home__divisor">
        <div className="home__filters">
       <FilterPrice 
       setFromTo={setFromTo}
       />
       <FilterCategory
      />
        </div>
        <div className="home__container-products">
            {
              products?.filter(cbFilter).length  === 0 
              ? <h2>Sorry, not exist products</h2> 
              : products?.filter(cbFilter).map(prod => (
                <CardProduct
                key={prod.id}
                product={prod}
                />
              ))
            }
        </div>
      </div>
    </div>
  )
}

export default HomePage
