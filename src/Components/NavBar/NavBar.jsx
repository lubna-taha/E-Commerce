import React, { useContext } from 'react'
import styles from './NavBar.module.css'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../../assets/images/logo.svg.svg'
import { CounterContext } from '../../Context/Counter'
import { tokenContext } from '../../Context/Token'
import Login from '../Login/Login'
import { CartContent } from '../../Context/CartContext'


const NavBar = () => {
    let { counter } = useContext(CounterContext)
    let { numOfCartItems } = useContext(CartContent)
    const { token, setToken } = useContext(tokenContext)
    console.log(token, 'token');
    let navigate = useNavigate()


    function logOut() {
        localStorage.removeItem('userToken')
        setToken(null);
        navigate('/login')
    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-tertiary fixed-top ">
                <div className="container">
                    <Link className="navbar-brand" to={'home'}>
                        <img src={logo} alt="" />
                        {counter}
                    </Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon" />
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        {token ? <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'home'}>Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link active" aria-current="page" to={'wishlist'}>Wish list</Link>
                            </li>

                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to={'products'}>Products</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to={'categories'}>Categories</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to={'brands'}>Brands</Link>
                            </li>
                            <li className="nav-item position-relative">
                                <Link className="nav-link " aria-current="page" to={'cart'}>
                                    <i className='fa fa-shopping-cart text-main'></i>
                                    <span className='bg-main text-white rounded position-absolute top-0 end-0'> {numOfCartItems}</span>
                                </Link>
                            </li>

                        </ul> : null}

                        <ul className='ms-auto navbar-nav '>
                            <li className="nav-item align-self-center">
                                <i className='fa-brands mx-1 fa-instagram'></i>
                                <i className='fa-brands mx-1  fa-linkedin'></i>
                                <i className='fa-brands mx-1  fa-facebook'></i>
                                <i className='fa-brands mx-1  fa-instagram'></i>
                            </li>

                            {token ? <li className="nav-item">
                                <button className="nav-link " onClick={logOut}  >LogOut</button>
                            </li> : <>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to={'register'}>Register</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link " aria-current="page" to={'login'}>LogIn</Link>
                                </li>
                            </>}

                        </ul>





                    </div>
                </div>
            </nav>

        </>
    )
}

export default NavBar;