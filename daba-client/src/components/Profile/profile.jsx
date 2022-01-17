import React, {useEffect} from 'react'
import { useLazyQuery, gql } from "@apollo/client"
import TableData from './table'
import {useNavigate} from "react-router-dom"
import './cart.css'

// const PROFILE_QUERY = gql`
// query GetProfile {
//     getProfile {
      
//         _id
//         email
//         image
//         name
//         bio
//         phoneNumber
//         token
//     }
//   }
// `

const TableLayout = () => {

    // const navigate = useNavigate()

    // // const [loadProfile, { data , loading}] = useLazyQuery(PROFILE_QUERY);

    // useEffect(() => {
    //     loadProfile()
    // },[loadProfile]);

    const onClick = () => {
        console.log("hey")
        // navigate("/update")
    }

    return (
        // Profile
        

        // Update Profile
        <div className="profileDiv">
            <h2>Personal Info</h2>
            <p>Basic info like name and photo</p>
            <div className="card">
                <div className="header">
                    <div className="text">
                        <h3>Profile</h3>
                        <p>some information will be visible to others</p>
                    </div>
                    <div className="button">
                        <button className="edit-btn">Edit</button>
                    </div>
                </div>
                <div className="d-flexx">
                    <h5>PHOTO</h5>
                    <p className='right'>Image</p>
                </div>
                <div className="d-flexx">
                    <h5>NAME</h5>
                    <p className='right'>Xanthe Neil</p>
                </div>
                <div className="d-flexx">
                    <h5>BIO</h5>
                    <p className='right'>I'm a software developer and a fan of devchallenge</p>
                </div>
                <div className="d-flexx">
                    <h5>PHONE</h5>
                    <p className='right'>09012345678</p>
                </div>
                <div className="d-flexx">
                    <h5>EMAIL</h5>
                    <p className='right'>xanthe.neil@gmail.com</p>
                </div>
                <div className="d-flexx">
                    <h5>PASSWORD</h5>
                    <p className='right'>***********</p>
                </div>
            </div>
            </div>

            // {/* <div className="profileText">
            //     <div>
            //         <h2>Profile</h2>
            //     </div>
            //     <div>
            //     <button
            //       type="submit"
            //       className="bg-dark btn editBtn "
            //       onClick={onClick}
            //     >Edit</button>
            //     </div>
            // </div> */}
            // {/* {loading  || !data ? <h1>loading ....</h1> : <TableData getProfile={data.getProfile}/>} */}
            // {/* <TableData getProfile={data.getProfile}/> */}

    )


}

export default TableLayout