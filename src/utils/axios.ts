import axios from "axios";

const instance = axios.create({
    baseURL: import.meta.env.VITE_SERVER_URL,
    headers: {
        "Content-Type": "application/json",
    },
});

let token = localStorage.getItem("token");

if (token) {
    token = JSON.parse(token);
    instance.defaults.headers["Authorization"] = `Bearer ${token}`;
}

export default instance;
