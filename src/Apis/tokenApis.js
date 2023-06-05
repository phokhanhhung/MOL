import axiosInstance from "./axiosInstance";

export const tokenApis = {
  refreshToken: async() => {
    return axiosInstance.get("/user/refreshToken");
  }
}