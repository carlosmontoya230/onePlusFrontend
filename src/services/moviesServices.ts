import axios from "axios";
import { baseUrl } from "../environments/environments";

const useMoviesServices = () => {
  const listMovies = async (type: string) => {
    const { data } = await axios.get(
      `${baseUrl}/movie/type/${type}/list?page=1`
    );
    return data;
  };

  const listMoviesByGenres = async (genres: string) => {
    const { data } = await axios.get(`${baseUrl}/movie/genres/${genres}/list`);
    return data;
  };

  const getMovieDetails = async (movieId: number) => {
    const { data } = await axios.get(`${baseUrl}/movie/${movieId}`);
    return data;
  };

  const getMovieVideo = async (movieId: number) => {
    const { data } = await axios.get(`${baseUrl}/movie/${movieId}/video`);
    return data;
  };

  return { listMovies, listMoviesByGenres, getMovieDetails, getMovieVideo };
};

export default useMoviesServices;
