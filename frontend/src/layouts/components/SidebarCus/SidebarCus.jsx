import React from "react";
import "./SidebarCus.scss";
import { Link } from "react-router-dom";
const SidebarCus = () => {
     return (
          <aside className="containerCS">
               <div className="sidebar">
                    <h4 className="text-center mt-4 mb-2">
                         <i className="ri-settings-3-fill"></i>Quản Lý
                    </h4>
                    <ul>
                         <li>
                              <i className="ri-calculator-fill"></i>
                              <Link to={"/profile"}>Cá Nhân</Link>
                         </li>
                         <li>
                              <i className="ri-calculator-fill"></i>
                              <Link to={"/blogindividual"}>Blog</Link>
                         </li>
                         <li>
                              <i className="ri-send-plane-fill"></i>
                              <Link to={"/productindividual"}> Sản Phẩm </Link>
                         </li>
                    </ul>
               </div>
          </aside>
     );
};

export default SidebarCus;
