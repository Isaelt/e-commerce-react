import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './styles/RegisterPage.css'

const RegisterPage = () => {

   const { register, reset, handleSubmit } = useForm()
   const {createUser} = useAuth()
   const navigate = useNavigate()

   const submit = data => {
    createUser(data, navigate)
    reset({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: ''
    })
   }

  return (
    <div className="register__container">
    <form className="register__form" onSubmit={handleSubmit(submit)}>
      <h2 className="register__paragraph">Enter your details to create an account</h2>
      <div className="register__name">
        <label className="register__label" htmlFor="firstname">First Name</label>
        <input className="register__input" {...register('firstName')} type="text" id="firstname" />
      </div>
      <div className="register__name">
        <label className="register__label" htmlFor="lastname">Last Name</label>
        <input className="register__input" {...register('lastName')} type="text" id="lastname" />
      </div>
      <div className="register__name">
        <label className="register__label" htmlFor="email">Email</label>
        <input className="register__input" {...register('email')} type="email" id="email" />
      </div>
      <div className="register__name">
        <label className="register__label" htmlFor="password">Password</label>
        <input className="register__input" {...register('password')} type="password" id="password" />
      </div>
      <div className="register__name">
        <label className="register__label" htmlFor="phone">Phone</label>
        <input className="register__input" {...register('phone')} type="text" id="phone" />
      </div>
      <button className="register__btn">Create User</button>
    </form>
    </div>
  );
};

export default RegisterPage;
