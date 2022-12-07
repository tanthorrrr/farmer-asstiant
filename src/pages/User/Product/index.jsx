import React, { useState } from "react";
import { Container, Row, Col } from "reactstrap";

import "../../../styles/product.scss";
import Helmet from "../../../layouts/components/Helmet/Helmet";
import CommonSection from "../../../layouts/components/CommonSection";
import ProductList from "../../../components/UI/ProductList";
import { useDispatch, useSelector } from "react-redux";
import { listProduct } from "../../../redux/Actions/ProductAction";
import Loading from "../../../components/LoadingError/Loading";
import Message from "../../../components/LoadingError/Error";
import { useEffect } from "react";

const Product = () => {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.productList);
     const { loading, error, products } = productList;
     const producstDefault = products;
     const [productsData, setProductsData] = useState(producstDefault);

     useEffect(() => {
          dispatch(listProduct());
     }, [dispatch]);

     const handleFilter = (e) => {
          const filterValue = e.target.value;
          if (filterValue === "all") {
               setProductsData(products);
          }
          if (filterValue === "nhietdoi") {
               const filteredProduct = products.filter((item) => item.type === "nhietdoi");
               setProductsData(filteredProduct);
          }
          if (filterValue === "ondoi") {
               const filteredProduct = products.filter((item) => item.type === "ondoi");
               setProductsData(filteredProduct);
          }
          if (filterValue === "hatgiong") {
               const filteredProduct = products.filter((item) => item.type === "hatgiong");
               setProductsData(filteredProduct);
          }
     };

     const handleSearch = (e) => {
          const searchItem = e.target.value;
          const searchedProduct = products.filter((item) =>
               item.name.toLowerCase().includes(searchItem.toLowerCase())
          );
          setProductsData(searchedProduct);
     };

     return (
          <Helmet title="Products">
               <CommonSection title="Products" />
               <section>
                    <Container>
                         <Row>
                              <Col lg="3" md="6">
                                   <div className="filter__widget">
                                        <select onChange={handleFilter}>
                                             <option value="all">
                                                  -- Sắp xếp theo danh mục --
                                             </option>
                                             <option value="ondoi">Trái cây ôn đới</option>
                                             <option value="nhietdoi">Trái cây nhiệt đới</option>
                                             <option value="hatgiong">Hạt Giống</option>
                                        </select>
                                   </div>
                              </Col>
                              <Col lg="3" md="6" className="text-end">
                                   <div className="filter__widget">
                                        <select>
                                             <option value="all">-- Sắp xếp theo giá --</option>
                                             <option value="Ascending">Cao đến thấp</option>
                                             <option value="Descending">Thấp đến cao</option>
                                        </select>
                                   </div>
                              </Col>
                              <Col lg="6" md="12">
                                   <div className="search-box">
                                        <input
                                             type="text"
                                             placeholder="Tìm Kiếm...."
                                             onChange={handleSearch}
                                        />
                                        <span>
                                             <i className="ri-search-line"></i>
                                        </span>
                                   </div>
                              </Col>
                         </Row>
                    </Container>
               </section>
               <section className="pt-0 ">
                    <Container>
                         {loading ? (
                              <div className="mb-5">
                                   <Loading />
                              </div>
                         ) : error ? (
                              <Message variant="alert-danger">{error}</Message>
                         ) : (
                              <Row>
                                   {productsData.length === 0 ? (
                                        <h1 className="text-center fs-4">
                                             Không có sản phẩm nào !
                                        </h1>
                                   ) : (
                                        <ProductList data={productsData} />
                                   )}
                              </Row>
                         )}
                    </Container>
               </section>
          </Helmet>
     );
};

export default Product;
