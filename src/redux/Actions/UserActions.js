import axios from "axios";
import {
     LIST_USER_FAIL,
     LIST_USER_REQUEST,
     LIST_USER_SUCCESS,
     USER_DETAILS_FAIL,
     USER_DETAILS_REQUEST,
     USER_DETAILS_SUCCESS,
     USER_LOGIN_FAIL,
     USER_LOGIN_REQUEST,
     USER_LOGIN_SUCCESS,
     USER_LOGOUT,
     USER_REGISTER_FAIL,
     USER_REGISTER_REQUEST,
     USER_REGISTER_SUCCESS,
} from "../Constants/UserContants";

//LOGIN
export const login = (email, password) => async (dispatch) => {
     try {
          dispatch({ type: USER_LOGIN_REQUEST });
          const config = {
               headers: {
                    "Content-Type": "application/json",
               },
          };
          const { data } = await axios.post("/api/users/login", { email, password }, config);
          dispatch({
               type: USER_LOGIN_SUCCESS,
               payload: data,
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
     } catch (error) {
          dispatch({
               type: USER_LOGIN_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};
//registor
export const register = (form) => async (dispatch) => {
     try {
          dispatch({ type: USER_REGISTER_REQUEST });
          const config = {
               headers: {
                    "Content-Type": "application/json",
               },
          };
          const { data } = await axios.post("/api/users", form, config);
          dispatch({
               type: USER_REGISTER_SUCCESS,
               payload: data,
          });
          dispatch({
               type: USER_LOGIN_SUCCESS,
               payload: data,
          });
          localStorage.setItem("userInfo", JSON.stringify(data));
     } catch (error) {
          dispatch({
               type: USER_REGISTER_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};

//profile
export const getUserDetails = (id) => async (dispatch, getState) => {
     try {
          dispatch({ type: USER_DETAILS_REQUEST });
          const {
               userLogin: { userInfo },
          } = getState();

          const config = {
               headers: {
                    Authorization: `Bearer ${userInfo.token}`,
               },
          };
          const { data } = await axios.get(`/api/users/${id}`, config);
          dispatch({
               type: USER_DETAILS_SUCCESS,
               payload: data,
          });
     } catch (error) {
          const message =
               error.response && error.response.data.message
                    ? error.response.data.message
                    : error.message;
          if (message === "not autherized ,token failer") {
               dispatch(logout());
          }
          dispatch({
               type: USER_DETAILS_FAIL,
               payload: message,
          });
     }
};

export const userLists = () => async (dispatch) => {
     try {
          dispatch({ type: LIST_USER_REQUEST });
          const { data } = await axios.get("/api/users/info");
          dispatch({
               type: LIST_USER_SUCCESS,
               payload: data,
          });
     } catch (error) {
          dispatch({
               type: LIST_USER_FAIL,
               payload:
                    error.response && error.response.data.message
                         ? error.response.data.message
                         : error.message,
          });
     }
};

//logout
export const logout = () => async (dispatch) => {
     localStorage.removeItem("userInfo");
     dispatch({ type: USER_LOGOUT });
     document.location.href = "/";
};
//logoutforlogin
export const logoutToLogin = () => async (dispatch) => {
     document.location.href = "/login";
};
