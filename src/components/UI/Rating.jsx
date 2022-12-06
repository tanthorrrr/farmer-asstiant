import React from "react";

const Rating = ({ value, text }) => {
     return (
          <div className="rating" style={{ color: "yellowgreen" }}>
               <i
                    className={
                         value >= 1
                              ? "ri-star-fill"
                              : value >= 0.5
                              ? "ri-star-half-line"
                              : "ri-star-line"
                    }
               ></i>
               <i
                    className={
                         value >= 2
                              ? "ri-star-fill"
                              : value >= 1.5
                              ? "ri-star-half-line"
                              : "ri-star-line"
                    }
               ></i>
               <i
                    className={
                         value >= 3
                              ? "ri-star-fill"
                              : value >= 2.5
                              ? "ri-star-half-line"
                              : "ri-star-line"
                    }
               ></i>
               <i
                    className={
                         value >= 4
                              ? "ri-star-fill"
                              : value >= 3.5
                              ? "ri-star-half-line"
                              : "ri-star-line"
                    }
               ></i>
               <i
                    className={
                         value >= 5
                              ? "ri-star-fill"
                              : value >= 4.5
                              ? "ri-star-half-line"
                              : "ri-star-line"
                    }
               ></i>

               <span>{text && text}</span>
          </div>
     );
};

export default Rating;
