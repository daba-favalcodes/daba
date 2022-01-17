import React from "react";
import { Container } from "react-bootstrap"
import logo from "../../assests/outline_remove_done_black_24dp.png";
import "./header.css"
import ExploreButton from "../Buttton/button";
import { useNavigate } from "react-router-dom"

const Header = () => {

    const navigate = useNavigate()

    const logOut = async () => {
        localStorage.setItem('token', "")
        localStorage.setItem('isAuth', "")

        navigate("/login")
    }

    return (
        <div>
            <Container>
                <div className="header">
                    <div className="headerLogo" >
                        <img src={logo} alt="nav brand logo" />
                    </div>
                    <div className="logDiv">

                        <button
                            type="submit"
                            className="bg-dark btn editBtn "
                            onClick={logOut}
                        >Log out</button>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Header
