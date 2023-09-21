import axios from 'axios';

axios.defaults.baseURL = 'https://api.themoviedb.org/3';
const API_KEY  = '34043c6f5f09de3bdcdf11f840d9d7a7';

// список найпопулярніших фільмів на сьогодні для створення колекції на головній сторінці
export const fetchTrendingMovies = async () => {
    const resp = await axios.get(
      `/trending/movie/day?api_key=${API_KEY}&language=en-US`
    );
    return resp.data;
  };

// пошук фільму за ключовим словом на сторінці фільмів
export const fetchSearchMovies = async query => {
    const resp = await axios.get(
        `/search/movie?api_key=${API_KEY}&query=${query}&include_adult=true&language=en-US`
    );
    return resp.data
  }

// запит повної інформації про фільм для сторінки кінофільму
export const fetchDetailsMovie = async movieId => {
    const resp = await axios.get(
        `/movie/${Number(movieId)}?api_key=${API_KEY}&language=en-US`
    )
    return resp.data
}

// запит інформації про акторський склад для сторінки кінофільму
export const fetchCreditsMovie = async movieId => {
    const resp = await axios.get(
        `/movie/${Number(movieId)}/credits?api_key=${API_KEY}&language=en-US`
);
    return resp.data
    
}

// запит оглядів для сторінки кінофільму
export const fetchReviewsMovie = async movieId => {
    const resp = await axios.get(
        `/movie/${Number(movieId)}/reviews?api_key=${API_KEY}&language=en-US`
    );
    return resp.data
}