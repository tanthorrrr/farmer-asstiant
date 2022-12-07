import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Loading from "../components/LoadingError/Loading";
import { register } from "../redux/Actions/UserActions";

import "react-datepicker/dist/react-datepicker.css";

import "../styles/register.scss";

const Register = () => {
     const history = useNavigate();
     const location = useLocation();
     const [firstname, setFirstName] = useState("");
     const [lastname, setLastName] = useState("");
     const [phonenumber, setPhoneNumber] = useState("");
     const [email, setEmail] = useState("");
     const [idRole, setIdRole] = useState("");
     const [password, setPassword] = useState("");
     const [cfpassword, setCfPasswod] = useState("");

     const [isShowPassword, setIsShowPassword] = useState(true);
     const dispatch = useDispatch();
     const handleShowPassword = () => {
          let x = document.getElementById("myPassword");
          if (x.type === "password") {
               setIsShowPassword(false);
          } else {
               setIsShowPassword(true);
          }
     };
     const redirect = location.search ? location.search.split("=")[1] : "/";
     const userRegister = useSelector((state) => state.userRegister);
     const { error, loading, userInfo } = userRegister;

     useEffect(() => {
          if (userInfo) {
               if (userInfo.idRole !== 1) {
                    history(redirect);
               }
               if (userInfo.idRole === 1) {
                    history("/");
               }
          }
     }, [userInfo, history, redirect]);
     const handlerOptione = (e) => {
          const option = e.target.value;

          if (option === "3") {
               setIdRole("3");
          }
          if (option === "2") {
               setIdRole("2");
          }
          console.log(idRole);
     };
     const submitHandler = (e) => {
          e.preventDefault();
          dispatch(register(firstname, lastname, email, phonenumber, idRole, password));
     };

     return (
          <div className="form-register">
               <div>
                    <div className="login_left">
                         <div className="title-left">SIGN UP </div>
                    </div>
                    <div className="login_right">
                         <div className="title-right">SIGN UP </div>

                         <form onSubmit={submitHandler} className="login__container">
                              {/* {error && <Message variant="alert-danger">{error}</Message>} */}
                              {loading && <Loading />}
                              <div className="login__content row">
                                   <div className="col-12 text-center fw-bold fs-1 mb-4">
                                        Đăng Ký
                                   </div>

                                   <div className="col-7 form__group">
                                        <input
                                             type="text"
                                             className="form-input"
                                             placeholder=" "
                                             value={firstname}
                                             onChange={(e) => setFirstName(e.target.value)}
                                        />
                                        <label className="form-label">Họ </label>
                                   </div>
                                   <div className="col-5 form__group">
                                        <input
                                             type="text"
                                             className="form-input"
                                             placeholder=" "
                                             value={lastname}
                                             onChange={(e) => setLastName(e.target.value)}
                                        />
                                        <label className="form-label">Tên</label>
                                   </div>

                                   <div className="col-12 form__group">
                                        <input
                                             type="email"
                                             className="form-input"
                                             placeholder=" "
                                             value={email}
                                             onChange={(e) => setEmail(e.target.value)}
                                        />
                                        <label className="form-label">Email</label>
                                   </div>
                                   <div className="col-8 form__group">
                                        <input
                                             type="tel"
                                             className="form-input"
                                             placeholder=" "
                                             value={phonenumber}
                                             onChange={(e) => setPhoneNumber(e.target.value)}
                                        />
                                        <label className="form-label">Số điện thoại</label>
                                   </div>
                                   <div className="col-4 form__group">
                                        <select className="idRole" onChange={handlerOptione}>
                                             <option>--- Bạn là ---</option>
                                             <option value="2"> Nông dân </option>
                                             <option value="3"> Thương lái </option>
                                        </select>
                                   </div>
                                   <div className="col-12 form__group">
                                        <div className="custom-input-password">
                                             <input
                                                  id="myPassword"
                                                  type={isShowPassword ? "password" : "text"}
                                                  className="form-input"
                                                  placeholder=" "
                                                  value={password}
                                                  onChange={(e) => setPassword(e.target.value)}
                                             />
                                             <label className="form-label">Mật Khẩu</label>
                                        </div>
                                   </div>
                                   <div className="col-12 form__group">
                                        <div className="custom-input-password">
                                             <input
                                                  id="myPassword"
                                                  type={isShowPassword ? "password" : "text"}
                                                  className="form-input"
                                                  placeholder=" "
                                                  value={cfpassword}
                                                  onChange={(e) => setCfPasswod(e.target.value)}
                                             />
                                             <label className="form-label">
                                                  Xác Nhận Lại Mật Khẩu
                                             </label>
                                        </div>
                                   </div>

                                   {error && (
                                        <div className="col-12" style={{ color: "red" }}>
                                             {error}
                                        </div>
                                   )}
                                   <div className="col-12">
                                        <input
                                             type="checkbox"
                                             onClick={() => {
                                                  handleShowPassword();
                                             }}
                                        />
                                        <span> Hiển Thị Mật Khẩu</span>
                                   </div>
                                   <div className="col-12">
                                        <button
                                             className="login-btn"
                                             type="submit"
                                             // onClick={() => {
                                             //      this.handleLogin();
                                             // }}
                                        >
                                             Đăng Ký
                                        </button>
                                   </div>

                                   <div className="col-12 text-center">
                                        <span className="">Có thể đăng nhập bằng :</span>
                                   </div>
                                   <div className="col-12 social-login ">
                                        <i className=" ri-google-fill google  "></i>
                                        <i className="ri-facebook-fill facebook"></i>
                                   </div>
                                   <div className="col-12 text-center">
                                        <span className="log__register">
                                             Bạn đã có tài khoản ?
                                             <Link
                                                  to={
                                                       redirect
                                                            ? `/login?redirect=${redirect}`
                                                            : "/login"
                                                  }
                                             >
                                                  Đăng Nhập
                                             </Link>
                                        </span>
                                   </div>
                              </div>
                         </form>
                    </div>
               </div>
          </div>
     );
};

export default Register;
