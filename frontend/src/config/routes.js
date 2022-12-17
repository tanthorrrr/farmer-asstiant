const routes = {
     //user
     home: "/",
     blog: "/blog",
     blogDetail: "/@:blogid",
     post: "/posts",
     postDetail: "/posts/:id",
     product: "/products",
     productDetail: "/product/:id",
     profile: "/profile",
     setting: "/setting",
     feedback: "/feedback",
     resetPassword: "/forgot-password",
     register: "/register",
     manageCus: "/manageCus",
     individualblog: "/blogindividual",
     individualProduct: "/productindividual",
     //admin
     dashboard: "/dashboard",
     mnuser: "/mnuser",
     mnblog: "/mnblog",
     mnproduct: "/mnproduct",
     mnfeedback: "/mnfeedback",
     mnbaiviet: "/mnbaiviet",
     //all
     login: "/login",
};
export default routes;
