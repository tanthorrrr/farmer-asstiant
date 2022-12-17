import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import CommonSection from "../../../layouts/components/CommonSection";
import "../../../styles/posts.scss";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { listPost } from "../../../redux/Actions/PostActions";

const Post = () => {
     const dispatch = useDispatch();
     const postList = useSelector((state) => state.postList);
     const { posts } = postList;
     useEffect(() => {
          dispatch(listPost());
     }, [dispatch]);

     return (
          <Helmet title="Blog">
               <CommonSection title="Bài Viết" />
               <section>
                    <Container>
                         <Row className="mt-3">
                              {posts.map((item, index) => (
                                   <Col className="mb-2" lg="6" md="4" key={index}>
                                        <Link to={`/posts/${item._id}`}>
                                             <img className="img-blog" src={item.image} alt="" />
                                        </Link>
                                        {/* <iframe
  src="https://www.youtube.com/embed/xNRJwmlRBNU"
  frameborder="0"
  allowfullscreen
></iframe> */}
                                        <h5 className="text-center pt-2">{item.content}</h5>
                                        <p className="text-center pt-1">{item.type}</p>
                                   </Col>
                              ))}
                         </Row>
                         <Row>
                              {/* <div>
                                   <button className="d-flex">Xem thêm </button>
                              </div> */}
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default Post;
