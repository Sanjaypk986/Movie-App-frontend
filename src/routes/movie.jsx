import axios from "axios";
import React from "react";
import { Link, useLoaderData } from "react-router-dom";


export async function loader({params}) {
    const response = await axios.get(`http://localhost:3000/movies/${params.movieId}`);
    const movie = response.data;
    return { movie };
  }

const Movie = () => {
    const {movie} = useLoaderData()
  return (
    <main className="container mx-auto">
      <section className="grid grid-cols-2 justify-center items-center py-6">
        <img
          className="movieCardImg mx-auto "
          src= {movie.thumbnail}
          alt=""
        />
        <div className="flex flex-col gap-5">
          <h2 className="text-3xl font-semibold">{movie.title}</h2>
          <h4 className="text-xl font-semibold">{movie.language}</h4>
          <p>
            {movie.description}
          </p>
          <Link to={"#"}>
            <button className="button w-full">Book Now</button>
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Movie;
