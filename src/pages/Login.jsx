import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import "../styles/login.scss";

const Login = () => {
     return (
          <div className="form-login">
               <div>
                    <div className="login_left">
                         <div className="title-left">Sign in</div>
                    </div>
                    <div className="login_right">
                         <div className="title-right">Sign in</div>

                         <Form className="auth__form">
                              <h3 className="fw-bold mb-4 text-center">Sign In</h3>

                              <FormGroup className="group-input">
                                   <input type="text" className="form-input" placeholder=" " />
                                   <label className="form-label">User Name</label>
                              </FormGroup>

                              <FormGroup className="group-input">
                                   <input type="password" className="form-input" placeholder=" " />
                                   <label className="form-label">Password</label>
                              </FormGroup>
                              <FormGroup className="group-input">
                                   <button className="btn ">Change Password</button>
                                   <button className="btn create-btn">Sign In</button>
                              </FormGroup>
                              <button className="btn-links connect-fb">
                                   <i className="ri-facebook-fill"></i> Sign up with facebook
                              </button>
                              <button className="btn-links connect-gg">
                                   <i className="ri-google-fill"></i> Sign up with google
                              </button>
                              <p className="text-center">
                                   Don't have an account?
                                   <Link to="/register"> Create an account</Link>
                              </p>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Login;
