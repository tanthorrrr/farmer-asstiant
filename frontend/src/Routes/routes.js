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
import ForgotPassword from "../pages/ForgotPasswod";
import Profile from "../pages/User/Profile/Profile";
import DefaultHeaderDashBoard from "../layouts/DefaultDashBoard/DefaultDashBoard";
import DashBoard from "../pages/Admin/DashBoard";
import MNBlog from "../pages/Admin/MNBlog";
import MNFeedback from "../pages/Admin/MNFeedback";
import MNBaiViet from "../pages/Admin/MNBaiViet";
import MNUser from "../pages/Admin/MNUser";
import MNProduct from "../pages/Admin/MNProduct";
import ManageCus from "../pages/User/ManageCus/ManageCus";
import SettingPage from "../pages/User/SettingPage/SettingPage";
import IndividualBlog from "../pages/User/IndividualBlog/IndividualBlog";
import IndividualProduct from "../pages/User/IndividualProduct/IndividualProduct";
import SidebarAndHeader from "../layouts/SidebarAndHeader/SidebarAndHeader";
import Post from "../pages/User/Post";
import { PostDetail } from "../pages/User/PostDetail/PostDetail";
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
          path: config.routes.resetPassword,
          component: ForgotPassword,
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
     {
          path: config.routes.profile,
          component: Profile,
          layout: SidebarAndHeader,
     },
     {
          path: config.routes.manageCus,
          component: ManageCus,
          layout: SidebarAndHeader,
     },
     {
          path: config.routes.setting,
          component: SettingPage,
          layout: HeaderOnly,
     },

     {
          path: config.routes.individualblog,
          component: IndividualBlog,
          layout: SidebarAndHeader,
     },
     {
          path: config.routes.individualProduct,
          component: IndividualProduct,
          layout: SidebarAndHeader,
     },
     {
          path: config.routes.post,
          component: Post,
          layout: HeaderOnly,
     },
     {
          path: config.routes.postDetail,
          component: PostDetail,
          layout: HeaderOnly,
     },
];
const privateRoutes = [
     {
          path: config.routes.dashboard,
          pathDefault: config.routes.home,
          component: DashBoard,
          componentDefaut: Home,
          layout: DefaultHeaderDashBoard,
          layoutDefault: DefaultLayout,
     },
     {
          path: config.routes.mnblog,
          pathDefault: config.routes.home,
          component: MNBlog,
          componentDefaut: Home,
          layout: DefaultHeaderDashBoard,
          layoutDefault: DefaultLayout,
     },
     {
          path: config.routes.mnfeedback,
          pathDefault: config.routes.home,
          component: MNFeedback,
          componentDefaut: Home,
          layout: DefaultHeaderDashBoard,
          layoutDefault: DefaultLayout,
     },
     {
          path: config.routes.mnbaiviet,
          pathDefault: config.routes.home,
          component: MNBaiViet,
          componentDefaut: Home,
          layoutDefault: DefaultLayout,
          layout: DefaultHeaderDashBoard,
     },
     {
          path: config.routes.mnproduct,
          pathDefault: config.routes.home,
          component: MNProduct,
          componentDefaut: Home,
          layoutDefault: DefaultLayout,
          layout: DefaultHeaderDashBoard,
     },
     {
          path: config.routes.mnuser,
          pathDefault: config.routes.home,
          component: MNUser,
          componentDefaut: Home,
          layoutDefault: DefaultLayout,
          layout: DefaultHeaderDashBoard,
     },
];

export { publicRoutes, privateRoutes };
