import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

import "../../styles/ProductCard.scss";
import avatarUser from "../../assets/images/user-icon.png";

import "react-toastify/dist/ReactToastify.css";
import Rating from "./Rating";

const ProductCard = ({ item }) => {
     return (
          <Col lg="3" md="4" className="mb-2">
               <div className="product__item">
                    <motion.div whileHover={{ scale: 1.05 }} className="product__img">
                         <img src={item.image} alt="" />
                    </motion.div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                         <div className="avatar-user">
                              <img src={avatarUser} alt="" />
                              <p>
                                   {item.username}
                                   {item.rating >= 4.8 ? (
                                        <i className="ri-medal-line"></i>
                                   ) : (
                                        <p></p>
                                   )}
                              </p>
                         </div>
                    </div>
                    <div className="p-2 product__info">
                         <h3 className="product__name">
                              <Link to={`/product/${item._id}`}>{item.name}</Link>
                         </h3>

                         <motion.span whileHover={{ scale: 1.1 }}>
                              <i className="ri-heart-line"></i>
                         </motion.span>
                         {/* <div>
                              Giá:
                              <span className="price"> {item.price} vnđ/kg</span>
                         </div> */}
                    </div>
                    <Rating value={item.rating} text={` ${item.numReview} reviews`} />
               </div>
          </Col>
     );
};

export default ProductCard;
