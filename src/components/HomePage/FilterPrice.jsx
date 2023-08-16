import { useForm } from "react-hook-form";
import './styles/FilterPrice.css'
import { useState } from "react";

const FilterPrice = ({ setFromTo }) => {

    const { register, reset, handleSubmit } = useForm()
    const [rotateIcon, setRotateIcon] = useState()

    const submit = data => {
        const from = Number(data.from.trim())
        const to = Number(data.to.trim())
         const obj ={
            from: from || 0,
            to: to || Infinity
         }
         setFromTo(obj)
    }
    const [closeFilter, setCloseFilter] = useState()

    const handleClosePrice = () => {
      if (closeFilter=='closed') {
        setCloseFilter('open')
        setRotateIcon('rotate')
      } else {
        setCloseFilter('closed')
        setRotateIcon()
      }
    }

  return (
    <article className={`price__container ${closeFilter}`}>
      <h3 onClick={handleClosePrice} className="price__title">Price <i className={`bx bxs-chevron-down ${rotateIcon}`}></i></h3>
      <form className="price__form" onSubmit={handleSubmit(submit)}>
        <div className="price__from">
          <label htmlFor="from">From</label>
          <input className="price__input" {...register('from')} type="number" id="from" />
        </div>
        <div className="price__from">
          <label htmlFor="to">To</label>
          <input className="price__input" {...register('to')} type="number" id="to" />
        </div>
        <button className="price__btn">Filter Price</button>
      </form>
    </article>
  );
};

export default FilterPrice;
