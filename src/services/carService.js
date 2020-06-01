import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndpoint = apiUrl + "/cars";

function carUrl(vin) {
    return `${apiEndpoint}/${vin}`;
}

export function getCars() {
    return http.get(apiEndpoint)
}
export function deleteCar(vin) {
    return http.delete(carUrl(vin))
}
export function getBrands(vin) {
    return http.get(carUrl(vin))
}
