import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { useNavigate } from "react-router-dom";
import './styles/LoginPage.css'

const LoginPage = () => {

    const {handleSubmit, reset, register} = useForm()
    const { loginUser } = useAuth()
    const navigate = useNavigate()

    const submit = data => {
        loginUser(data, navigate)
    }

  return (
    <div className="login__container">
    <form className="login__form" onSubmit={handleSubmit(submit)}>
      <div className="login__field">
        <label className="login__label" htmlFor="email">Email</label>
        <input className="login__input" {...register('email')} type="email" id="email" />
      </div>
      <div className="login__field">
        <label className="login__label" htmlFor="password">Password</label>
        <input className="login__input" {...register('password')} type="password" id="password" />
      </div>
      <button className="login__btn">Login</button>
    </form>
    </div>
  );
}

export default LoginPage
