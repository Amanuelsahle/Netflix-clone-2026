import React, { useState, useEffect, use } from "react";
import "./Banner.css";
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import axios from "../../utils/axios";
import requests from "../../utils/requests";

function Banner() {
  const [movie, setMovie] = useState({});
  useEffect(() => {
    (async () => {
      try {
        const request = await axios.get(requests.fetchNetflixOriginals);
        // console.log(request);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length)
          ],
        );
      } catch (error) {
        console.error("Error", error);
      }
    })();
  }, []);
  // console.log(movie);

  function truncateString(str, num) {
    if (str?.length > num) {
      return str.slice(0, num) + "...";
    } else {
      return str;
    }
  }
  return (
    <div className="container-fluid p-0 ">
      <div
        className=" shadow overflow-hidden sectionStyle"
        style={{
          backgroundSize: "cover",
          backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          aspectRatio: "16/8.5",
        }}
      >
        {/* Rating in top-right corner */}

        {/* Text Content */}
        <div className=" contentStyle">
          <h1 className="display-4 fw-bold col-6">
            {movie?.name || movie?.title || movie?.original_name}
          </h1>
          <p className="lead col-6">{truncateString(movie?.overview, 150)}</p>
          <div>
            <button
              className="btn btn-primary btn-lg mt-3 me-2 bannerButton fw-bold "
              style={{
                fontSize: "2vw",
              }}
            >
              <PlayArrowIcon sx={{ fontSize: "3vw", color: "black" }} /> Play
            </button>
            <button
              className="btn btn-primary btn-lg mt-3 bannerButton fw-bold"
              style={{
                backgroundColor: "black",
                color: "white",
                fontSize: "2vw",
              }}
            >
              <InfoOutlinedIcon sx={{ fontSize: "3vw", color: "white" }} /> More
              Info
            </button>
          </div>
          <div>
            <div className="rating">
              <p>13+</p>
            </div>
            {/* fade  bottom*/}
          </div>
        </div>
        <div className="fade-bottom "></div>
      </div>
    </div>
  );
}

export default Banner;
