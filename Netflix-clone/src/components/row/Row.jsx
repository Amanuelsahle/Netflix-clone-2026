import React, { useState, useEffect } from "react";
import "./Row.css";
import axios from "../../utils/axios";
import movieTrailer from "movie-trailer";
import YouTube from "react-youtube";

const Row = ({ isLargeRow, title, fetchUrl }) => {
  const [movie, setMovie] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");

  const base_url = "https://image.tmdb.org/t/p/original";

  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(fetchUrl);
        // console.log(request);
        setMovie(request.data.results);
      } catch (error) {
        console.error("Error", error);
      }
    })();
  }, [fetchUrl]);

  const options = {
    height: "390",
    width: "100%",
    playerVars: { autoplay: 1 },
  };

  const handleClick = (movie) => {
    if (trailerUrl) {
      setTrailerUrl("");
    } else {
      movieTrailer(
        movie?.name || movie?.title || movie?.original_name || "",
      ).then((url) => {
        console.log(url);
        const urlParams = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParams.get("v"));
      });
    }
  };

  return (
    <div>
      <div className="row">
        <h2>{title}</h2>
        <div className="row_posters">
          {movie.map((movie) => (
            <img
              onClick={() => handleClick(movie)}
              key={movie.id}
              className={`row_poster ${isLargeRow && "row_posterLarge"}`}
              src={`${base_url}${isLargeRow ? movie.poster_path : movie.backdrop_path}`}
              alt={movie.name}
            />
          ))}
        </div>
        <div style={{ padding: "40px" }}>
          {trailerUrl && <YouTube videoId={trailerUrl} opts={options} />}
        </div>
      </div>
    </div>
  );
};

export default Row;
