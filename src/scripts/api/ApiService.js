import axios from "axios";

const baseUrl = "https://restaurant-api.dicoding.dev";

const ApiService = {
    getListRestaurant() {
        return axios.get(`${baseUrl}/list`).then((res) => res);
    },

    getDetailRestaurant(id) {
        return axios.get(`${baseUrl}/detail/${id}`).then((res) => res);
    },

    searchData(query) {
        return axios.get(`${baseUrl}/search?q=${query}`).then((res) => res);
    },

    addReview(data) {
        return axios
            .post(`${baseUrl}/review`, data, {
                headers: {
                    "X-Auth-Token": 12345,
                    "Content-Type": "application/json"
                }
            })
            .then((res) => res);
    },

    getRestaurantPicture(size, id) {
        return `${baseUrl}/images/${size}/${id}`;
    }
};

export default ApiService;
