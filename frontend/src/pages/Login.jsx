import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../styles/login.scss";
import { useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/Actions/UserActions";
import Loading from "../components/LoadingError/Loading";

const Login = () => {
     const history = useNavigate();
     const location = useLocation();
     const [email, setEmail] = useState("");
     const [password, setPassword] = useState("");
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
     const userLogin = useSelector((state) => state.userLogin);
     const { error, loading, userInfo } = userLogin;
     console.log(userInfo);
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
     const submitHandler = (e) => {
          e.preventDefault();
          dispatch(login(email, password));
     };
     return (
          <div className="form-login">
               <div>
                    <div className="login_left">
                         <div className="title-left">SIGN IN </div>
                    </div>
                    <div className="login_right">
                         <div className="title-right">SIGN IN </div>

                         <form onSubmit={submitHandler} className="login__container">
                              {/* {error && <Message variant="alert-danger">{error}</Message>} */}
                              {loading && <Loading />}
                              <div className="login__content row">
                                   <div className="col-12 text-center fw-bold fs-1 mb-4">
                                        Đăng Nhập
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
                                        <span>Hiện Thị Mật Khẩu</span>
                                   </div>
                                   <div className="col-12">
                                        <button
                                             className="login-btn"
                                             type="submit"
                                             // onClick={() => {
                                             //      this.handleLogin();
                                             // }}
                                        >
                                             Login
                                        </button>
                                   </div>
                                   <div className="col-12">
                                        <Link className="forgot__password" to={"/forgot-password"}>
                                             Bạn đã quên mật khẩu
                                        </Link>
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
                                             Bạn Chưa có tài khoản
                                             <Link
                                                  to={
                                                       redirect
                                                            ? `/register?redirect=${redirect}`
                                                            : "/register"
                                                  }
                                                  className="fw-bold"
                                             >
                                                  {" "}
                                                  Đăng Ký Tại Đây
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

export default Login;
