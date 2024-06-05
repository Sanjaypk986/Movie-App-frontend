import React from "react";
import { Link } from "react-router-dom";

const MovieCard = (props) => {
  const movie = props.movie;
  return (
    <article className=" p-2 rounded-xl overflow-hidden flex flex-col justify-center items-center gap-1">
      <Link to={`/movies/${movie._id}`}>
      <img className="movieImg rounded-lg " src={movie.thumbnail} alt="Movie" />
      </Link>
      <h3 className="text-2xl">{movie.title}</h3>
    </article>
  );
};

export default MovieCard;
