import React from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";

import Helmet from "../../../layouts/components/Helmet/Helmet";
const Blog = () => {
     return (
          <Helmet title="Blog">
               <section>
                    <Container>
                         <Row>
                              <Col lg="3">
                                   <h3>Thể loại</h3>
                                   <ListGroup className="mb-3 ">
                                        <ListGroupItem className="ps-0 border-0">
                                             <Link to="#">Thông báo (3)</Link>
                                        </ListGroupItem>
                                        <ListGroupItem className="ps-0 border-0">
                                             <Link to="#">Quảng cáo (3)</Link>
                                        </ListGroupItem>
                                        <ListGroupItem className="ps-0 border-0">
                                             <Link to="#">Mẹo Vặt Trồng Trọt (3)</Link>
                                        </ListGroupItem>
                                        <ListGroupItem className="ps-0 border-0">
                                             <Link to="#">Khác (3)</Link>
                                        </ListGroupItem>
                                   </ListGroup>
                              </Col>
                              <Col lg="6"></Col>
                              <Col lg="3"></Col>
                         </Row>
                    </Container>
               </section>
               ;
          </Helmet>
     );
};

export default Blog;
