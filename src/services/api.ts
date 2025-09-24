import axios from "axios";

const api = axios.create({
  baseURL: "https://thongtinnguon.mobifone.vn/qlns2", // backend 
});

// interceptor để thêm token vào mỗi request
api.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem("token");
            if (token) {
                if (!config.headers) {
                    config.headers = {};
                }
                config.headers.Authorization = `Bearer ${token}`;
            }
        return config;
    },
    (error) => Promise.reject(error)
);

export default api;