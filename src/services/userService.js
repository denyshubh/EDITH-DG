import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/users";

export function register(user) {
    return http.post(apiEndpoint, {
        user_id: Date.now(),
        email: user.username,
        token: user.password,
        name: user.name,
        is_admin: 0,
    });
}
