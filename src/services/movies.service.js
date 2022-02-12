import {axiosService} from "./axios.service";
import {urls, pageUrl, apiKey, genresUrl} from "../configs";

export const moviesService = {
    getAll:() => axiosService.get(`${urls.movies}${apiKey}`).then(value => value.data.results),
    getByPage: (page) => axiosService.get(`${urls.movies}${apiKey}${pageUrl}${page}`).then(value => value.data),
    getById: (id) => axiosService.get(`${urls.movie}/${id}${apiKey}`).then(value => value.data),
    getAllGenres:(page,genreId) => axiosService.get(`${urls.movies}${apiKey}${pageUrl}${page}${genresUrl}${genreId}`).then(value => value.data.results),
}