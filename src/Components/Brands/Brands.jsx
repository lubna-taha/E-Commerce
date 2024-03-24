import React, { useEffect, useState } from 'react'
import styles from './Brands.module.css'
import { Helmet } from 'react-helmet';
import axios from 'axios';
import Slider from 'react-slick';
export default function Brands() {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 2
    };

    const [brands, setBrands] = useState([])

    async function ShowBrands() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/brands`)
        console.log(data, 'brands');
        setBrands(data.data)
    }


    useEffect(() => {
        ShowBrands()
    }, [])



    return (

        <>
            <Helmet>
                <title>Brands page</title>
            </Helmet>
            <div className="h-100">.</div>
            <div className="mt-5 text-center"> <h1 className='text-main'>All Brands</h1></div>


            <div className="container my-5">
                <Slider {...settings}>
                {brands.map(ele => <div className="">
                    <div className="product px-2 py-3 col-md-2 w-100">
                        <img src={ele.image} height={'200'} className='w-100  mb-2 cursor-pointer' alt="categories" />
                        <h5 className='text-center fw-bold'>{ele.name}</h5>
                    </div>
                    
                </div>

            

            )}
                </Slider>

            </div>



        </>
    )
}
