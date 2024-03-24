import React, { useEffect, useState } from 'react'
import styles from './CategoriesSlider.module.css'
import axios from 'axios'
import Slider from 'react-slick';
const CategoriesSlider = () => {

    let settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1
    };

    const [categories, setCategories] = useState([])


    async function getCategories() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        console.log(data);
        setCategories(data.data)
    }


    useEffect(() => {
        getCategories()
    }, [])

    return (
        <>
            <div className="container my-5">
                <Slider {...settings}>
                    {categories.map(cat => <div key={''} className="cat px-1">
                        <img src={cat.image} height={'200'} className='w-100 mb-2 ' alt="" />
                        <h5>{cat.name}</h5>
                    </div>)}
                </Slider>

            </div>
        </>
    )
}
export default CategoriesSlider;
