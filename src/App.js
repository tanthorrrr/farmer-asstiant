import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { privateRoutes, publicRoutes } from "./Routes/routes";
import { DefaultLayout } from "./layouts";
import { Fragment } from "react";
// import PrivateRoutes from "./PrivateRoute";
// import DashBoard from "./pages/Admin/DashBoard";
import React from "react";
import { useSelector } from "react-redux";
function App() {
     const userLogin = useSelector((state) => state.userLogin);
     const { userInfo } = userLogin;
     return (
          <Router>
               <div className="App">
                    <Routes>
                         {publicRoutes.map((route, index) => {
                              const Page = route.component;
                              let Layout = DefaultLayout;

                              if (route.layout) {
                                   Layout = route.layout;
                              } else if (route.layout === null) {
                                   Layout = Fragment;
                              }

                              return (
                                   <Route
                                        key={index}
                                        path={route.path}
                                        element={
                                             <Layout>
                                                  <Page />
                                             </Layout>
                                        }
                                   />
                              );
                         })}
                         {/* {privateRoutes.map((route, index) => {
                              let Page;

                              let Layout = DefaultLayout;
                              if (route.layout) {
                                   Layout = route.layout;
                              } else if (route.layout === null) {
                                   Layout = Fragment;
                              }
                              if (userInfo && userInfo.idRole === 1) {
                                   Page = route.component;
                                   return (
                                        <Route
                                             key={index}
                                             path={route.path}
                                             element={
                                                  <Layout>
                                                       <Page />
                                                  </Layout>
                                             }
                                        />
                                   );
                              }
                              if (!userInfo || userInfo.idRole !== 1) {
                                   
                              }
                         })} */}
                         {userInfo && userInfo.idRole === 1
                              ? privateRoutes.map((route, index) => {
                                     let Page = route.component;

                                     let Layout = DefaultLayout;
                                     if (route.layout) {
                                          Layout = route.layout;
                                     } else if (route.layout === null) {
                                          Layout = Fragment;
                                     }
                                     return (
                                          <Route
                                               key={index}
                                               path={route.path}
                                               element={
                                                    <Layout>
                                                         <Page />
                                                    </Layout>
                                               }
                                          />
                                     );
                                })
                              : privateRoutes.map((route, index) => {
                                     let Page = route.componentDefaut;

                                     let Layout = DefaultLayout;
                                     if (route.layout) {
                                          Layout = route.layout;
                                     } else if (route.layout === null) {
                                          Layout = Fragment;
                                     }
                                     return (
                                          <Route
                                               key={index}
                                               path={route.path}
                                               element={
                                                    <Layout>
                                                         <Page />
                                                    </Layout>
                                               }
                                          />
                                     );
                                })}
                    </Routes>
               </div>
          </Router>
     );
}

export default App;
