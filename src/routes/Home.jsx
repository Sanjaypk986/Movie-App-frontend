import axios from "axios";
import React from "react";
import { useLoaderData } from "react-router-dom";
import MovieCard from "./components/movieCard";

export async function loader() {
  const response = await axios.get("http://localhost:3000/movies");
  const movies = response.data;
  return { movies };
}

function Home() {
  const { movies } = useLoaderData();
  return (
    <main>
      <section className="container mx-auto my-6">
        <h2 className="text-3xl text-center my-6">RecommendedMovies</h2>
        <div className="grid grid-cols-4 gap-4">
          {movies.map((movie) => (
            <MovieCard key={movie._id} movie = {movie}/>
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
