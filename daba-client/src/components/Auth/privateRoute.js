import React from "react";
import { Navigate } from "react-router-dom";
import {useReactiveVar} from "@apollo/client"
import {authVar} from './cache'

const PrivateRoute = ({ children}) => {
    let  storageAuth = localStorage.getItem('isAuth')

    return  !storageAuth ?   <Navigate to='/login' /> : children 
};

export default PrivateRoute;
