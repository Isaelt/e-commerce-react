import { useEffect } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/prodcuts.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'

const FilterCategory = () => {

    const [ categories, getAllCategories ] = useFetch()

    const distpatch = useDispatch()

    useEffect(() => {
        getAllCategories('/categories')
    },[])

    console.log(categories)

    const handleAllCategories = () => {
        distpatch(getAllProductsThunk())
    }

    const handleFilterCategories = (id) => {
        distpatch(getFilteredProductsThunk(id))
    }
  return (
    <article className="category__contain">
        <h3 className="category__title">Category  <i class='bx bxs-chevron-down'></i></h3>
        <ul className="category__list">
            <li className="category__item" onClick={handleAllCategories}>All-categories</li>
            {
                categories?.map(category => (
                    <li className="category__item" onClick={() => handleFilterCategories(category.id)} key={category.id}>{category.name}</li>
                ))
            }
        </ul>
    </article>
  )
}

export default FilterCategory
