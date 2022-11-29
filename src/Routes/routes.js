import config from "../config";
import DefaultLayout from "../layouts/DefaultLayout/DefaultLayout";
import HeaderOnly from "../layouts/HeaderOnly/HeaderOnly";
import Home from "../pages/User/Home";
import Blog from "../pages/User/Blog";
import Product from "../pages/User/Product";
import Feedback from "../pages/User/Feedback";
import Login from "../pages/Login";
import Register from "../pages/Register";
import ProductDetail from "../pages/User/ProductDetail/ProductDetail";

//public Routes
const publicRoutes = [
     {
          path: config.routes.home,
          component: Home,
          layout: DefaultLayout,
     },
     {
          path: config.routes.blog,
          component: Blog,
          layout: HeaderOnly,
     },
     {
          path: config.routes.product,
          component: Product,
          layout: DefaultLayout,
     },
     {
          path: config.routes.feedback,
          component: Feedback,
          layout: DefaultLayout,
     },
     {
          path: config.routes.login,
          component: Login,
          layout: null,
     },
     {
          path: config.routes.register,
          component: Register,
          layout: null,
     },
     {
          path: config.routes.productDetail,
          component: ProductDetail,
          layout: DefaultLayout,
     },
];
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
