import React from 'react'
import styles from './MainSlider.module.css'
import Slider from 'react-slick'

import img1 from '../../assets/images//slider-image-1.jpeg'
import img2 from '../../assets/images//slider-image-2.jpeg'
import img3 from '../../assets/images//slider-image-3.jpeg'


const MainSlider = () => {
    let settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <>
            <div className="container my-5">
                <div className="row gx-1">
                    <div className="col-md-8">
                        <Slider {...settings}>
                            <img height={400} src={img3} alt="" />
                            <img height={400} src={img1} alt="" />
                            <img height={400} src={img2} alt="" />
                        </Slider>
                    </div>
                    <div className="col-md-4">
                        <img height={200} src={img1} className='w-100' alt='' />
                        <img height={200} src={img2} className='w-100' alt='' />
                    </div>
                </div>
            </div>





        </>
    )
}
export default MainSlider;

