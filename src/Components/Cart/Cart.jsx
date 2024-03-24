import React, { useContext, useEffect } from 'react'
import styles from './Cart.module.css'
import { Helmet } from 'react-helmet';
import { CartContent } from '../../Context/CartContext';
import { useState } from 'react';
import { Circles } from 'react-loader-spinner';
import { Link } from 'react-router-dom';




export default function Cart() {

    const [cartDetails, setCartDetails] = useState({})

    let { getCart ,deleteProductFromCart,updateProductQuantity ,setNumOfCartItems } = useContext(CartContent)

    async function getCartDetails() {
        let { data } = await getCart()
        setNumOfCartItems(data.numOfCartItems)
        setCartDetails(data)
    }

    async function removeProduct(id) {
        let { data } = await deleteProductFromCart(id)
        setNumOfCartItems(data.numOfCartItems)
        setCartDetails(data)
    }

    async function updateCount(id,count) {
        let { data } = await updateProductQuantity(id,count);

        data.data.prouducts.map(ele=>{
            if(ele.count==0){
                removeProduct(ele.product._id)
            }
        })
        setCartDetails(data)
    }



    useEffect(() => {
        getCartDetails()
    }, [])

    return (
        <>
            <Helmet>
                <title>Cart page</title>
            </Helmet>
            {cartDetails.data ? <div className="container my-5">
                <div className="w-100 mx-auto bg-main-light  p-5">
                    <h1 className='mb-3'>Cart shop</h1>
                    <div className="d-flex justify-content-between align-items-center">
                        <h3 className='h5'>Total price : <span className='text-main'> {cartDetails.data.totalCartPrice}EGP</span></h3>
                        <h3 className='h5'>Total cart items : <span className='text-main'>{cartDetails.numOfCartItems} </span></h3>
                    </div>

                    {cartDetails.data.products.map((ele) => <div key={ele.product._id} className="row py-2 border-bottom">
                        <div className="col-md-1">
                            <img src={ele.product.imageCover} className='w-100' alt="" />
                        </div>
                        <div className="col-md-11">
                            <div className="d-flex justify-content-between align-items-center">
                                <div className="left-side">
                                    <h4>{ele.product.title}</h4>
                                    <p>{ele.price}</p>
                                </div>
                                <div className="right-side">
                                    <button className='btn btn-primary'onClick={()=>updateCount(ele.product._id,ele.count-1)}>-</button>
                                    <span className='mx-2' >{ele.count}</span>
                                    <button className='btn btn-primary' onClick={()=>updateCount(ele.product._id,ele.count+1)} >+</button>
                                </div>
                            </div>
                            <button onClick={()=>removeProduct(ele.product._id)} className='btn p-0 fw-bold'> <i className='fa fa-trash text-danger px-1'> </i>Remove</button>
                        </div> 
                    </div>)}

                    <Link to={'/checkout'} className='btn text-wh bg-main w-100 mt-5'>Checkout</Link>

                </div>
            </div> : <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass={"justify-content-center"}
                visible={true}
            />}




        </>
    )
}



