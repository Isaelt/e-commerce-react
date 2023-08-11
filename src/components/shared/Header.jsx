import './styles/Header.css'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header className='header__container'>
        <Link to='/'>
        <h1 className='header__logo'>e-commerce</h1>
        </Link>
      <nav className='header__navbar'>
        <ul className='header__list'>
          <li ><Link className='header__item' to='/login'><i className='bx bx-user'></i><h6>login</h6></Link></li>
          <li ><Link className='header__item' to='/register'><i className='bx bxs-id-card' ></i><h6>register</h6></Link></li>
          <li ><Link className='header__item' to='/cart'><i className='bx bx-cart' ></i><h6>cart</h6></Link></li>
          <li ><Link className='header__item' to='/purchases'><i className='bx bx-purchase-tag' ></i><h6>purchases</h6></Link></li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
