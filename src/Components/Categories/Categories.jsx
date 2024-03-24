import React, { useEffect, useState } from 'react'
import styles from './Categories.module.css'
import { Helmet } from 'react-helmet'
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider'
import axios from 'axios'
import { useQuery } from 'react-query'



export default function Categories() {

    const [category, setCategory] = useState([])

    async function ShowCatergory() {
        let { data } = await axios.get(`https://ecommerce.routemisr.com/api/v1/categories`)
        console.log(data, 'cateee');
        setCategory(data.data)
    }


    useEffect(() => {
        ShowCatergory()
    }, [])

    return (
        <>
            <Helmet>
                <title>Categories page</title>
            </Helmet>
            <div className="h-100">.</div>
            <CategoriesSlider />

            {category.map(cat => <div className="container">
                <div className="row  ">
                    <div className="d-flex">
                        <div key={''} className=" product px-2 py-3   col-md-4">
                            <img src={cat.image} height={'200'} className='w-100  mb-2 cursor-pointer' alt="categories" />
                            <h5>{cat.name}</h5>
                        </div>
                    </div>
                </div>
            </div>

            )}
        </>
    )
}

//                 <div className="container">
//     <div className="row">
//         <div className="col-md-4">
//         <div key={''} className="cat px-1">
//             <img src={cat.image} height={'200'} className='w-100 mb-2 ' alt="" />
//             <h5>{cat.name}</h5>
//         </div>
//         </div>
//     </div>
// </div>