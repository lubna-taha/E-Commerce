import React from 'react'
import styles from './Home.module.css'
import Cart from './../Cart/Cart';
import MainSlider from '../MainSlider/MainSlider';
import CategoriesSlider from '../CategoriesSlider/CategoriesSlider';
import { Helmet } from 'react-helmet';
import FeatureProducts from '../FeatureProducts/FeatureProducts';
const Home = () => {
    return (
        <>
            <Helmet>
                <title>Home page</title>
            </Helmet>
            <div className="h-50">.</div>
            <MainSlider />
            <CategoriesSlider/>
            <input _ngcontent-fus-c6="" type="text" placeholder="search...." className="w-75 mx-auto form-control my-5 ng-untouched ng-pristine ng-valid "></input>

            <FeatureProducts />

        </>
    
    )
}
export default Home