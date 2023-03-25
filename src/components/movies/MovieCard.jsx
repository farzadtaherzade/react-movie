import React from "react";
import { Link } from "react-router-dom";

function MovieCard({ movie: { poster_path, id }, media_type }) {
  return (
    <div className="transition-transform duration-700 hover:drop-shadow-md hover:rounded-3xl hover:scale-125 cursor-pointer hover:text-primary-focus">
      <Link to={`/${media_type}/${id}`}>
        <img
          src={`https://image.tmdb.org/t/p/w500${poster_path}`}
          className="m-0 p-0 h-full"
          alt=""
        />
      </Link>
    </div>
  );
}

export default MovieCard;
