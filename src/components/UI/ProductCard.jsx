import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Col } from "reactstrap";

import "../../styles/ProductCard.scss";
import avatarUser from "../../assets/images/user-icon.png";

import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/slices/cartSlices";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ProductCard = ({ item }) => {
     const dispatch = useDispatch();
     const addToLikes = () => {
          dispatch(
               cartActions.addItem({
                    id: item.id,
                    productName: item.productName,
                    imgUrl: item.imgUrl,
                    price: item.price,
               })
          );
          toast.success("Product added successfully");
     };
     return (
          <Col lg="3" md="4" className="mb-2">
               <div className="product__item">
                    <motion.div whileHover={{ scale: 1.05 }} className="product__img">
                         <img src={item.imgUrl} alt="" />
                    </motion.div>
                    <div className="product__card-bottom d-flex align-items-center justify-content-between p-2">
                         <div className="avatar-user">
                              <img src={avatarUser} alt="" />
                              <p>
                                   {item.userName}
                                   {item.avgRating >= 4.8 ? (
                                        <i className="ri-medal-line"></i>
                                   ) : (
                                        <p></p>
                                   )}
                              </p>
                         </div>
                    </div>
                    <div className="p-2 product__info">
                         <h3 className="product__name">
                              <Link to={`/product/${item.id}`}>{item.productName}</Link>
                         </h3>
                         <motion.span whileHover={{ scale: 1.1 }} onClick={addToLikes}>
                              <i className="ri-heart-line"></i>
                         </motion.span>
                         {/* <div>
                              Giá:
                              <span className="price"> {item.price} vnđ/kg</span>
                         </div> */}
                    </div>
               </div>
          </Col>
     );
};

export default ProductCard;
