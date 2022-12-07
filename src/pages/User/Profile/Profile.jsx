import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getUserDetails } from "../../../redux/Actions/UserActions";
import "../../../styles/profile.scss";
const Profile = () => {
     const dispatch = useDispatch();
     const userLogin = useSelector((state) => state.userLogin);

     const { userInfo } = userLogin;
     useEffect(() => {
          dispatch(getUserDetails("profile"));
     }, [dispatch]);
     return (
          <div className="container-xl px-4 mt-4">
               <hr className="mt-0 mb-4" />
               <div className="row">
                    <div className="col-xl-4">
                         <div className="card mb-4 mb-xl-0">
                              <div className="card-header">Profile Picture</div>
                              <div className="card-body text-center">
                                   <img
                                        className="img-account-profile rounded-circle mb-2"
                                        src={userInfo.avt}
                                        alt=""
                                   />
                                   <div className="small font-italic text-muted mb-4">
                                        JPG or PNG no larger than 5 MB
                                   </div>
                                   <button className="btn btn-primary" type="button">
                                        Upload new image
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="col-xl-8">
                         <div className="card mb-4">
                              <div className="card-header">Account Details</div>
                              <div className="card-body">
                                   <div>
                                        <div className="row gx-3 mb-3">
                                             <div className="col-md-6">
                                                  <label className="small mb-1">First name</label>
                                                  <input
                                                       className="form-control"
                                                       id="inputFirstName"
                                                       type="text"
                                                       placeholder="Enter your first name"
                                                       value={userInfo.firstname}
                                                  />
                                             </div>

                                             <div className="col-md-6">
                                                  <label className="small mb-1">Last name</label>
                                                  <input
                                                       className="form-control"
                                                       id="inputLastName"
                                                       type="text"
                                                       placeholder="Enter your last name"
                                                       value={userInfo.lastname}
                                                  />
                                             </div>
                                        </div>

                                        <div className="mb-3">
                                             <label className="small mb-1">Email address</label>
                                             <input
                                                  className="form-control"
                                                  id="inputEmailAddress"
                                                  type="email"
                                                  placeholder="Enter your email address"
                                                  value={userInfo.email}
                                             />
                                        </div>

                                        <div className="row gx-3 mb-3">
                                             <label className="small mb-1">Phone number</label>
                                             <input
                                                  className="form-control"
                                                  id="inputPhone"
                                                  type="tel"
                                                  placeholder="Enter your phone number"
                                                  value={userInfo.phonenumber}
                                             />
                                        </div>
                                   </div>

                                   <button className="btn btn-primary" type="button">
                                        Save changes
                                   </button>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profile;
