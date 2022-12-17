import React from "react";
import "./SidebarAndHeader.scss";

import SidebarCus from "../components/SidebarCus/SidebarCus";
import Header from "../components/Header/Header";
const SidebarAndHeader = ({ children }) => {
     return (
          <div className="wrapper">
               <Header />
               <div className="containe">
                    <SidebarCus /> <div className="content"> {children}</div>
               </div>
          </div>
     );
};

export default SidebarAndHeader;
