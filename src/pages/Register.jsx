import React from "react";
import { Link } from "react-router-dom";
import { Form, FormGroup } from "reactstrap";
import "../styles/register.scss";

const Register = () => {
     return (
          <div className="form-register">
               <div>
                    <div className="login_left">
                         <div className="title-left">SIGN UP</div>
                    </div>
                    <div className="login_right">
                         <div className="title-right">SIGN UP</div>

                         <Form className="auth__form">
                              <h3 className="fw-bold mb-4 text-center">Sign up</h3>

                              <FormGroup className="group-input">
                                   <input type="text" className="form-input" placeholder=" " />
                                   <label className="form-label">User Name</label>
                              </FormGroup>
                              <FormGroup className="group-input">
                                   <input type="email" className="form-input" placeholder=" " />
                                   <label className="form-label">Email</label>
                              </FormGroup>
                              <FormGroup className="group-input">
                                   <input type="password" className="form-input" placeholder=" " />
                                   <label className="form-label">Password</label>
                              </FormGroup>
                              <FormGroup className="group-input">
                                   <input type="password" className="form-input" placeholder=" " />
                                   <label className="form-label">Confirm Password</label>
                              </FormGroup>
                              <FormGroup className="group-input">
                                   <button className="btn change-btn">Change Method</button>
                                   <button className="btn create-btn">Create Account</button>
                              </FormGroup>
                              <button className="btn-links connect-fb">
                                   <i className="ri-facebook-fill"></i> Sign up with facebook
                              </button>
                              <button className="btn-links connect-gg">
                                   <i className="ri-google-fill"></i> Sign up with google
                              </button>

                              <p className="text-center ">
                                   Already have an account?
                                   <Link to="/login"> Login</Link>
                              </p>
                         </Form>
                    </div>
               </div>
          </div>
     );
};

export default Register;
