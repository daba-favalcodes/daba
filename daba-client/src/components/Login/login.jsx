import React, { useState } from "react";
import { Col, Form, Container } from "react-bootstrap";
import { toast, ToastContainer } from "react-toastify";
import { useNavigate } from "react-router-dom"
import "react-toastify/dist/ReactToastify.css";
import "../Signup/signupForm.css";
import "./login.css";
import ExploreButton from "../Buttton/button";
import Input from "../Form/input";
import { gql, useMutation } from "@apollo/client"
import { authVar } from '../Auth/cache'

const LOGIN_USER = gql`
mutation LoginUser($loginInput: loginUserInput) {
  loginUser(loginInput: $loginInput) {
    email,
    phoneNumber,
    _id,
    token
  }
}
`

const Login = () => {
  const navigate = useNavigate()

  const [loginValue, setLoginValue] = useState({
    email: "",
    password: "",
  });

  const [loginUser, { data, error }] = useMutation(LOGIN_USER)



  const handleChange = (e) => {
    setLoginValue({ ...loginValue, [e.target.name]: e.target.value });
  };

  const { email, password } = loginValue;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      return toast("complete the fields");
    }

    await loginUser({ variables: { loginInput: loginValue } })

    if (error) return toast(error.message)
    if (data) {

      authVar({ isAuth: true })

      localStorage.setItem('token', data.loginUser.token)
      localStorage.setItem('isAuth', true)

      navigate('/')
      //client.writeData({ data: { authentication: { isAuth: true, token: data.token, id: data._id } } })
    }

  };

  return (
    <div className="body">
      <div className="card cards">
        <div className="header">
          Devcareer
        </div>
        <h1 className="head">Login</h1>
        <form action="" className="form">
          <div className="form-group">
            <input type="text" placeholder="email" className="form-control" />
          </div>
          <div className="form-group">
            <input type="text" placeholder="password" className="form-control" />
          </div>
          <ExploreButton
                  type="submit"
                  text="Login"
                  classname="btn"
                  onSubmit={handleSubmit}
                />
        </form>
      <div className="social">
        <p>or continue with these social profile</p>
        <div className="d-flex">

        </div>
      </div>
      <div className="register">
        <p>Don't have an account yet? <a href="#">Register</a></p>
      </div>
      </div>
      {/* <Container>
        <div className=" headerText" >
          <div>
            <h4>Join thousands of learners from around the world </h4>
            <p>Master web development by making real-life projects. There are multiple paths for you to choose</p>
          </div>
        </div>
        <div className="d-flex justify-content-center align-items-center formArea" style={{ height: "40vh" }}>
          <ToastContainer />
          <Form className="form" onSubmit={handleSubmit}>
            <Col xs="auto">
              <Input
                classname="p-4"
                type="email"
                name="email"
                placeholder="enter a valid email"
                onChange={handleChange}
                className
              />

              <Input
                classname="p-4"
                type="password"
                name="password"
                placeholder="enter your password"
                onChange={handleChange}
              />

              <div className="btnArea mt-4 ">
                
              </div>
            </Col>
          </Form>
        </div>
      </Container> */}
    </div>
  );
};

export default Login