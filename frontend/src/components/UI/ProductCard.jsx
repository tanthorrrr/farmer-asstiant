import React from "react";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";
import { Col } from "reactstrap";
import "../../styles/ProductCard.scss";
import "react-toastify/dist/ReactToastify.css";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { userLists } from "../../redux/Actions/UserActions";

const ProductCard = ({ item }) => {
     const dispatch = useDispatch();
     const userList = useSelector((state) => state.userList);
     const { users } = userList;
     const navigator = useNavigate();
     const user = users.find((data) => data._id === item.idUser);

     useEffect(() => {
          dispatch(userLists());
     }, [dispatch]);

     return (
          <Col lg="3" md="4" className="mb-2">
               <div className="product__item">
                    <motion.div whileHover={{ scale: 1.05 }} className="product__img">
                         <img src={item.image} alt="" />
                    </motion.div>

                    <div className="p-2 mt-3 product__info ">
                         <h3 className="product__name">
                              <Link
                                   onClick={async () => {
                                        navigator(`/product/${item._id}`);
                                        await window.location.reload();
                                   }}
                              >
                                   {item.name}
                              </Link>
                         </h3>

                         <motion.span whileHover={{ scale: 1.1 }}>
                              <i className="ri-heart-line"></i>
                         </motion.span>
                         {/* <div>
                              Giá:
                              <span className="price"> {item.price} vnđ/kg</span>
                         </div> */}
                    </div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between ">
                         <div className="avatar-user">
                              <img src={user && user.avt} alt="" />
                              <h6>{user && user.firstname + " " + user.lastname}</h6>
                              <p>
                                   {item.rating >= 4.8 ? (
                                        <i className="ri-medal-line"></i>
                                   ) : (
                                        <p></p>
                                   )}
                              </p>
                         </div>
                    </div>
               </div>
          </Col>
     );
};

export default ProductCard;
