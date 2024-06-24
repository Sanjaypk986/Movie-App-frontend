import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import ReviewCard from "./components/reviewCard";
import ReviewForm from "./components/reviewForm";



export async function loader({params}) {
    const response = await axios.get(`http://localhost:3000/movies/${params.movieId}`);
    const movie = response.data;

    const verifyResponse = await axios.get('http://localhost:3000/auth/verify',{withCredentials:true});
    const isLoggedIn = verifyResponse.data.verified

    return { movie , isLoggedIn};
  }

const Movie = () => {
  const[reviews,setReviews] = useState([])
  useEffect(() => {
    axios.get('http://localhost:3000/reviews')
    .then((response)=>{
      setReviews(response.data)
    })
  }, [])
  
    const {movie,isLoggedIn} = useLoaderData()
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
      <section className="my-5">
        <h3 className="text-center text-3xl my-2 font-semibold">Reviews</h3>
        {
          isLoggedIn && <ReviewForm />
        }
        {
          reviews.map((review)=>(
            <ReviewCard key={review._id} review={review} />
          ))
        }
        
      </section>
      
    </main>
  );
};

export default Movie;
