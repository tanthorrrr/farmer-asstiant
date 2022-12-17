import {
     DELETE_PRODUCT_FAIL,
     DELETE_PRODUCT_REQUEST,
     DELETE_PRODUCT_SUCCESS,
     PRODUCT_CREATE_REVIEW_FAIL,
     PRODUCT_CREATE_REVIEW_REQUEST,
     PRODUCT_CREATE_REVIEW_RESET,
     PRODUCT_CREATE_REVIEW_SUCCESS,
     PRODUCT_DETAILS_FAIL,
     PRODUCT_DETAILS_REQUEST,
     PRODUCT_DETAILS_SUCCESS,
     PRODUCT_LIST_FAIL,
     PRODUCT_LIST_REQUEST,
     PRODUCT_LIST_SUCCESS,
} from "../Constants/ProductConstants";

export const productListReducer = (
     state = {
          products: [],
     },
     action
) => {
     switch (action.type) {
          case PRODUCT_LIST_REQUEST:
               return { loading: true, products: [] };
          case PRODUCT_LIST_SUCCESS:
               return { loading: false, products: action.payload };
          case PRODUCT_LIST_FAIL:
               return { loading: false, error: action.payload };

          default:
               return state;
     }
};
//SINGLE PRODUCT
export const productDetailsReducer = (
     state = {
          product: { reviews: [] },
     },
     action
) => {
     switch (action.type) {
          case PRODUCT_DETAILS_REQUEST:
               return { ...state, product: [] };
          case PRODUCT_DETAILS_SUCCESS:
               return { loading: false, product: action.payload };
          case PRODUCT_DETAILS_FAIL:
               return { loading: false, error: action.payload };

          default:
               return state;
     }
};
export const productCreateReviewReducer = (state = {}, action) => {
     switch (action.type) {
          case PRODUCT_CREATE_REVIEW_REQUEST:
               return { loading: true };
          case PRODUCT_CREATE_REVIEW_SUCCESS:
               return { loading: false, success: true };
          case PRODUCT_CREATE_REVIEW_FAIL:
               return { loading: false, error: action.payload };
          case PRODUCT_CREATE_REVIEW_RESET:
               return {};

          default:
               return state;
     }
};
//DELETE PRODUCT
export const productDeleteReducer = (state = {}, action) => {
     switch (action.type) {
          case DELETE_PRODUCT_REQUEST:
               return { loading: true };
          case DELETE_PRODUCT_SUCCESS:
               return { loading: false, success: true };
          case DELETE_PRODUCT_FAIL:
               return { loading: false, error: action.payload };

          default:
               return state;
     }
};
//
export const productCreateReducer = (state = {}, action) => {
     switch (action.type) {
          case PRODUCT_CREATE_REVIEW_REQUEST:
               return { loading: true };
          case PRODUCT_CREATE_REVIEW_SUCCESS:
               return { loading: false, success: true, product: action.payload };
          case PRODUCT_CREATE_REVIEW_FAIL:
               return { loading: false, error: action.payload };
          case PRODUCT_CREATE_REVIEW_RESET:
               return {};
          default:
               return state;
     }
};
