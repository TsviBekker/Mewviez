import React, { useEffect, useState } from "react";
import "../sass/movies.scss";
import { movieService } from "../services/movieService";
import { useNavigate } from "react-router-dom";
import { HeartButton } from "../components/HeartButton";
import { WatchedIcon } from "../components/WatchedIcon";
import { Switch } from "../components/Switch";

export const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [allMovies, setAllMovies] = useState([]);
  const [filterWatched, setFilterWatched] = useState(false);
  const [filterLiked, setFilterLiked] = useState(false);
  const [orderYear, setOrderYear] = useState(false);
  const navigate = useNavigate();
  const service = new movieService();

  const like = (movie) => {
    movie.isLiked = !movie.isLiked;
    update(movie);
  };

  const update = async (movie) => {
    try {
      await service.putAsync(movie, movie.id);
    } catch (error) {
      console.error(error);
    }
  };

  const watch = (movie) => {
    movie.isWatched = !movie.isWatched;
    update(movie);
  };

  useEffect(() => {
    (async () => {
      try {
        const data = await service.getAll();
        data.sort((a, b) => (a.name > b.name ? 1 : -1));
        setMovies(data);
        setAllMovies(data);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    //prettier-ignore
    if (filterWatched) setMovies([...movies].filter((m) => m.isWatched === true));
    else if (filterLiked) setMovies([...movies].filter((m) => m.isLiked === true));
    else setMovies(allMovies);
  }, [filterLiked, filterWatched]);

  useEffect(() => {
    //prettier-ignore
    if (orderYear) setMovies(movies.sort((a, b) => a.releaseYear - b.releaseYear));
    else setMovies(movies.sort((a, b) => (a.name > b.name ? 1 : -1)));
  }, [orderYear]);

  return (
    <div className="wrapper">
      <div className="options">
        <div className="options__group">
          <h2>show only:</h2>
          <div>
            <h4>watched</h4>
            <Switch onChange={() => setFilterWatched(!filterWatched)} />
          </div>
          <div>
            <h4>liked</h4>
            <Switch onChange={() => setFilterLiked(!filterLiked)} />
          </div>
        </div>
        <div className="options__group">
          <h2>order by:</h2>
          <div className="order">
            <h4>year</h4>
            <Switch color={false} onChange={() => setOrderYear(!orderYear)} />
            <h4>name</h4>
          </div>
        </div>
      </div>
      <div className="movies-container">
        {movies.map((movie) => {
          return (
            <div key={movie.id} className="movie">
              <img
                onClick={() => navigate(movie.id.toString())}
                className="movie__picture"
                src={movie.picture}
              />
              <div className="movie__details">
                <h2>{movie.name}</h2>
                <div className="space-between">
                  <h4>{movie.releaseYear}</h4>
                  <div className="icon__container">
                    <div onClick={() => watch(movie)}>
                      <WatchedIcon isWatched={movie.isWatched} />
                    </div>
                    <div onClick={() => like(movie)}>
                      <HeartButton isLiked={movie.isLiked} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};
