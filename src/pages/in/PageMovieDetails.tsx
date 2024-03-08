import React, { Fragment, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import useMoviesServices from "../../services/moviesServices";
import { IMovie } from "../../interfaces/movieInterface";
import UICardMovie from "../../components/molecules/UICardMovie";
import UITitle from "../../components/atoms/UITitle";
import UIModalVideo from "../../components/organisms/UIModalVideo";
import { IMovieVideo } from "../../interfaces/movieVideoInterface";

function PageMovieDetails() {
  const [detailsMovie, setDetailsMovie] = useState<IMovie | null>(null);
  const [infoVideo, setInfoVideo] = useState<IMovieVideo | null>(null);
  const [open, setOpen] = useState(false);
  const { movieId } = useParams();
  const { getMovieDetails, getMovieVideo } = useMoviesServices();

  useEffect(() => {
    getDetails();
  }, []);

  const getDetails = async () => {
    const resp: IMovie = await getMovieDetails(parseInt(movieId || ""));
    setDetailsMovie(resp);
    const respVideo: IMovieVideo = await getMovieVideo(parseInt(movieId || ""));
    setInfoVideo(respVideo);
  };

  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <Fragment>
      {open && (
        <UIModalVideo
          site={infoVideo?.videoInfo.site || ""}
          videoKey={infoVideo?.videoInfo.key || ""}
          open={open}
          setOpen={setOpen}
        />
      )}
      <div className="absolute bg-black bg-opacity-45 h-[110%] w-[100%]"></div>
      <div
        className="bg-cover bg-center bg-no-repeat h-[100%] w-[100%]"
        style={{ backgroundImage: `url(${detailsMovie?.backdrop_path})` }}
      >
        <section className="z-10 px-32 py-20 grid grid-cols-12 justify-center items-center gap-12">
          <div
            className="h-[600px] w-[95%] col-span-4 flex justify-center items-center"
            onClick={() => infoVideo?.videoInfo && handleOpen()}
          >
            <UICardMovie
              img={detailsMovie?.poster_path || ""}
              size="h-[96%] w-[96%]"
            />
          </div>
          <article className="p-10 col-span-8 rounded-xl flex flex-col justify-start items-start bg-black bg-opacity-45">
            <UITitle className="z-10" tagTitle="h2">
              Resumen
            </UITitle>
            <p className="z-10 text-white py-10">{detailsMovie?.overview}</p>
          </article>
        </section>
      </div>
    </Fragment>
  );
}

export default PageMovieDetails;
