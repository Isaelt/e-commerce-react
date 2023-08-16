import { useEffect, useState } from "react"
import useFetch from "../../hooks/useFetch"
import { getAllProductsThunk, getFilteredProductsThunk } from "../../store/slices/prodcuts.slice"
import { useDispatch } from "react-redux"
import './styles/FilterCategory.css'

const FilterCategory = () => {

    const [ categories, getAllCategories ] = useFetch()
    const [rotateIcon, setRotateIcon] = useState()
    const [closeFilterCat, setCloseFilterCat] = useState()

    const distpatch = useDispatch()

    useEffect(() => {
        getAllCategories('/categories')
    },[])


    const handleAllCategories = () => {
        distpatch(getAllProductsThunk())
    }

    const handleFilterCategories = (id) => {
        distpatch(getFilteredProductsThunk(id))
    }

    const handleCloseCategory = () => {
        if (closeFilterCat == 'closed__cat') {
            setCloseFilterCat('open')
            setRotateIcon('rotate')
        } else {
            setCloseFilterCat('closed__cat')
        setRotateIcon()}
    }
  return (
    <article className={`category__contain ${closeFilterCat}`}>
        <h3 onClick={handleCloseCategory} className="price__title">Category  <i className={`bx bxs-chevron-down ${rotateIcon}`}></i></h3>
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
