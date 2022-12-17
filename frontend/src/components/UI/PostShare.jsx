import React from "react";
import "../../styles/postshare.scss";
export const PostShare = ({ data }) => {
     return (
          <div className="post-share">
               <div>
                    <img src={data.avt} alt="avatar" className="avatar-post" />
                    <input
                         type="text"
                         name="title"
                         // value={formDataPost.title}
                         placeholder="Nói lên những điều bạn muốn chia sẻ ..."
                    />
                    <div className="postOption">
                         <div className="option" name="image" accept="image/*">
                              <i className="ri-image-fill"></i> Hình Ảnh
                         </div>
                         <div className="option">
                              <i className="ri-video-chat-fill"></i>Video
                         </div>
                         <div className="option">
                              <i className="ri-map-pin-fill"></i>
                              Địa Điểm
                         </div>
                         <div className="option">
                              <i className="ri-calendar-line"></i>
                              Lịch Trình
                         </div>
                         <button>Chia sẻ</button>
                         <div style={{ display: "none" }}>
                              <input type="file" name="myImage" />
                         </div>
                    </div>
               </div>
          </div>
     );
};
