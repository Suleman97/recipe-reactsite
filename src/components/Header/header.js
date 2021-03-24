import React, { Component } from 'react';
import About from '../../pages/About/about'
import Home from '../../pages/Home/home'
import brand from './logo.png'
// import { Navbar, Nav } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faYoutube, faFacebookSquare, faTwitter, faInstagram
}
    from "@fortawesome/free-brands-svg-icons";
import { BrowserRouter, Route, Link } from 'react-router-dom'

class header extends Component {
    render() {
        return (
            <>
                <BrowserRouter>
                    <nav id="main-nav">
                        <div class="container">
                            <img src={brand} alt="NewsGrid" class="logo" />
                            <div class="social">
                                <a href="http://facebook.com" target="_blank"
                                ><FontAwesomeIcon icon={faFacebookSquare} size="2x" color="grey" /></a>
                                <a href="http://twitter.com" target="_blank"
                                ><FontAwesomeIcon icon={faTwitter} size="2x" className="ml-2" color="grey" /></a>
                                <a href="http://instagram.com" target="_blank"
                                ><FontAwesomeIcon icon={faInstagram} size="2x" className="ml-2" color="grey" /></a>
                                <a href="http://youtube.com" target="_blank"
                                ><FontAwesomeIcon icon={faYoutube} size="2x" className="ml-2" color="grey" /></a>
                            </div>
                            <ul>
                                <li><a class="current" href="/home">Home</a></li>
                                <li><a href="/about">About</a></li>
                            </ul>
                        </div>
                    </nav>
                    <Route exact path="/home" component={Home} />
                     <Route path="/about" component={About} /> 
                </BrowserRouter>
                {/* <BrowserRouter>
                    <Navbar bg="" variant="light" fixed="top" className="container">
                        <Navbar.Brand href="#home" className="col-md-6"><img src={brand} alt="logo" /></Navbar.Brand>
                        <div className="col-md-3">
                            <a href="https://www.facebook.com"><FontAwesomeIcon icon={faFacebookSquare} size="2x" color="grey" /></a>
                            <a href="https://www.instagram.com"><FontAwesomeIcon icon={faInstagram} size="2x" className="ml-2" color="grey" /></a>
                            <a href="https://www.twitter.com"><FontAwesomeIcon icon={faTwitter} size="2x" className="ml-2" color="grey" /></a>
                            <a href="https://www.youtube.com"><FontAwesomeIcon icon={faYoutube} size="2x" className="ml-2" color="grey" /></a>
                        </div>
                        <Nav>
                            <Link className="nav-item nav-link bg-danger text-white" to="/home"><b>Home</b></Link>
                            <Link className="nav-item nav-link" to="/about"><b>About</b></Link>
                        </Nav>
                    </Navbar>

                    <Route exact path="/home" component={Home} />
                     <Route path="/about" component={About} /> 
                </BrowserRouter> */}
            </>
        );
    }
}

export default header;