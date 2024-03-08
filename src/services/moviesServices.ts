import axios from "axios";
import { baseUrl } from "../environments/environments";

const useMoviesServices = () => {
  const listMovies = async () => {
    const { data } = await axios.get(`${baseUrl}/movie/list?page=1`);
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

  return { listMovies, getMovieDetails, getMovieVideo };
};

export default useMoviesServices;
