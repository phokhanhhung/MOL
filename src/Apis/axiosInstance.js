import axios from "axios";
import jwt_decode from "jwt-decode";
import { useUserStore } from "../Redux/store/useUserStore";
import { tokenApis } from "./tokenApis";

// function AxiosCall() {
//   const [userState, userDispatch, userActions] = useUserStore();

const axiosInstance = axios.create({
  baseURL: "http://localhost:8000/api",
  // headers:{
  //   Authorization: state.accessToken,
  // }
});

axiosInstance.interceptors.response.use(
  function (response) {
    return response.data;
  },
  function (error) {
    return Promise.reject(error);
  }
);

//   this.axiosJWT = axios.create();

//   axiosJWT.interceptors.request.use(async (config) => {
//     let date = new Date();
//     const decodedToken = jwt_decode(userState?.accessToken);
//     if(decodedToken.exp < date.getTime() /1000) {
//       const data = await tokenApis.refreshToken();
//       const refreshUser = {
//         ...userState.currentUser,
//         accessToken: data.accessToken,
//       }
//       userDispatch(userActions.setUser(refreshUser));
//       config.headers["token"] = "Bearer " + data.accessToken;
//     }
//     return config;
//   }, (err) => {
//     return Promise.reject(err);
//   })

// }

export default axiosInstance;
