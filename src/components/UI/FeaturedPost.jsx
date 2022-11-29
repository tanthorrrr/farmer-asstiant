import React from "react";
import { Col } from "reactstrap";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import blogHomeImg from "../../assets/images/blog-home1.jpg";
import "../../styles/FeaturedPost.scss";
const featuredPost = () => {
     return (
          <Col lg="3" md="4">
               <div className="blog-home">
                    <motion.div whileHover={{ scale: 1.05 }} className="blog-home__img">
                         <img src={blogHomeImg} alt="" />
                         <span className="date-post">
                              <i className="ri-time-line"></i> October 12, 2022
                         </span>
                    </motion.div>
                    <div className="p-2 blog-home__info">
                         <h3 className="blog-home__name">
                              <Link>Trồng táo chuẩn chất lượng</Link>
                         </h3>
                         <span>
                              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestiae
                              tempore nihil nemo dicta officia at maxime quis iusto quia laborum,
                              facere, optio magnam numquam quidem. Voluptatum expedita sequi eaque
                              aut!
                         </span>
                    </div>
               </div>
          </Col>
     );
};

export default featuredPost;
