import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import axios from "../axios";
import requests from "../requests";
import "./Hero.css";
const HeroBanner = () => {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);
  console.log(movie);
  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner_container">
        {/* title */}
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>

        <h1 className="banner_desc">{truncate(movie?.overview, 150)}</h1>
        <div className="btn_box">
          <button className="banner_btn">My list</button>
          <button className="banner_btn">Play</button>
        </div>
      </div>
      <div className="fade_bannerBottom"></div>
    </header>
  );
};

export default HeroBanner;
