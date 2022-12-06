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
          <div class="container-xl px-4 mt-4">
               <hr class="mt-0 mb-4" />
               <div class="row">
                    <div class="col-xl-4">
                         <div class="card mb-4 mb-xl-0">
                              <div class="card-header">Profile Picture</div>
                              <div class="card-body text-center">
                                   <img
                                        class="img-account-profile rounded-circle mb-2"
                                        src={userInfo.avt}
                                        alt=""
                                   />
                                   <div class="small font-italic text-muted mb-4">
                                        JPG or PNG no larger than 5 MB
                                   </div>
                                   <button class="btn btn-primary" type="button">
                                        Upload new image
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div class="col-xl-8">
                         <div class="card mb-4">
                              <div class="card-header">Account Details</div>
                              <div class="card-body">
                                   <div>
                                        <div class="mb-3">
                                             <label class="small mb-1" for="inputUsername">
                                                  Username (how your name will appear to other users
                                                  on the site)
                                             </label>
                                             <input
                                                  class="form-control"
                                                  id="inputUsername"
                                                  type="text"
                                                  placeholder="Enter your username"
                                                  value="username"
                                             />
                                        </div>

                                        <div class="row gx-3 mb-3">
                                             <div class="col-md-6">
                                                  <label class="small mb-1" for="inputFirstName">
                                                       First name
                                                  </label>
                                                  <input
                                                       class="form-control"
                                                       id="inputFirstName"
                                                       type="text"
                                                       placeholder="Enter your first name"
                                                       value={userInfo.firstname}
                                                  />
                                             </div>

                                             <div class="col-md-6">
                                                  <label class="small mb-1" for="inputLastName">
                                                       Last name
                                                  </label>
                                                  <input
                                                       class="form-control"
                                                       id="inputLastName"
                                                       type="text"
                                                       placeholder="Enter your last name"
                                                       value={userInfo.lastname}
                                                  />
                                             </div>
                                        </div>

                                        <div class="row gx-3 mb-3">
                                             <div class="col-md-6">
                                                  <label class="small mb-1" for="inputOrgName">
                                                       Organization name
                                                  </label>
                                                  <input
                                                       class="form-control"
                                                       id="inputOrgName"
                                                       type="text"
                                                       placeholder="Enter your organization name"
                                                  />
                                             </div>

                                             <div class="col-md-6">
                                                  <label class="small mb-1" for="inputLocation">
                                                       Location
                                                  </label>
                                                  <input
                                                       class="form-control"
                                                       id="inputLocation"
                                                       type="text"
                                                       placeholder="Enter your location"
                                                  />
                                             </div>
                                        </div>

                                        <div class="mb-3">
                                             <label class="small mb-1" for="inputEmailAddress">
                                                  Email address
                                             </label>
                                             <input
                                                  class="form-control"
                                                  id="inputEmailAddress"
                                                  type="email"
                                                  placeholder="Enter your email address"
                                                  value={userInfo.email}
                                             />
                                        </div>

                                        <div class="row gx-3 mb-3">
                                             <label class="small mb-1" for="inputPhone">
                                                  Phone number
                                             </label>
                                             <input
                                                  class="form-control"
                                                  id="inputPhone"
                                                  type="tel"
                                                  placeholder="Enter your phone number"
                                                  value={userInfo.phonenumber}
                                             />
                                        </div>

                                        <div class="col-md-6">
                                             <label class="small mb-1" for="inputBirthday">
                                                  Birthday
                                             </label>
                                             <input
                                                  class="form-control"
                                                  id="inputBirthday"
                                                  type="text"
                                                  name="birthday"
                                                  placeholder="Enter your birthday"
                                             />
                                        </div>
                                   </div>

                                   <button class="btn btn-primary" type="button">
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
