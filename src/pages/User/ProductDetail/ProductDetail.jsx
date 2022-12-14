import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "reactstrap";
import { Link, useParams } from "react-router-dom";
import { motion } from "framer-motion";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../../../components/LoadingError/Loading";
import Message from "../../../components/LoadingError/Error";
// import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Rating from "../../../components/UI/Rating";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import CommonSection from "../../../layouts/components/CommonSection";
import "../../../styles/product-detail.scss";
import { createProductReview, listProductDetail } from "../../../redux/Actions/ProductAction";
import RalatedProduct from "../../../components/UI/RalatedProduct";
import { PRODUCT_CREATE_REVIEW_RESET } from "../../../redux/Constants/ProductConstants";
import moment from "moment";

const ProductDetail = ({ match }) => {
     // const { productId } = match.params.id;
     const { id } = useParams();
     const dispatch = useDispatch();
     const [tab, setTab] = useState("desc");
     const [rating, setRating] = useState(0);
     const [comment, setComment] = useState("");
     const productDetail = useSelector((state) => state.productDetail);
     const { loading, error, product } = productDetail;

     const userLogin = useSelector((state) => state.userLogin);

     const { userInfo } = userLogin;

     const productReviewCreate = useSelector((state) => state.productReviewCreate);
     const {
          loading: loadingCreateReview,
          error: errorCreateReview,
          success: successCreateReview,
     } = productReviewCreate;

     useEffect(() => {
          if (successCreateReview) {
               alert("Review Submitted");
               setRating(0);
               setComment("");
               dispatch({ type: PRODUCT_CREATE_REVIEW_RESET });
          }
          dispatch(listProductDetail(id));
     }, [dispatch, id, successCreateReview]);

     // const ralatedProduct = products.filter((item) => item.type === type);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [product]);
     const submitHandler = (e) => {
          e.preventDefault();
          dispatch(createProductReview(id, { rating, comment }));
     };

     return (
          <Helmet title={product.name}>
               <CommonSection title={product.name} />
               <section className="pt-0">
                    <Container>
                         {loading ? (
                              <div className="mb-5">
                                   <Loading />
                              </div>
                         ) : error ? (
                              <Message variant="alert-danger">{error}</Message>
                         ) : (
                              <Row>
                                   <Col lg="6">
                                        <img src={product.image} alt="" />
                                   </Col>
                                   <Col lg="6">
                                        <div className="product__details">
                                             <h2>{product.name}</h2>
                                             <Rating
                                                  value={product.rating}
                                                  text={` ${product.numReview} reviews`}
                                             />

                                             <div className="d-flex align-items-center gap-5">
                                                  <span className="product__price">
                                                       $ {product.price}
                                                  </span>
                                                  {/* <span>Category: {product.category}</span> */}
                                             </div>
                                             <p className="mt-3">{product.shortDesc}</p>
                                             {/* <motion.button
                                             whileTap={{ scale: 1.1 }}
                                             className="shop__btn"
                                             onClick={addToCart}
                                        >
                                             Add to Cart
                                        </motion.button> */}
                                             <div className="sdt">
                                                  <p>0375583475</p>
                                                  <p>0375583475</p>
                                             </div>
                                        </div>
                                   </Col>
                              </Row>
                         )}
                    </Container>
               </section>
               <section>
                    <Container>
                         <Row>
                              <Col lg="12">
                                   <div className="tab__wrapper d-flex align-item-center gap-5">
                                        <h6
                                             className={`${tab === "desc" ? "active__tab" : ""}`}
                                             onClick={() => setTab("desc")}
                                        >
                                             Gi???i thi???u
                                        </h6>
                                        <h6
                                             className={`${tab === "rev" ? "active__tab" : ""}`}
                                             onClick={() => setTab("rev")}
                                        >
                                             C???m Ngh?? ({product.numReview})
                                        </h6>
                                   </div>
                                   {tab === "desc" ? (
                                        <div className="tab__content mt-5">
                                             <p>{product.description}</p>
                                        </div>
                                   ) : (
                                        <div className="product__review">
                                             <div className="review__wrapper mt-5">
                                                  {product.reviews.length === 0 && (
                                                       <h4 className="text-center">
                                                            Ch??a c?? b??nh lu???n n??o
                                                       </h4>
                                                  )}
                                                  <ul>
                                                       {product.reviews?.map((item, index) => (
                                                            <li key={index} className="mb-4">
                                                                 <img
                                                                      className="avt-comment "
                                                                      src={item.image}
                                                                      alt=""
                                                                 />
                                                                 <div className="name-comment">
                                                                      <h6>
                                                                           {item.firstname +
                                                                                " " +
                                                                                item.lastname}
                                                                           <span>
                                                                                {` ${moment(
                                                                                     item.createdAt
                                                                                ).calendar()}`}
                                                                           </span>
                                                                           <Rating
                                                                                value={item.rating}
                                                                           />
                                                                      </h6>

                                                                      <p>{item.comment}</p>
                                                                 </div>
                                                            </li>
                                                       ))}
                                                  </ul>

                                                  <div className="review__form text-center">
                                                       <h4>????? l???i c???m ngh?? c???a b???n</h4>
                                                       {loadingCreateReview && <Loading />}
                                                       {errorCreateReview && (
                                                            <h4>{errorCreateReview}</h4>
                                                       )}
                                                       {userInfo ? (
                                                            <form onSubmit={submitHandler}>
                                                                 <strong>????nh Gi??</strong>
                                                                 <select
                                                                      value={rating}
                                                                      onChange={(e) =>
                                                                           setRating(e.target.value)
                                                                      }
                                                                      className="col-12 p-2 mb-3"
                                                                 >
                                                                      <option>
                                                                           -- H??y ch???n thang ??i???m
                                                                           cho s???n ph???m --
                                                                      </option>
                                                                      <option value="1">
                                                                           1 - S???n Ph???m Qu?? T???
                                                                      </option>
                                                                      <option value="2">
                                                                           2 - S???n Ph???m T???m Ch???p
                                                                           Nh???n
                                                                      </option>
                                                                      <option value="3">
                                                                           3 - S???n Ph???m Kh??
                                                                      </option>
                                                                      <option value="4">
                                                                           4 - S???n Ph???m T???t
                                                                      </option>
                                                                      <option value="5">
                                                                           5 - S???n Ph???m Tuy???t V???i
                                                                      </option>
                                                                 </select>
                                                                 <div className="form__group">
                                                                      <textarea
                                                                           value={comment}
                                                                           onChange={(e) =>
                                                                                setComment(
                                                                                     e.target.value
                                                                                )
                                                                           }
                                                                           type="text"
                                                                           rows="5"
                                                                           placeholder="Vi???t n???i dung ??? ????y"
                                                                           required
                                                                      ></textarea>
                                                                 </div>

                                                                 <motion.button
                                                                      disabled={loadingCreateReview}
                                                                      whileTap={{ scale: 1.2 }}
                                                                      type="submit"
                                                                      className="shop__btn"
                                                                 >
                                                                      B??nh lu???n
                                                                 </motion.button>
                                                            </form>
                                                       ) : (
                                                            <div className="text-center">
                                                                 <h5>
                                                                      B???n Ph???i{" "}
                                                                      <Link to="/login">
                                                                           <strong>
                                                                                ????ng nh???p
                                                                           </strong>
                                                                      </Link>{" "}
                                                                      m???i c?? th??? b??nh lu???n !
                                                                 </h5>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </Col>
                              <Col lg="12" className="mt-5">
                                   <h2 className="related__title">C?? th??? b???n c??ng th??ch</h2>
                              </Col>

                              <RalatedProduct data={product.type} />
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default ProductDetail;
