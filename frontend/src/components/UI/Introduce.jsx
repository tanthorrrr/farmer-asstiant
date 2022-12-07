import { motion } from "framer-motion";
import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import "../../styles/Introduce.scss";

const Introduce = () => {
     return (
          <section className="intro__section">
               <Container>
                    <Row>
                         <Col lg="5" md="6">
                              <div className="intro-img"></div>
                         </Col>
                         <Col lg="1" md="6">
                              {" "}
                         </Col>
                         <Col lg="6" md="6">
                              <div className="intro_content">
                                   <h1>FARMERS MARTKETS</h1>
                                   <h3>FARMERS MARTKETS</h3>
                                   <p>
                                        Đồng hành cùng nhà nông. Với sự thấu hiểu những khó khăn của
                                        nông dân, nơi đây chúng tôi không chỉ là nơi chia sẽ những
                                        kiến thức, giúp đỡ nhau về canh tác, giải đáp những vấn đề
                                        gặp phải trong việc phát triển nông nghiệp.... và là nơi
                                        giúp việc đầu ra của phẩm có giá tốt hơn nhằm giúp cái thiện
                                        kinh tế của những người nông dân hơn cả thế nhà nông còn có
                                        thế cung ứng những hạt giống tốt, sản phẩm nông sản của mình
                                        tới những nhà nông khác giúp cho ngành nông nghiệp phát
                                        triển hơn .
                                   </p>
                                   <motion.button whileTap={{ scale: 1.1 }} className="shop__btn">
                                        <Link to="/blog">Xem Thêm</Link>
                                   </motion.button>
                              </div>
                         </Col>
                    </Row>
               </Container>
          </section>
     );
};

export default Introduce;
