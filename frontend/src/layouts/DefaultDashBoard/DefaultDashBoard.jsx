import React from "react";
import HeaderDashBoard from "../components/HeaderDarhBoard/HeaderDashBoard";

import Sidebar from "../components/Sidebar/Sidebar";
import "./DefaultDashBoard.scss";
const DefaultHeaderDashBoard = ({ children }) => {
     return (
          <div className="wrapper">
               <HeaderDashBoard />
               <div className="containe">
                    <Sidebar /> <div className="content"> {children}</div>
               </div>
          </div>
     );
};

export default DefaultHeaderDashBoard;
