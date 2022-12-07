import React from "react";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import "../../../styles/Home.scss";
import FeaturePostList from "../../../components/UI/FeaturePostList";
import ProductList from "../../../components/UI/ProductList";
import Introduce from "../../../components/UI/Introduce";
import { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../redux/Actions/ProductAction";
import Loading from "../../../components/LoadingError/Loading";
import Message from "../../../components/LoadingError/Error";
const Home = () => {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.productList);
     const { loading, error, products } = productList;

     useEffect(() => {
          dispatch(listProduct());
     }, [dispatch]);

     const filteredProductOd = products.filter((item) => item.type === "ondoi");
     const filteredProductNd = products.filter((item) => item.type === "nhietdoi");
     return (
          <Helmet title={" Home"}>
               <section className="hero__section">
                    <Container>
                         <Row>
                              <Col lg="6" md="6">
                                   <div className="hero_content">
                                        <h2>Bạn đồng hành với nhà nông</h2>
                                        <h1>Phát triển tự nhiên, sống tự nhiên</h1>
                                        <p>
                                             Một dự án Web nhằm giúp nông dân đảm bảo lợi nhuận cao
                                             hơn thông qua giao tiếp trực tiếp giữa nông dân với nhà
                                             cung cấp và nông dân với nông dân. Hỗ trợ canh tác cây
                                             trồng cho nông dân. Dịch vụ thúc đẩy giao tiếp kinh
                                             doanh và mang lại sự minh bạch cho hệ thống. trang web
                                             cho phép giao tiếp giữa nông dân giỏi, nhà bán lẻ và
                                             nhà cung cấp. Nó cho phép nông dân để đăng nhập và giao
                                             tiếp với đại lý tương ứng.....
                                        </p>
                                        <motion.button
                                             whileTap={{ scale: 1.1 }}
                                             className="shop__btn"
                                        >
                                             <Link to="/blog">Xem Thêm</Link>
                                        </motion.button>
                                   </div>
                              </Col>
                              <Col lg="6" md="6">
                                   <div className="hero-img"></div>
                              </Col>
                         </Row>
                    </Container>
               </section>
               <section className="featured__post">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">Bài Viết Nổi Bật</h2>
                              </Col>
                              <FeaturePostList />
                              <div className="d-flex  justify-content-center">
                                   <motion.button whileTap={{ scale: 1.1 }} className="shop__btn">
                                        <Link to="/blog">Xem Thêm</Link>
                                   </motion.button>
                              </div>
                         </Row>
                    </Container>
               </section>
               <Introduce />
               <section className="featured__post">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">Trái Cây Ôn Đới</h2>
                              </Col>
                              {loading ? (
                                   <div className="mb-5">
                                        <Loading />
                                   </div>
                              ) : error ? (
                                   <Message variant="alert-danger">{error}</Message>
                              ) : (
                                   <ProductList data={filteredProductOd} />
                              )}
                              <div className="d-flex  justify-content-center">
                                   <motion.button whileTap={{ scale: 1.1 }} className="shop__btn">
                                        <Link to="/products">Xem Thêm</Link>
                                   </motion.button>
                              </div>
                         </Row>
                    </Container>
               </section>
               <section className="featured__post">
                    <Container>
                         <Row>
                              <Col lg="12" className="text-center mb-5">
                                   <h2 className="section__title">Trái Cây Nhiệt Đới</h2>
                              </Col>
                              {loading ? (
                                   <div className="mb-5">
                                        <Loading />
                                   </div>
                              ) : error ? (
                                   <Message variant="alert-danger">{error}</Message>
                              ) : (
                                   <ProductList data={filteredProductNd} />
                              )}
                              <div className="d-flex  justify-content-center">
                                   <motion.button whileTap={{ scale: 1.1 }} className="shop__btn">
                                        <Link to="/products">Xem Thêm</Link>
                                   </motion.button>
                              </div>
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default Home;
