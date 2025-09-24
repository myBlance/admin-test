import { AuthProvider } from "react-admin";
import api from "../services/api";

export const authProvider: AuthProvider = {
    async login({ username, password }) {
        try {
            const res = await api.post(
                "/api/Accounts/Login",
                {
                    accountUserName: username,
                    accountPassword: password,
                },
                {
                    headers: { "Content-Type": "application/json" },
                }
            );

            let response: any = res.data;
            if (typeof response === "string") {
                try {
                    response = JSON.parse(response);
                } catch {
                    console.error("Không parse được JSON, raw data:", response);
                    throw new Error("Response không đúng định dạng JSON");
                }
            }

            console.log("🔍 Login API response:", response);

            // token nằm ở response.data
            const token = response?.data;
            if (!token) {
                throw new Error("Không tìm thấy token trong response");
            }

            localStorage.setItem("token", token);
            localStorage.setItem("username", username);
        } catch (error) {
            console.error("Login error:", error);
            throw new Error("Đăng nhập thất bại, vui lòng thử lại");
        }
    },



    async logout() {
        localStorage.removeItem("token");
        localStorage.removeItem("username");
    },

    async checkError({ status }: { status: number }) {
        if (status === 401 || status === 403) {
            localStorage.removeItem("token");
            localStorage.removeItem("username");
            throw new Error("Phiên đăng nhập hết hạn");
        }
    },

    async checkAuth() {
        if (!localStorage.getItem("token")) {
            throw new Error("Cần đăng nhập");
        }
    },

    async getIdentity() {
        return {
            id: localStorage.getItem("username") || "",
            fullName: localStorage.getItem("username") || "",
        };
    },
};
