import React from "react";
import "./Search.scss";
const Search = () => {
     return (
          <div className="search">
               <input placeholder="Tìm kiếm thông tin ..." spellCheck={false} />

               <button className="search-btn" onMouseDown={(e) => e.preventDefault()}>
                    {/* search icon */}
                    <i className="ri-search-line"></i>
               </button>
          </div>
     );
};

export default Search;
