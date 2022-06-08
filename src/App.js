import "./App.css";
import RowBox from "./MovieCard";
import requests from "./requests";
import HeroBanner from "./Hero";
import NavBar from "./NavBar";
// Auth key3
// b222e217c74daf48b3a19ca449ef1560
// example API Request
// https://api.themoviedb.org/3/movie/550?api_key=b222e217c74daf48b3a19ca449ef1560
// firebase login
// firebase init

function App() {
  return (
    <div className="App">
      {/* navbar */}
      <NavBar />
      {/* banner */}
      <HeroBanner />

      <RowBox
        title="Box Office"
        fetchUrl={requests.fetchNetflixOriginals}
        isLargeRow
      />
      <RowBox title="Trending Now" fetchUrl={requests.fetchTrending} />
      <RowBox title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <RowBox title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <RowBox title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <RowBox title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <RowBox title="Romance Movies" fetchUrl={requests.fetchRomanceMovies} />
      <RowBox title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
    </div>
  );
}

export default App;
