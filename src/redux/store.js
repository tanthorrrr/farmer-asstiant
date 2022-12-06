import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import {
     productCreateReviewReducer,
     productDetailsReducer,
     productListReducer,
} from "./Reducers/ProductReducers";
import { userLoginReducer, useRegisterReducer, userDetailsReducer } from "./Reducers/UserReducers";

const reducer = combineReducers({
     productList: productListReducer,
     productDetail: productDetailsReducer,
     productReviewCreate: productCreateReviewReducer,
     userLogin: userLoginReducer,
     userRegister: useRegisterReducer,
     userDetails: userDetailsReducer,
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
