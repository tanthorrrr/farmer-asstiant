import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Message from "../../../components/LoadingError/Error";
import Loading from "../../../components/LoadingError/Loading";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import { listPostDetail } from "../../../redux/Actions/PostActions";
import "../../../styles/postdetail.scss";

export const PostDetail = () => {
     const { id } = useParams();
     const dispatch = useDispatch();
     const postDetail = useSelector((state) => state.postDetail);
     const { loading, error, post } = postDetail;
     console.log(post);

     useEffect(() => {
          dispatch(listPostDetail(id));
     }, [dispatch, id]);

     useEffect(() => {
          window.scrollTo(0, 0);
     }, [post]);
     return (
          <Helmet title=" Post Detail">
               <section>
                    <div className="container">
                         {loading ? (
                              <div className="mb-5">
                                   <Loading />
                              </div>
                         ) : error ? (
                              <Message variant="alert-danger">{error}</Message>
                         ) : (
                              <div className="row align-items-center">
                                   <h3>{post.content}</h3>
                                   <p style={{ color: "black" }}> {post.desc}</p>
                                   <div className="ratio ratio-21x9 mt-3 mb-3">
                                        <iframe src={post.video}></iframe>
                                   </div>
                                   <p className="text-end" style={{ color: "blue" }}>
                                        Nguồn : {post.src}
                                   </p>
                                   <p style={{ color: "black" }}> {post.desc_1}</p>
                                   <img src={post.image} alt="" className="m-4 img-post-detail" />
                                   <p className="text-center">{post.desc_image}</p>
                                   <p style={{ color: "black" }}>{post.desc_2}</p>
                                   <img src={post.image_1} alt="" className="m-4 img-post-detail" />
                                   <p className="text-center">{post.desc_image_1}</p>
                                   <p style={{ color: "black" }}>{post.desc_3}</p>
                              </div>
                         )}
                    </div>
               </section>
          </Helmet>
     );
};
