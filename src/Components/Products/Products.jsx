import React from 'react'
import styles from './Products.module.css'
import FeatureProducts from '../FeatureProducts/FeatureProducts'
import { Helmet } from 'react-helmet'
export default function Products() {
    return (
        <>
            <Helmet>
                <title>Products page</title>
            </Helmet>
            <div className="h-50">.</div>
            <input _ngcontent-fus-c6="" type="text" placeholder="search...." className="w-75 mx-auto form-control my-5 ng-untouched ng-pristine ng-valid "></input>
            <FeatureProducts />
        </>
    )
}
