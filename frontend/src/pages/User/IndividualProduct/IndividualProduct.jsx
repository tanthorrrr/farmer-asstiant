import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./individualProduct.scss";
import { listProduct } from "../../../redux/Actions/ProductAction";
import CommonSection from "../../../layouts/components/CommonSection";
import { Container, Row } from "reactstrap";
import Message from "../../../components/LoadingError/Error";
import Loading from "../../../components/LoadingError/Loading";
import ProductListCus from "../../../components/UI/ProductListCus";
const IndividualProduct = () => {
     const dispatch = useDispatch();
     const productList = useSelector((state) => state.productList);
     const { loading, error, products } = productList;
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
     const producstDefault = products.filter((item) => item.idUser === userInfo._id);
     const productDelete = useSelector((state) => state.productDelete);
     const { success } = productDelete;
     const [pro, setPro] = useState("pro");
     const [name, setName] = useState("");
     const [price, setPrice] = useState("");
     const [shortDesc, setShortDesc] = useState("");
     const [desc, setDesc] = useState("");
     const [image, setImage] = useState("");

     const productCreate = useSelector((state) => state.productCreate);
     const { product } = productCreate;
     useEffect(() => {
          dispatch(listProduct());
     }, [dispatch, success]);
     return (
          <div className="container">
               <CommonSection title="Sản Phẩm Của Tôi" />

               <div className="row mt-4">
                    <div className="col-4">
                         <div className="filter__widget">
                              <select
                              // onChange={handleFilter}
                              >
                                   <option value="all">-- Sắp xếp theo danh mục --</option>
                                   <option value="ondoi">Trái cây ôn đới</option>
                                   <option value="nhietdoi">Trái cây nhiệt đới</option>
                                   <option value="hatgiong">Hạt Giống</option>
                              </select>
                         </div>
                    </div>
                    <div className="col-6">
                         <div className="search-box ">
                              <input
                                   type="text"
                                   placeholder="Tìm Kiếm...."
                                   // onChange={handleSearch}
                              />
                              <span>
                                   <i className="ri-search-line"></i>
                              </span>
                         </div>
                    </div>

                    <div className="col-2">
                         <button
                              className="btn-addproduct"
                              onClick={() => {
                                   setPro("addpro");
                              }}
                         >
                              Thêm Sản Phẩm
                         </button>
                    </div>
               </div>
               {pro === "pro" ? (
                    <section className="mt-2 ">
                         <Container>
                              {loading ? (
                                   <div className="mb-5">
                                        <Loading />
                                   </div>
                              ) : error ? (
                                   <Message variant="alert-danger">{error}</Message>
                              ) : (
                                   <Row>
                                        {producstDefault.length === 0 ? (
                                             <h1 className="text-center fs-4">
                                                  Không có sản phẩm nào !
                                             </h1>
                                        ) : (
                                             <ProductListCus data={producstDefault} />
                                        )}
                                   </Row>
                              )}
                         </Container>
                    </section>
               ) : (
                    <section>
                         <Container>
                              <Row>
                                   <div className="card mb-4">
                                        <div className="card-header">Thêm Sản Phẩm</div>
                                        <div className="card-body">
                                             <div>
                                                  <div className="row gx-3 mb-3">
                                                       <div className="col-md-6">
                                                            <label className="small mb-1">
                                                                 Tên
                                                            </label>
                                                            <input
                                                                 className="form-control"
                                                                 readonly="False"
                                                                 id="inputFirstName"
                                                                 type="text"
                                                                 placeholder=""
                                                            />
                                                       </div>

                                                       <div className="col-md-6">
                                                            <label className="small mb-1">
                                                                 Giá
                                                            </label>
                                                            <input
                                                                 readonly="False"
                                                                 className="form-control"
                                                                 id="inputLastName"
                                                                 type="text"
                                                            />
                                                       </div>
                                                  </div>

                                                  <div className="mb-3">
                                                       <label className="small mb-1">
                                                            Giới Thiệu Ngắn
                                                       </label>
                                                       <input
                                                            className="form-control"
                                                            readonly="False"
                                                            id="inputEmailAddress"
                                                            type="email"
                                                       />
                                                  </div>

                                                  <div className="row gx-3 mb-3">
                                                       <label className="small mb-1">
                                                            Giới thiệu
                                                       </label>
                                                       <input
                                                            readonly="False"
                                                            className="form-control"
                                                            id="inputPhone"
                                                            type="tel"
                                                       />
                                                  </div>
                                                  <div className="row gx-3 mb-3">
                                                       <label className="small mb-1">Ảnh</label>
                                                       <input
                                                            className="form-control"
                                                            id="inputPhone"
                                                            type="file"
                                                       />
                                                  </div>
                                             </div>
                                        </div>
                                        <button className="btn btn-primary" type="button">
                                             Lưu thay đổi
                                        </button>
                                   </div>
                              </Row>
                         </Container>
                    </section>
               )}
          </div>
     );
};

export default IndividualProduct;
