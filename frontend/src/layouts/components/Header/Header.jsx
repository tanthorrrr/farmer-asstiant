import React, { useRef, useState } from "react";
import Tippy from "@tippyjs/react";
import "./Header.scss";
import "tippy.js/dist/tippy.css";
import { motion } from "framer-motion";
import userDefault from "../../../assets/images/default_user.png";
import { Container, Row } from "reactstrap";
import { Link, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../../redux/Actions/UserActions";
// import Search from "../Search/Search";
import logo from "../../../assets/images/logo.png";
const nav_links = [
     {
          path: "/",
          display: "Trang Chủ",
     },
     {
          path: "/products",
          display: "Sản Phẩm",
     },
     {
          path: "/blog",
          display: "Bài Viết",
     },
     {
          path: "/feedback",
          display: "Phản Hồi",
     },
];
const Header = () => {
     const menuRef = useRef(null);
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
     const [isActive, setIsActive] = useState(false);
     const dispatch = useDispatch();
     const menuToggle = () => {
          menuRef.current.classList.toggle("active__menu");
     };
     const handleLogout = () => {
          dispatch(logout());
     };
     return (
          <header className="header">
               <Container>
                    <Row>
                         <div className="nav_wrapper">
                              <Link className="logo" to={"/"}>
                                   <img alt="" src={logo} />
                                   <div>
                                        <h1>Farmer</h1>
                                   </div>
                              </Link>
                              <div className="navication" ref={menuRef} onClick={menuToggle}>
                                   <ul className="menu">
                                        {nav_links.map((item, index) => (
                                             <li className="nav__item" key={index}>
                                                  <NavLink
                                                       className={(navClass) =>
                                                            navClass.isActive ? "nav__active" : ""
                                                       }
                                                       to={item.path}
                                                  >
                                                       {item.display}
                                                  </NavLink>
                                             </li>
                                        ))}
                                   </ul>
                              </div>

                              <div className="nav__icons">
                                   <Tippy delay={[0, 200]} content="Tin Nhắn" placement="bottom">
                                        <span className="fav__icon">
                                             <i className="ri-heart-line"></i>
                                             <span className="badge">1</span>
                                        </span>
                                   </Tippy>

                                   <Tippy delay={[0, 200]} content="Thông Báo" placement="bottom">
                                        <span className="cart__icon">
                                             <i className="ri-notification-line"></i>
                                             <span className="badge">1</span>
                                        </span>
                                   </Tippy>
                                   {userInfo ? (
                                        <>
                                             <span>
                                                  <motion.img
                                                       whileTap={{ scale: 1.2 }}
                                                       alt=""
                                                       src={
                                                            userInfo.avt === ""
                                                                 ? userDefault
                                                                 : userInfo.avt
                                                       }
                                                       onClick={() => {
                                                            isActive === false
                                                                 ? setIsActive(true)
                                                                 : setIsActive(false);
                                                       }}
                                                  />
                                             </span>
                                             <div className="action">
                                                  <div
                                                       className={
                                                            isActive === false
                                                                 ? "menuUser"
                                                                 : "menuUser active"
                                                       }
                                                  >
                                                       <h3>
                                                            {userInfo.firstname + userInfo.lastname}
                                                            <br />
                                                            <span>
                                                                 {userInfo.idRole !== 1
                                                                      ? "Nông Dân"
                                                                      : "Thương Lái"}
                                                            </span>
                                                       </h3>
                                                       {userInfo && userInfo.idRole === 1 ? (
                                                            <ul>
                                                                 <li>
                                                                      <i className="ri-settings-line"></i>
                                                                      <Link to={"/dashboard"}>
                                                                           Quản Lý
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <i className="ri-logout-box-line"></i>
                                                                      <Link onClick={handleLogout}>
                                                                           Đăng Xuất
                                                                      </Link>
                                                                 </li>
                                                            </ul>
                                                       ) : (
                                                            <ul>
                                                                 <li>
                                                                      <i className="ri-profile-line"></i>
                                                                      <Link to="/profile">
                                                                           Trang Cá Nhân
                                                                      </Link>
                                                                 </li>
                                                                 <li>
                                                                      <i className="ri-settings-line"></i>
                                                                      <Link> Quản Lý</Link>
                                                                 </li>
                                                                 <li>
                                                                      <i className="ri-settings-line"></i>
                                                                      <Link> Cài Đặt</Link>
                                                                 </li>
                                                                 <li>
                                                                      <i className="ri-logout-box-line"></i>
                                                                      <Link onClick={handleLogout}>
                                                                           Đăng Xuất
                                                                      </Link>
                                                                 </li>
                                                            </ul>
                                                       )}
                                                  </div>
                                             </div>
                                        </>
                                   ) : (
                                        <Link className="btn-login" to="/login">
                                             Đăng Nhập
                                        </Link>
                                   )}
                                   <div className="mobile__menu" onClick={menuToggle}>
                                        <i className="ri-menu-line"></i>
                                   </div>
                              </div>
                         </div>
                    </Row>
               </Container>
          </header>
     );
};
export default Header;
