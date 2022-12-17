import React, { useEffect } from "react";
import "../../styles/post.scss";
import moment from "moment";
import { userLists } from "../../redux/Actions/UserActions";
import { useDispatch, useSelector } from "react-redux";
const Post = ({ data }) => {
     const dispatch = useDispatch();
     const userList = useSelector((state) => state.userList);
     const { users } = userList;

     const user = users.find((item) => item._id === data.idUser);

     useEffect(() => {
          dispatch(userLists());
     }, [dispatch]);
     return (
          <div className="container-post">
               <div className="Post">
                    <div className="detail">
                         <img className="avatar-post" src={user && user.avt} alt="" />
                         <span className="name">
                              <b> {user && user.firstname + " " + user.lastname}</b>
                         </span>
                         <span>{` ${moment(data.createdAt).calendar()}`}</span>
                         <span className="actions">
                              <i className="ri-more-line"></i>
                         </span>
                    </div>
                    <span> {data.content}</span>

                    <img className="img-post" alt="" src={data.image} />
                    <div className="info-flow">
                         <div className="like">{data.numLike} người đã thích</div>
                         <div className="comment"> {data.numReview} bình luận </div>
                    </div>
                    <div className="postReacts row">
                         <div className="col-4 text-center">
                              <i className="ri-heart-line">
                                   <span> Thích</span>
                              </i>
                              {/* <i className="ri-heart-fill" style={{ color: "red" }}></i> */}
                         </div>
                         <div className="col-4  text-center">
                              <i className="ri-chat-4-line">
                                   <span> Bình Luận</span>
                              </i>
                         </div>
                         <div className="col-4  text-center">
                              <i className="ri-share-forward-fill">
                                   <span> Chia sẽ</span>
                              </i>
                         </div>
                    </div>
               </div>
          </div>
     );
};
export default Post;
