import React, { useState } from 'react'
import { Col, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Form/signupInput";
import ExploreButton from "../Buttton/button";
import "../Signup/signupForm.css"
import { gql, useMutation, useApolloClient } from "@apollo/client"
import FilePicker from "../Form/filePicker";
import './update.css'



const UPDATE_USER = gql`
mutation Mutation($updateInput: updateProfileInput) {
    updateProfile(updateInput: $updateInput) {
      email,
      _id,
      name
      address
    }
  }
`


const UpdateForm = (props) => {
    const client = useApolloClient()
    const [updateData, setupdateData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        bio: "",
    });


    const [updateUser, { data, error }] = useMutation(UPDATE_USER)


    const handleChange = (e) => {
        setupdateData({ ...updateData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(updateData)


        updateUser({ variables: { userInput: updateData } })

        if (error) return toast(error.message)
        if (data) client.writeData({ data: { authentication: { isAuth: true, token: data.token, id: data._id } } })

    };

    return (
        

        // Update Profile
        <div className="profileDiv">
            <div className="back">
                <button className="back-btn">Back</button>
            </div>
            <div className="card update-card">
                <div className="header">
                    <div className="text">
                        <h3>Change Info</h3>
                        <p>Changes will be referred to every services</p>
                    </div>
                </div>
                <div className="d-flexx">
                    <img src="" alt="" className='profile-img'/>
                    <p className='right'>change Photo</p>
                </div>
                <form action="" className="update-form">
                    <div className="form-group">
                        <label htmlFor="Name">Name</label>
                        <input type="text" placeholder='type your name...' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bio">Bio</label>
                        <textarea type="text" placeholder='type your bio...' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="phone">Phone</label>
                        <input type="tel" placeholder='type your phone number...' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email</label>
                        <input type="email" placeholder='type your email...' className="form-control" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" placeholder='*******' className="form-control" />
                    </div>
                    <button className="save-btn">Save</button>
                </form>
            </div>
            </div>
        // <div>
        //     <Container>
        //         <div className="formArea  ">
        //             <ToastContainer className="toast" />
        //             <Form method="post" className="form" onSubmit={handleSubmit}>
        //                 <Col xs="auto">
        //                     <Form.Label column sm={2} className="label" >name</Form.Label>
        //                     <Input
        //                         classname="p-4"
        //                         label="name"
        //                         type="text"
        //                         name="name"
        //                         placeholder="enter your full name"
        //                         labelClassname="label"
        //                         onChange={handleChange}
        //                     />

        //                     <Form.Label column sm={2} className="label" >Bio</Form.Label>
        //                     <Input
        //                         classname="p-4"
        //                         label="bio"
        //                         type="text"
        //                         name="bio"
        //                         labelClassname="label"
        //                         placeholder="enter bio"
        //                         onChange={handleChange}
        //                     />

        //                     <Form.Label column sm={2} className="label" >Phone</Form.Label>
        //                     <Input
        //                         classname="p-4"
        //                         label="phone"
        //                         type="text"
        //                         name="phoneNumber"
        //                         placeholder="enter phone"
        //                         labelClassname="label"
        //                         onChange={handleChange}
        //                     />


        //                     <Form.Label column sm={2} className="label" >Email</Form.Label>
        //                     <Input
        //                         classname="p-4"
        //                         label="Email"
        //                         type="email"
        //                         name="email"
        //                         placeholder="enter your email"
        //                         labelClassname="label"
        //                         onChange={handleChange}
        //                     />


        //                     <Form.Label column sm={2} className="label" >Password</Form.Label>
        //                     <Input
        //                         classname="p-4"
        //                         label="password"
        //                         type="password"
        //                         name="password"
        //                         placeholder="enter password"
        //                         labelClassname="label"
        //                         onChange={handleChange}
        //                     />

        //                     <Form.Label column sm={2} className="label" >Image</Form.Label>
        //                     <FilePicker classname="file" name="file" label="product Image" />

        //                     <ExploreButton type="submit" text="submit" classname="bg-dark" />
        //                 </Col>
        //             </Form>
        //         </div>
        //     </Container>
        // </div>
    );
}

export default UpdateForm