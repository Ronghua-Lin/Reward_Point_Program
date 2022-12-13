import axios from "axios";
import { BASE_URL } from "../config/constants.js";

export default async function fetchData() {

    const data=await axios
        .get(`${BASE_URL}/transactions`)
        .then(function (response) {
            return response.data;
        })
        .catch(function (error) {
            // handle error
            console.log(error);
        });
    return data;
}
