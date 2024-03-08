import { Fragment } from "react";

function UICardMovie({ img, size = "h-48 w-80" }: UICardMovieProps) {
  return (
    <Fragment>
      <article
        className={`${size} p-[2px] flex justify-center items-center rounded-2xl transition-all duration-300 transform hover:scale-105 hover:border-4 hover:border-white cursor-pointer`}
      >
        <div
          className={`bg-cover bg-center bg-no-repeat h-[98%] w-[98%] rounded-2xl shadow-lg`}
          style={{ backgroundImage: `url(${img})` }}
        ></div>
      </article>
    </Fragment>
  );
}

interface UICardMovieProps {
  img: string;
  size?: string;
}

export default UICardMovie;
