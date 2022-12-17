import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import blogHomeImg from "../../assets/images/blog-home1.jpg";
import "../../styles/FeaturedPost.scss";
import moment from "moment";
const featuredPost = ({ data }) => {
     return (
          <Col lg="3" md="4">
               <div className="blog-home">
                    <Link to={`/posts/${data._id}`}>
                         <motion.div whileHover={{ scale: 1.05 }} className="blog-home__img">
                              <img src={data.image_1} alt="" />
                              <span className="date-post">
                                   <i className="ri-time-line"></i>
                                   {` ${moment(data.createdAt).calendar()}`}
                              </span>
                         </motion.div>
                    </Link>
                    <motion.div
                         whileHover={{ scale: 1.05 }}
                         className="blog-home__img"
                    ></motion.div>
                    <div className="p-2 blog-home__info">
                         <h3 className="blog-home__name">
                              <Link>{data.content}</Link>
                         </h3>
                         <span>{data.desc}</span>
                    </div>
               </div>
          </Col>
     );
};

export default featuredPost;
