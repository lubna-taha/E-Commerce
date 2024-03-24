import React, { useContext } from 'react'
import styles from './Checkout.module.css'
import { Formik, useFormik } from 'formik'
import { CartContent } from './../../Context/CartContext';

import * as Yup from "yup";

export default function Checkout() {
    const validationSchema = Yup.object({


        details: Yup.string()
            .required("details is required"),



        phone: Yup.string()
            .matches(/^01[0125][0-9]{8}$/, "phone number is invalid")
            .required("Phone is required"),

        city: Yup.string()
            .min(3, "city minLength is 3")
            .max(10, "max length is 10")
            .required("city is required"),
    })

    let { onlinePayment } = useContext(CartContent)

    async function payment(values) {
        let { data } = await onlinePayment(values)
        console.log(data, 'payment F');
        window.location.href = data.session.url
    }

    let formik = useFormik({
        initialValues: {
            details: "",
            phone: "",
            city: "",




        },
        validationSchema,
        onSubmit: payment
    })


    return (
        <>
            <div className="container">
                <h2>Shipping Address</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="form-group mb-3">
                        <label htmlFor="">Details</label>
                        <input type="text" className='form-control' id='details' name='details' value={formik.values.details} onChange={formik.handleChange} onBlur={formik.handleBlur} />
                        {formik.errors.details && formik.touched.details ? (
                            <div className="alert  alert-danger">
                                {" "}
                                {formik.errors.name}{" "}
                            </div>
                        ) : null}

                    </div>

                    <div className="form-group mb-3">
                        <label htmlFor="">Phone</label>
                        <input type="text" className='form-control' id='phone' name='phone' value={formik.values.phone} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                        {formik.errors.phone && formik.touched.phone ? (
                            <div className="alert  alert-danger">
                                {" "}
                                {formik.errors.phone}{" "}
                            </div>
                        ) : null}


                    </div>
                    <div className="form-group mb-3">
                        <label htmlFor="">City</label>
                        <input type="text" className='form-control' id='city' name='city' value={formik.values.city} onChange={formik.handleChange} onBlur={formik.handleBlur} />

                        {formik.errors.city && formik.touched.city ? (
                            <div className="alert  alert-danger">
                                {" "}
                                {formik.errors.city}{" "}
                            </div>
                        ) : null}


                    </div>
                    <button className='btn bg-main w-100 text-white'>Pay now</button>
                </form>
            </div>
        </>
    )
}
