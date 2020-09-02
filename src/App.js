import React from "react";
import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav";

function App() {
  return (
    <div className="app">
      <Nav />
      <Banner />
      <Row
        title="NETFLIX ORIGINALS"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
      <Row title="Top rated" fetchUrl={requests.fetchTrending} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentries" fetchUrl={requests.fetchDocumentries} />
    </div>
  );
}

export default App;

// MY API KEY  0038b6e358a496acd20c6619db122c9f

// API REQUEST https://api.themoviedb.org/3/movie/550?api_key=0038b6e358a496acd20c6619db122c9f

// API READ ACCESS TOKEN eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwMDM4YjZlMzU4YTQ5NmFjZDIwYzY2MTlkYjEyMmM5ZiIsInN1YiI6IjVmNGI5ZDQ0NzQ1MDdkMDAzMmFmNmU4MiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.ytTPJs6Qwvpwj2UyrMD85Ovcx0zyOl2BHQb-4EzPMdQ
