import {axiosService} from "./axios.service";
import {urls, apiKey} from "../configs";

export  const genresService={
    getAll: ()=> axiosService.get(`${urls.genres}${apiKey}`).then(value => value.data)
}