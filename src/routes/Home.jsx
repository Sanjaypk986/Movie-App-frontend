import axios from "axios";
import React, { useRef } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import MovieCard from "./components/movieCard";

export async function loader({params,request}) {
  // taking url parameter
  const url = new URL(request.url);
  const selectedLanguage = url.searchParams.get("language");
  console.log(selectedLanguage);

  let moviesUrl='';
  if (selectedLanguage) {
    moviesUrl = `http://localhost:3000/movies?language=${selectedLanguage}`;
  }
else{
  moviesUrl = "http://localhost:3000/movies";
}
  const response = await axios.get(moviesUrl);
  const movies = response.data;
  return { movies };
}

function Home() {
  const languageRef = useRef()
  const { movies } = useLoaderData();
  const navigate = useNavigate()
  function handleLanguage (){
    const languageSelected = languageRef.current.value
    const url = `/?language=${languageSelected}`
    navigate(url)
  }
  return (
    <main>
      <section className="container mx-auto my-6">
        <h2 className="text-3xl text-center my-6">Recommended Movies</h2>
        <select ref={languageRef} onChange={handleLanguage} >
            <option value="Malayalam">Malayalam</option>
            <option value="English">English</option>
            <option value="Tamil">Tamil</option>
            <option value="Telugu">Telugu</option>
        </select>
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
