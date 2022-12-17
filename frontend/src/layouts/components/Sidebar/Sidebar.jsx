import React from "react";
import { Link } from "react-router-dom";
import "./sidebar.scss";
const Sidebar = () => {
     return (
          <aside className="wrappersb">
               <h4 className="text-center">
                    <i className="ri-settings-3-fill"></i>Quản Lý
               </h4>
               <ul>
                    <li>
                         <i className="ri-calculator-fill"></i>
                         <Link to={"/dashboard"}> Thống Kê </Link>
                    </li>
                    <li>
                         <i className="ri-send-plane-fill"></i>
                         <Link to={"/mnproduct"}> Sản Phẩm </Link>
                    </li>
                    <li>
                         <i className="ri-pages-fill"></i>
                         <Link to={"/mnbaiviet"}> Bài Viết</Link>
                    </li>
                    <li>
                         <i className="ri-newspaper-line"></i>
                         <Link to={"/mnblog"}> Bài Đăng </Link>
                    </li>
                    <li>
                         <i className="ri-user-fill"></i>
                         <Link to={"/mnuser"}>Người dùng </Link>
                    </li>
                    <li>
                         <i className="ri-feedback-fill"></i>
                         <Link to={"/mnfeedback"}>Phản Hồi </Link>
                    </li>
               </ul>
          </aside>
     );
};

export default Sidebar;
