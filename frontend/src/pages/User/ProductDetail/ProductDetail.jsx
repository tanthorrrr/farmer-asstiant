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
                                             Giới thiệu
                                        </h6>
                                        <h6
                                             className={`${tab === "rev" ? "active__tab" : ""}`}
                                             onClick={() => setTab("rev")}
                                        >
                                             Cảm Nghĩ ({product.numReview})
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
                                                            Chưa có bình luận nào
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
                                                       <h4>Để lại cảm nghĩ của bạn</h4>
                                                       {loadingCreateReview && <Loading />}
                                                       {errorCreateReview && (
                                                            <h4>{errorCreateReview}</h4>
                                                       )}
                                                       {userInfo ? (
                                                            <form onSubmit={submitHandler}>
                                                                 <strong>Đánh Giá</strong>
                                                                 <select
                                                                      value={rating}
                                                                      onChange={(e) =>
                                                                           setRating(e.target.value)
                                                                      }
                                                                      className="col-12 p-2 mb-3"
                                                                 >
                                                                      <option>
                                                                           -- Hãy chọn thang điểm
                                                                           cho sản phẩm --
                                                                      </option>
                                                                      <option value="1">
                                                                           1 - Sản Phẩm Quá Tệ
                                                                      </option>
                                                                      <option value="2">
                                                                           2 - Sản Phẩm Tạm Chấp
                                                                           Nhận
                                                                      </option>
                                                                      <option value="3">
                                                                           3 - Sản Phẩm Khá
                                                                      </option>
                                                                      <option value="4">
                                                                           4 - Sản Phẩm Tốt
                                                                      </option>
                                                                      <option value="5">
                                                                           5 - Sản Phẩm Tuyệt Vời
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
                                                                           placeholder="Viết nội dung ở đây"
                                                                           required
                                                                      ></textarea>
                                                                 </div>

                                                                 <motion.button
                                                                      disabled={loadingCreateReview}
                                                                      whileTap={{ scale: 1.2 }}
                                                                      type="submit"
                                                                      className="shop__btn"
                                                                 >
                                                                      Bình luận
                                                                 </motion.button>
                                                            </form>
                                                       ) : (
                                                            <div className="text-center">
                                                                 <h5>
                                                                      Bạn Phải{" "}
                                                                      <Link to="/login">
                                                                           <strong>
                                                                                Đăng nhập
                                                                           </strong>
                                                                      </Link>{" "}
                                                                      mới có thể bình luận !
                                                                 </h5>
                                                            </div>
                                                       )}
                                                  </div>
                                             </div>
                                        </div>
                                   )}
                              </Col>
                              <Col lg="12" className="mt-5">
                                   <h2 className="related__title">Có thể bạn cũng thích</h2>
                              </Col>

                              <RalatedProduct data={product.type} />
                         </Row>
                    </Container>
               </section>
          </Helmet>
     );
};

export default ProductDetail;
