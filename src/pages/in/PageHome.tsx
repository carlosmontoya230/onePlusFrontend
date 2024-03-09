import { Fragment, useEffect, useState } from "react";
import useMoviesServices from "../../services/moviesServices";
import UITitle from "../../components/atoms/UITitle";
import UICardMovie from "../../components/molecules/UICardMovie";
import { IMovie } from "../../interfaces/movieInterface";
import { useNavigate } from "react-router-dom";
import UICard from "../../components/molecules/UICard";

function PageHome() {
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);
  const [alertError, setAlertError] = useState({
    show: false,
    message: "",
  });
  const { listMovies } = useMoviesServices();
  const categories = [
    {
      id: 28,
      key: "Action",
      name: "Acción",
      description: "",
    },
    {
      id: 12,
      key: "Adventure",
      name: "Aventura",
      description: "",
    },
    {
      id: 16,
      key: "Animation",
      name: "Anime",
      description: "",
    },
    {
      id: 35,
      key: "Comedy",
      name: "Comedia",
      description: "",
    },
    {
      id: 27,
      key: "Horror",
      name: "Horror",
      description: "",
    },
  ];

  useEffect(() => {
    getListMovies();
  }, []);

  const getListMovies = async () => {
    try {
      const resp = await listMovies("popular");
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

  const handleGenres = (name: string, genresId: any) => {
    console.log("genresId: ****", genresId);
    navigate(`/app/category/${name}/${genresId}`);
  };

  return (
    <Fragment>
      <section className="w-full py-10 flex flex-col justify-center items-center">
        {alertError?.show && <div>{alertError.message}</div>}
        <section className="py-12 flex justify-center items-center gap-8 flex-wrap">
          {categories.map((category) => (
            <article
              className="cursor-pointer transition-all duration-500 w-56 h-96 transform hover:scale-105"
              key={category.id}
              onClick={() => handleGenres(category.name, category.id)}
            >
              <UICard
                key={category.id}
                className="h-full w-full"
                title={category.name}
              >
                <p className="text-center">{category.description}</p>
              </UICard>
            </article>
          ))}
        </section>
        <UITitle tagTitle="h2">Mas populares</UITitle>
        <div className="py-8 flex justify-center items-center gap-2 flex-wrap">
          {movies?.map((movie: IMovie) => (
            <article key={movie.id} onClick={() => navigateDetails(movie.id)}>
              <UICardMovie img={movie.backdrop_path} />
            </article>
          ))}
        </div>
      </section>
    </Fragment>
  );
}

export default PageHome;
