import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { deleteProduct } from "../../redux/Actions/ProductAction";
import "../../styles/ProductCardCus.scss";
const ProductCardCus = ({ item }) => {
     const dispatch = useDispatch();
     const deletehandler = (id) => {
          if (window.confirm(` Bạn có chắc sẽ xóa sản phẩm ${item.name} `)) {
               dispatch(deleteProduct(id));
          }
     };
     return (
          <>
               <div className="col-4">
                    <img src={item.image} />
               </div>
               <div className="col-8 product-cus  h-auto ">
                    <h4 className="w-100 d-flex justify-content-between ">
                         Tên Sản Phẩm : {item.name}
                         <span>
                              <i className="ri-edit-line"></i>
                              <i
                                   style={{ color: "red" }}
                                   onClick={() => deletehandler(item._id)}
                                   className="ri-close-circle-fill"
                              ></i>
                         </span>
                    </h4>
                    <h4>
                         Loại :
                         {item.type === "ondoi"
                              ? " ôn đới"
                              : item.type === "nhietdoi"
                              ? " nhiệt đới"
                              : " hạt giống"}
                    </h4>
                    <h4>{item.price}</h4>
                    <p>{item.shortDesc}</p>
                    <p>{item.description}</p>
               </div>
          </>
     );
};

export default ProductCardCus;
