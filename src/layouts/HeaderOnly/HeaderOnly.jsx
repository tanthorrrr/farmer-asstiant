import React from "react";
import Header from "../components/Header/Header";

const HeaderOnly = ({ children }) => {
     return (
          <>
               <Header />
               <div>{children}</div>
          </>
     );
};

export default HeaderOnly;
