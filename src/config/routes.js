const routes = {
     //user
     home: "/",
     blog: "/blog",
     blogDetail: "/@:blogid",
     product: "/product",
     productDetail: "/product/:id",
     profile: "/@:nickname",
     setting: "/setting",
     feedback: "/feedback",
     resetPassword: "/forgot-password",
     register: "/register",
     //admin
     dashboard: "/dashboard",
     //all
     login: "/login",
};
export default routes;
