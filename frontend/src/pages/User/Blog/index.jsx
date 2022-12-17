import React, { useEffect } from "react";

import CommonSection from "../../../layouts/components/CommonSection";
import "../../../styles/blog.scss";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import { useDispatch, useSelector } from "react-redux";
import { PostShare } from "../../../components/UI/PostShare";
import PostList from "../../../components/UI/PostList";
import { listBlog } from "../../../redux/Actions/BlogActions";
import { Link } from "react-router-dom";
import { Row } from "reactstrap";

const Blog = () => {
     const dispatch = useDispatch();
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
     const blogList = useSelector((state) => state.blogList);
     const { blogs } = blogList;

     useEffect(() => {
          dispatch(listBlog());
     }, [dispatch]);
     return (
          <Helmet title="Bài Đăng">
               <CommonSection title="Bài Đăng" />

               <div className="container">
                    {userInfo ? (
                         <div className="row">
                              <div className="col-2"></div>
                              <div className="col-8">
                                   <div className="container-post">
                                        <PostShare data={userInfo} />
                                   </div>
                                   {blogs.length === 0 ? (
                                        <h3>No Blogs</h3>
                                   ) : (
                                        <PostList data={blogs} />
                                   )}
                              </div>
                              <div className="col-2">Quảng Cáo</div>
                         </div>
                    ) : (
                         <div className="row text-center mt-5">
                              <h3>
                                   Bạn Cần phải{" "}
                                   <Link to="/login" style={{ color: "blue" }}>
                                        {" "}
                                        đăng nhập{" "}
                                   </Link>
                              </h3>
                         </div>
                    )}
               </div>
          </Helmet>
     );
};

export default Blog;
