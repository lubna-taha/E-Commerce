import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom';


const SavedRoutes = (props) => {
    let navigate = useNavigate;

    if (localStorage.getItem('userToken') == null) {
        <Navigate to={'/home'} />
        return props.children
    } else {
        return <Navigate to={'/login'} />
    }
}
export default SavedRoutes;