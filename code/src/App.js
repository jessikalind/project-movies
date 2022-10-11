/* eslint-disable no-template-curly-in-string */
import React, { useState, useEffect } from 'react';

export const App = () => {
  const [movies, setMovies] = useState([])
  // const [images, setImages] = useState([])

  useEffect(() => {
    fetch('https://api.themoviedb.org/3/movie/popular?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US&page=1')
      .then((data) => data.json())
      .then((configuredData) => setMovies(configuredData.results))
  }, [])

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/movie/popular?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US&page=1')
  //     .then((data) => data.json())
  //     .then((imgData) => setImages(imgData.images))
  // }, [])

  // useEffect(() => {
  //   fetch('https://api.themoviedb.org/3/movie/760161?api_key=f8eb3d0941c8cec7118b188a305910c5&language=en-US')
  //     .then((data) => data.json())
  //     .then((configuredData) => console.log(configuredData))
  // }, [])

  return (
    <section className="main-section">
      {movies.map((movie) => (
        <div className="movie-container">
          <img src={`https://image.tmdb.org/t/p/w300${movie.poster_path}`} alt="film" />
          <h1>{movie.original_title}</h1>
        </div>
      ))}
    </section>
  );
}

// {images.images.map((image) => (
//   // eslint-disable-next-line jsx-a11y/alt-text
// ))}
// <img src={`https://image.tmdb.org/t/p/${image.poster_sizes.w92}${movie.poster_path}}` />
