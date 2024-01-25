import axios from "axios";

const movieBaseUrl = "http://api.themoviedb.org/3"

const api_key = "b17b73ce858629e0f3de72d1b2308786"

// https://api.themoviedb.org/3/trending/all/day?api_key=b17b73ce858629e0f3de72d1b2308786

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key="+api_key);

const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf';

const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default {
    getTrendingVideos,
    getMovieByGenreId
}