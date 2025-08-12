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
        const { filter } = params;

        // Chuyển object filter thành query string
        const filterQuery = filter
            ? Object.keys(filter)
                  .map((key) => `${key}=${encodeURIComponent(filter[key])}`)
                  .join("&")
            : "";

        const url = `${apiUrl}/${resource}?_page=${page}&_limit=${perPage}${
            filterQuery ? `&${filterQuery}` : ""
        }`;

        const response = await httpClient(url);
        const total = response.headers.get("x-total-count") || 100; // Giá trị mặc định nếu thiếu

        return {
            data: await response.json,
            total: parseInt(total.toString(), 10),
        };
    },
};

export default dataProvider;


// import { DataProvider, fetchUtils } from "react-admin";

// const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
// const TMDB_BASE_URL = "https://api.themoviedb.org/3";
// const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w200";
// const httpClient = fetchUtils.fetchJson;

// let genreMap: Record<number, string> = {}; // Lưu danh sách genre

// // Gọi API lấy danh sách thể loại (genre) và lưu vào biến
// const fetchGenres = async () => {
//     if (Object.keys(genreMap).length > 0) return genreMap;

//     const url = `${TMDB_BASE_URL}/genre/movie/list?api_key=${API_KEY}&language=en-US`;
//     const { json } = await httpClient(url);

//     genreMap = Object.fromEntries(json.genres.map((g: any) => [g.id, g.name]));
//     return genreMap;
// };

// const tmdbProvider: DataProvider = {
//     getList: async (_resource, params) => {
//         const { page } = params.pagination ?? { page: 1, perPage: 10 };
//         const search = params.filter?.query;

//         const url = search
//             ? `${TMDB_BASE_URL}/search/movie?query=${encodeURIComponent(search)}&api_key=${API_KEY}&page=${page}`
//             : `${TMDB_BASE_URL}/movie/popular?api_key=${API_KEY}&page=${page}`;

//         const { json } = await httpClient(url);
//         const genres = await fetchGenres();

//         return {
//             data: json.results.map((movie: any) => ({
//                 id: movie.id,
//                 title: movie.title,
//                 overview: movie.overview,
//                 poster: movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : "",
//                 release_date: movie.release_date,
//                 vote_average: movie.vote_average,
//                 genre: movie.genre_ids.map((id: number) => genres[id]).join(", "),
//             })),
//             total: json.total_results,
//         };
//     },

//     // Các hàm khác...
//     getOne: async () => Promise.reject("Not implemented"),
//     getMany: async () => Promise.reject("Not implemented"),
//     getManyReference: async () => Promise.reject("Not implemented"),
//     create: async () => Promise.reject("Not implemented"),
//     update: async () => Promise.reject("Not implemented"),
//     updateMany: async () => Promise.reject("Not implemented"),
//     delete: async () => Promise.reject("Not implemented"),
//     deleteMany: async () => Promise.reject("Not implemented"),
// };

// export default tmdbProvider;
