import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../redux/Actions/ProductAction";
import ProductList from "./ProductList";
import Loading from "../LoadingError/Loading";
import Message from "../LoadingError/Error";

const RalatedProduct = ({ data }) => {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.productList);
     const { loading, error, products } = productList;
     const ralatedProduct = products.filter((item) => item.type === data);

     useEffect(() => {
          dispatch(listProduct());
     }, [dispatch]);
     return (
          <>
               {loading ? (
                    <div className="mb-5">
                         <Loading />
                    </div>
               ) : error ? (
                    <Message variant="alert-danger">{error}</Message>
               ) : (
                    <ProductList data={ralatedProduct} />
               )}
          </>
     );
};

export default RalatedProduct;
