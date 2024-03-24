import React, { useContext, useEffect, useState } from 'react'
import styles from './Details.module.css'
import { useParams } from 'react-router-dom'
import { useQuery } from 'react-query'
import axios from 'axios'
import Cart from './../Cart/Cart';
import { Circles } from 'react-loader-spinner'
import { CartContent } from '../../Context/CartContext'
import toast from 'react-hot-toast'

let settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 8,
    slidesToScroll: 1
};

const Details = () => {
    const [details, setDetails] = useState({})
    const [isLoading, setIsLoading] = useState(true)

    let { addToCart, setNumOfCartItems } = useContext(CartContent)

    let params = useParams()
    async function getProductDetails(id) {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)

        setDetails(data.data)
        setIsLoading(false)

    }

    async function addCart(id) {
        let res = await addToCart(id)
        console.log(res.data.status, "hellooo from cart");
        if (res.data.status == "success") {
            toast.success('Product added successfully')
            setNumOfCartItems(res.data.numOfCartItems)

        } else {
            toast.error('Product added successfully')
        }
    }


    // useParams => to find ID from URL
    // function getProductDetails(id) {
    //     return axios.get(`https://ecommerce.routemisr.com/api/v1/products/${id}`)
    // } 

    // let { data ,isLoading} = useQuery("details", ()=>getProductDetails(params.id))


    useEffect(() => {
        getProductDetails(params.id)
    }, [])

    return (
        <>
            <div className="container">
                {isLoading ? <Circles
                    height="80"
                    width="80"
                    color="#4fa94d"
                    ariaLabel="circles-loading"
                    wrapperStyle={{}}
                    wrapperClass={"justify-content-center"}
                    visible={true}
                /> :

                    <div className="row align-items-center">
                        <div className="col-md-4">
                            <img src={details.imageCover} className='w-100' alt="" />
                        </div>
                        <div className="col-md-8">
                            <h2>{details.title} </h2>
                            <p>{details.description} </p>
                            <p>{details.category.name}</p>
                            <div className="d-flex justify-content-between">
                                <h5>{details.price}</h5>
                                <h5>    <i className='fa fa-star rating-color'>{details.ratingsAverage}</i></h5>
                            </div>
                            <button onClick={() => addCart(details.id)} className='btn bg-main text-white w-100'>Add to Cart</button>
                        </div>
                    </div>

                }

            </div>
        </>
    )
}
export default Details;