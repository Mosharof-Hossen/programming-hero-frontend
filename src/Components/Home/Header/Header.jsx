import React from 'react';
import { Button, Form, FormControl, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Logo from "../../../images/logo.png"
import { isAuthenticated, signOut } from '../../../utils/auth';
import Banner from './Banner/Banner';
import "./Header.css"
const Header = () => {
    let logOut = () => {
        signOut()
        window.location.reload(true);
    }
    return (
        <div className="header-style">
            <div >
                <  Navbar className="px-3" style={{ backgroundColor: "rgba(0,0,0,.3)", color: "white" }} expand="lg">
                    <Navbar.Brand className="text-white" to="/home"><img className="camera-logo mr-1" src={Logo} alt="" /> Hero Rider</Navbar.Brand>
                    <Navbar.Toggle style={{ color: "white" }} className="text-white" aria-controls="basic-navbar-nav" ><span className="fas fa-bars navbar-icon"></span></Navbar.Toggle>
                    <Navbar.Collapse className="text-white" id="basic-navbar-nav">
                        <Nav className="ml-auto text-white">
                            <Link className="mx-2" to="/home"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">Home</Button></Link>
                            <Link className="mx-2" to="/packages"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">Packages</Button></Link>
                            <Link className="mx-2" to="/admin"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">Admin</Button></Link>
                            <Link className="mx-2" to="/profile"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">Profile</Button></Link>
                            {
                                isAuthenticated() ? <Link className="mx-2" to="/"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary" onClick={() => logOut()}>Logout</Button></Link> : <Link className="mx-2" to="/register"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">Register</Button></Link>
                            }

                            {/* {
                        loggedInUser.name ? <Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">{loggedInUser.name}</Button> : <Link className="mx-2" to="/login"><Button style={{ width: "100%" }} className="header-btn text-white" variant="outline-primary">LogIn</Button></Link>
                    } */}


                        </Nav>

                    </Navbar.Collapse>
                </Navbar>
            </div>
            <Banner></Banner>
        </div >
    )
}

export default Header;
