
import React from 'react'
import styles from './Wishlist.module.css'
import { Helmet } from 'react-helmet';
export default function Wishlist() {
    return (
        <>
        
            <Helmet>
                <title>Wish list page</title>
            </Helmet>
            <div className="h-100"></div>
            <div className="container mt-5">
                <div className="bg-success p-5 text-white">
                    <h2>Welcome to your wish list  <i className="fa-solid fa-heart "></i></h2>
                </div>
            </div>

        </>
    )
}
