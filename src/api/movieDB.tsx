import axios from "axios";

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'f75b11b5ff1f40b1f79646e1af971f74',
        language: 'es-ES'
    }
})

export default movieDB;