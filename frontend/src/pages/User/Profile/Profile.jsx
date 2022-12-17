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
                              <div className="card-header">Ảnh Đại Diện</div>
                              <div className="card-body text-center">
                                   <img
                                        className="img-account-profile rounded-circle mb-2"
                                        src={userInfo.avt}
                                        alt=""
                                   />
                                   <div className="small font-italic text-muted mb-4">
                                        JPG hoặc PNG không lớn hơn 5 MB
                                   </div>
                                   <button className="btn btn-primary" type="button">
                                        Tải lên ảnh mới
                                   </button>
                              </div>
                         </div>
                    </div>
                    <div className="col-xl-8">
                         <div className="card mb-4">
                              <div className="card-header">Chi tiết tài khoản</div>
                              <div className="card-body">
                                   <div>
                                        <div className="row gx-3 mb-3">
                                             <div className="col-md-6">
                                                  <label className="small mb-1">Họ</label>
                                                  <input
                                                       className="form-control"
                                                       readonly="False"
                                                       id="inputFirstName"
                                                       type="text"
                                                       value={userInfo.firstname}
                                                  />
                                             </div>

                                             <div className="col-md-6">
                                                  <label className="small mb-1">Tên</label>
                                                  <input
                                                       readonly="False"
                                                       className="form-control"
                                                       id="inputLastName"
                                                       type="text"
                                                       value={userInfo.lastname}
                                                  />
                                             </div>
                                        </div>

                                        <div className="mb-3">
                                             <label className="small mb-1">Địa chỉ email</label>
                                             <input
                                                  className="form-control"
                                                  readonly="False"
                                                  id="inputEmailAddress"
                                                  type="email"
                                                  value={userInfo.email}
                                             />
                                        </div>

                                        <div className="row gx-3 mb-3">
                                             <label className="small mb-1">Số điện thoại</label>
                                             <input
                                                  readonly="False"
                                                  className="form-control"
                                                  id="inputPhone"
                                                  type="tel"
                                                  value={userInfo.phonenumber}
                                             />
                                        </div>
                                        {/* <div className="row gx-3 mb-3">
                                             <label className="small mb-1">Số điện thoại</label>
                                             <input
                                                  readonly="False"
                                                  className="form-control"
                                                  id="inputPhone"
                                                  type="tel"
                                                  value={userInfo.phonenumber}
                                             />
                                        </div> */}
                                   </div>

                                   {/* <button className="btn btn-primary" type="button">
                                        Lưu thay đổi
                                   </button> */}
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     );
};

export default Profile;
