import React, { useEffect, useState } from "react";
import MovieContext from "./MovieContext";
import axios from "axios";

const MovieState = (props) => {
  const url = "http://localhost:1000/api";

  const [movie, setMovies] = useState([]);

  useEffect(() => {
    const fetchDataFromAPI = async () => {
      const api = await axios.get(`${url}/movies/get`);
      console.log("movies  = ", api.data.movie);
      setMovies(api.data.movie)
    };
    fetchDataFromAPI();
  }, []);

  return (
    <MovieContext.Provider value={{ movie }}>
      {props.children}
    </MovieContext.Provider>
  );
};

export default MovieState;