import { Fragment, useEffect, useState } from "react";
import useMoviesServices from "../../services/moviesServices";
import UITitle from "../../components/atoms/UITitle";
import UICardMovie from "../../components/molecules/UICardMovie";
import { IMovie } from "../../interfaces/movieInterface";
import { useNavigate } from "react-router-dom";

function PageMovies() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [alertError, setAlertError] = useState({
    show: false,
    message: "",
  });
  const { listMovies } = useMoviesServices();

  useEffect(() => {
    getListMovies();
  }, []);

  const getListMovies = async () => {
    try {
      const resp = await listMovies();
      setMovies(resp.results);
    } catch (error: any) {
      setAlertError({
        show: true,
        message: error.message,
      });
    }
  };

  const navigateDetails = (movieId: number) => {
    navigate(`/app/movie/${movieId}`);
  };

  return (
    <Fragment>
      <section className="w-full py-10 flex flex-col justify-center items-center">
        {alertError?.show && <div>{alertError.message}</div>}
        <UITitle tagTitle="h2">Peliculas</UITitle>
        <div className="py-8 flex justify-center items-center gap-2 flex-wrap">
          {movies.map((movie: IMovie) => (
            <article key={movie.id} onClick={() => navigateDetails(movie.id)}>
              <UICardMovie img={movie.backdrop_path} />
            </article>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default PageMovies;
