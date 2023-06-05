import axiosInstance from "./axiosInstance";


export const userApis = {
  register: async(payload) => {
    return axiosInstance.post("/user/register", payload);
  },

  login: async(payload) => {
    return axiosInstance.post("/user/login", payload);
  }
}

