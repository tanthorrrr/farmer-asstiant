import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
     productCreateReviewReducer,
     productDetailsReducer,
     productDeleteReducer,
     productListReducer,
     productCreateReducer,
} from "./Reducers/ProductReducers";
import {
     userLoginReducer,
     useRegisterReducer,
     userDetailsReducer,
     userListReducer,
} from "./Reducers/UserReducers";
import { blogListReducer } from "./Reducers/BlogReducers";
import { postDetailsReducer, postListReducer } from "./Reducers/PostReducers";

const reducer = combineReducers({
     productList: productListReducer,
     productDetail: productDetailsReducer,
     productReviewCreate: productCreateReviewReducer,
     userLogin: userLoginReducer,
     userRegister: useRegisterReducer,
     userDetails: userDetailsReducer,
     userList: userListReducer,
     productDelete: productDeleteReducer,
     blogList: blogListReducer,
     postList: postListReducer,
     postDetail: postDetailsReducer,
     productCreate: productCreateReducer,
});

//login
const userInfoFromLocalStorage = localStorage.getItem("userInfo")
     ? JSON.parse(localStorage.getItem("userInfo"))
     : null;

const initialState = {
     userLogin: { userInfo: userInfoFromLocalStorage },
};

const middleware = [thunk];
const store = createStore(
     reducer,
     initialState,
     composeWithDevTools(applyMiddleware(...middleware))
);
export default store;
