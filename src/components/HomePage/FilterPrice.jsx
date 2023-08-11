import { useForm } from "react-hook-form";
import './styles/FilterPrice.css'

const FilterPrice = ({ setFromTo }) => {

    const { register, reset, handleSubmit } = useForm()

    const submit = data => {
        const from = Number(data.from.trim())
        const to = Number(data.to.trim())
         const obj ={
            from: from || 0,
            to: to || Infinity
         }
         setFromTo(obj)
    }

  return (
    <article className="price__container">
      <h3 className="price__title">Price <i class='bx bxs-chevron-down'></i></h3>
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
