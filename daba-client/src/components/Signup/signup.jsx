import React, { useState } from 'react'
import { Col, Form, Container } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Input from "../Form/signupInput";
import ExploreButton from "../Buttton/button";
import { Link, useNavigate } from "react-router-dom";
import FilePicker from "../Form/filePicker";
import "./signupForm.css"
import { gql, useMutation } from "@apollo/client"
import { authVar } from '../Auth/cache'
import axios from 'axios'


const SIGNUP_USER = gql`
    mutation CreateUser($userInput: createUserInput) {
        createUser(userInput: $userInput) {
        email,
        name,
        bio,
        phoneNumber,
        token,
        
        _id
        }
    }
`


const SignupForm = (props) => {

    const navigate = useNavigate()

    const [signupData, setSignupData] = useState({
        name: "",
        email: "",
        password: "",
        phoneNumber: "",
        bio: "",
    });

    const { name, email, password } = signupData;


    const [signupUser, { data, error }] = useMutation(SIGNUP_USER)

    if (error)  toast(error.message)
    if (data) {

        console.log(data)

        authVar({ isAuth: false })

        localStorage.setItem('token', data.createUser.token)
        localStorage.setItem('isAuth', true)
        //client.writeData({ data: { authentication: { isAuth: true, token: data.token, id: data._id } } })

        console.log("heree")
        navigate("/")
    }

    const handleChange = (e) => {
        setSignupData({ ...signupData, [e.target.name]: e.target.value });
    };

    const uploadImage = async  () => {
        const data = new FormData();
        data.append("file", signupData.image)
        data.append("upload_preset", "gabbie-daba")
        data.append("cloud_name", "bookies")
        
         axios.post("https://res.cloudinary.com/demo/image/upload/bookies", data)
         .then(res => res.json())
         .then(data => {
             console.log(data)
            setSignupData({...signupData, image: data.url})
         })
         .catch(err => {
             console.log(err)
             toast("image was not uploaded")
             setSignupData({...signupData, image: ""})
         })
    }

    const handleFile = (e) => {
        setSignupData({ ...signupData, image: e.target.files[0]})
    }


    const handleSubmit = async (e) => {
        e.preventDefault();
        console.log(signupData)

        if (!name || !email || !name || !password) {
            return toast("fill in the correct value");
        }

        await uploadImage()

        await signupUser({ variables: { userInput: signupData } })


    };

    
    return (
        <div className="all">
            <div className="formArea  ">
                <ToastContainer className="toast" />
                <Form method="post" className="form" onSubmit={handleSubmit}>
                    <Col xs="auto">
                        <Form.Label column sm={2} className="label" >name</Form.Label>
                        <Input
                            classname="p-4"
                            label="name"
                            type="text"
                            name="name"
                            placeholder="enter your full name"
                            labelClassname="label"
                            onChange={handleChange}
                        />

                        <Form.Label column sm={2} className="label" >Bio</Form.Label>
                        <Input
                            classname="p-4"
                            label="bio"
                            type="text"
                            name="bio"
                            labelClassname="label"
                            placeholder="enter bio"
                            onChange={handleChange}
                        />

                        <Form.Label column sm={2} className="label" >Phone</Form.Label>
                        <Input
                            classname="p-4"
                            label="phone"
                            type="text"
                            name="phoneNumber"
                            placeholder="enter phone"
                            labelClassname="label"
                            onChange={handleChange}
                        />


                        <Form.Label column sm={2} className="label" >Email</Form.Label>
                        <Input
                            classname="p-4"
                            label="Email"
                            type="email"
                            name="email"
                            placeholder="enter your email"
                            labelClassname="label"
                            onChange={handleChange}
                        />


                        <Form.Label column sm={2} className="label" >Password</Form.Label>
                        <Input
                            classname="p-4"
                            label="password"
                            type="password"
                            name="password"
                            placeholder="enter password"
                            labelClassname="label"
                            onChange={handleChange}
                        />

                        <Form.Label column sm={2} className="label" >Image</Form.Label>
                        <FilePicker classname="file" name="image" label="profile image" onChange={handleFile} />

                        <ExploreButton type="submit" text="submit" classname="bg-dark" />
                    </Col>
                </Form>
            </div>
        </div>
    );
}

export default SignupForm