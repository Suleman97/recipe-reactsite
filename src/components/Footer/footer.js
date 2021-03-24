import React, { Component } from 'react';
import Logo from './logo_light.png'
import {BrowserRouter, Link, Route} from 'react-router-dom'
// import './footer.css'

class footer extends Component {
    render() {
        return (
            <footer id="main-footer" class="py-2">
            <div class="container footer-container">
              <div>
                <img src={Logo} alt="NewsGrid" />
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Velit
                  deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum
                  vitae.
                </p>
              </div>
              <div>
                <h3>Email Newsletter</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
                <form>
                  <input type="email" placeholder="Enter Email..." />
                  <input type="submit" value="Subscribe" class="btn btn-primary" />
                </form>
              </div>
              <div>
                <h3>Site Links</h3>
                <ul class="list">
                  <li><a href="#">Help & Support</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                  <li><a href="#">About Us</a></li>
                  <li><a href="#">Contact</a></li>
                </ul>
              </div>
              <div>
                <h2>Join Our Club</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi,
                  nesciunt!
                </p>
                <a href="#" class="btn btn-secondary">Join Now</a>
              </div>
              <div>
                <p>Copyright &copy; 2020, All Rights Reserved</p>
              </div>
            </div>
          </footer>
            // <div className="container-fluid bg-dark text-light">
            //     <div className="container row">
            //         <div className="col-md-3">
            //             <img src={Logo} alt="logo"></img>
            //             <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
            //                 Velit deserunt assumenda enim non? Ratione ipsum voluptates fuga eos earum vitae.
            //             </p>
            //         </div>
            //         <div className="col-md-3">
            //             <h3>Email Newsletter</h3>
            //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            //             <input type="email" placeholder="Enter Email..." /><br />
            //             <Button className="mt-2 bg-danger">Subscribe</Button>
            //         </div>
            //         <div className="col-md-3">
            //             <h3>Site Links</h3><br />
            //             <BrowserRouter>
            //                 <Link className="text-white" to="/help_support">Help $ Support</Link><br />
            //                 <Link className="text-white" to="/privacy">Privacy Policy</Link> <br/>
            //                 <Link className="text-white" to="/about">About US</Link> <br/>
            //                 <Link className="text-white" to="/contact">Contact</Link>

            //                 {/* <Route exact path="/help_support" component={Help} /> */}
            //                 {/* <Route path="/privacy" component={Privacy} /> */}
            //             </BrowserRouter>
            //         </div>
            //         <div className="col-md-3">
            //             <h3>Join Our Club</h3>
            //             <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, nesciunt!</p>
            //             <Button className="bg-warning">Join New</Button>
            //         </div>
            //     </div>
            //     <div className="bg-secondary container">
            //         <p className="center mb-2">Copyright © 2020, All Rights Reserved</p>
            //     </div>
                
            // </div>
        );
    }
}

export default footer;