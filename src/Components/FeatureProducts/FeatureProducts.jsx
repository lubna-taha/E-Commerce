import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import { useQuery } from 'react-query'
import { Link } from 'react-router-dom'
import { CartContent } from '../../Context/CartContext'
import toast from 'react-hot-toast'


export default function FeatureProducts() {

    let { addToCart, setNumOfCartItems } = useContext(CartContent)


    function getProducts() {
        return axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
    }
    let { data, isLoading, isFetching, refetch } = useQuery('featuredProducts', getProducts)


    // h3ml function de tklm el context to add product wb3den a5od el function C P fl details abl el useEffect

    async function addCart(id) {
        let res = await addToCart(id)
        console.log(res.data.status, "hellooo from cart");
        if (res.data.status == "success") {
            toast.success('Product added successfully');
            setNumOfCartItems(res.data.numOfCartItems)
        } else {
            toast.error('Product added successfully')
        }
    }


    return (<>
        <div className="container py-5">
            {isLoading ? <Circles
                height="80"
                width="80"
                color="#4fa94d"
                ariaLabel="circles-loading"
                wrapperStyle={{}}
                wrapperClass={"justify-content-center"}
                visible={true}
            />

                : <div className="row">

                    {data?.data?.data.map((ele) => <div key={ele.id} className="col-md-2 ">
                        <div className="product px-2 py-3 ">
                            <Link to={'details/' + ele.id}>
                                <img src={ele.imageCover} className='w-100' alt={ele.title} />
                                <p className='text-main'>{ele.category.name}</p>
                                <h3 className='h6'>{ele.title.split(' ').slice(0, 3).join(' ')}</h3>
                                <div className="d-flex justify-content-between">
                                    <p>{ele.price}</p>
                                    <p>
                                        <i className='fa fa-star rating-color'>{ele.ratingsAverage}</i>
                                        <i className="fa-solid fa-heart p-2 text-main"></i>
                                    </p>
                                </div>
                            </Link>

                            <button onClick={() => addCart(ele.id)} className='btn bg-main w-100 text-white'>Add to cart</button>
                        </div>
                    </div>)}

                </div>}

        </div>

    </>
    )
}


// const [allProducts, setAllProducts] = useState([])
// const [isLoading, setIsLoading] = useState(true)

// async function getAllProducts() {
//     let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/products`)
//     console.log(data, 'data');
//     setAllProducts(data.data)
//     setIsLoading(false)
// }

// useEffect(() => {
//     getAllProducts()
// }, [])

