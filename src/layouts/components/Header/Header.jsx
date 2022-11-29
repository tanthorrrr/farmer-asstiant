import React, { useRef, useEffect } from "react";

import "./Header.scss";

import { motion } from "framer-motion";

import { Container, Row } from "reactstrap";
import { NavLink } from "react-router-dom";
import Search from "../Search/Search";

const nav_links = [
     {
          path: "/",
          display: "Trang Chủ",
     },
     {
          path: "/product",
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

     const menuToggle = () => {
          menuRef.current.classList.toggle("active__menu");
     };

     return (
          <header className="header">
               <Container>
                    <Row>
                         <div className="nav_wrapper">
                              <div className="logo">
                                   {/* thêm ảnh */}
                                   <img alt="" />
                                   <div>
                                        <h1>Farmer</h1>
                                   </div>
                              </div>
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
                              <div>
                                   <Search />
                              </div>
                              <div className="nav__icons">
                                   <span className="fav__icon">
                                        <i className="ri-heart-line"></i>
                                        <span className="badge">1</span>
                                   </span>
                                   <span className="cart__icon">
                                        <i className="ri-notification-line"></i>
                                        <span className="badge">1</span>
                                   </span>
                                   <span>
                                        <motion.img whileTap={{ scale: 1.2 }} alt="" />
                                   </span>
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
