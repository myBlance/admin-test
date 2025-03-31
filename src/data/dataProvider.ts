import { DataProvider, fetchUtils } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";

const apiUrl = import.meta.env.VITE_JSON_SERVER_URL || "http://localhost:3000"; // API
const httpClient = fetchUtils.fetchJson;

const customDataProvider = simpleRestProvider(apiUrl, httpClient) as DataProvider;

// Gói lại phương thức `getList` để thêm Content-Range giả lập
const dataProvider: DataProvider = {
    ...customDataProvider,

    getList: async (resource, params) => {
        const { page, perPage } = params.pagination || { page: 1, perPage: 10 };
        const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}`;

        const response = await httpClient(url);
        const total = response.headers.get("x-total-count") || 100; // Giá trị mặc định nếu thiếu

        return {
            data: await response.json,
            total: parseInt(total.toString(), 10),
        };
    },
};

export default dataProvider;
