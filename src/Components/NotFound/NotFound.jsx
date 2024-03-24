import React from 'react'
import styles from './NotFound.module.css'

import notFoundImg from '../../assets/images/error.svg'
const NotFound = () => {
    return (
        <>
            <section className="container my-5">
                <img src={notFoundImg} alt="notFound" className='w-100' />
            </section>
        </>
    )
}
export default NotFound;