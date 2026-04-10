import React from "react";
import Row from "../row/Row";
import requests from "../../utils/requests";

function RowList() {
  return (
    <div>
      <Row
        fetchUrl={requests.fetchNetflixOriginals}
        title="Netflix Originals"
        isLargeRow={true}
      />
      <Row fetchUrl={requests.fetchTrending} title="Trending Now" />
      <Row fetchUrl={requests.fetchTopRated} title="Top Rated" />{" "}
      <Row fetchUrl={requests.fetchTvShows} title="Tv shows" />
      <Row fetchUrl={requests.fetchActionMovies} title="Action Movies" />
      <Row fetchUrl={requests.fetchComedyMovies} title="Comedy Movies" />
      <Row fetchUrl={requests.fetchHorrorMovies} title="Horror Movies" />
      <Row fetchUrl={requests.fetchRomanceMovies} title="Romance Movies" />
      <Row fetchUrl={requests.fetchDocumentaries} title="Documentaries" />
    </div>
  );
}

export default RowList;
