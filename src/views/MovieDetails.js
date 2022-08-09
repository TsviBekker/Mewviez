import React, { useEffect, useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import { movieService } from "../services/movieService";
import { Button } from "../components/Button";
import "../sass/moviedetails.scss";

export const MovieDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [movie, setMovie] = useState({});
  const service = new movieService();

  useEffect(() => {
    (async () => {
      try {
        const data = await service.getByIdAsync(id);
        console.log(data);
        setMovie(data);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  const deleteMovie = async () => {
    await service.deleteAsync(id);
    navigate(-1);
  };

  return (
    <div className="movie__container">
      <div className="movie__image">
        <img src={movie?.picture} />
      </div>
      <div className="movie__details">
        <h3 style={{ maxHeight: "46px" }}>
          name: <p>{movie?.name}</p>
        </h3>
        <h3>
          description: <p>{movie?.description}</p>
        </h3>
        <h3>
          releaseYear:
          <p>{movie?.releaseYear}</p>
        </h3>
        <h3>
          isWatched: <p>{movie?.isWatched?.toString()}</p>
        </h3>
        <div className="button__container">
          <Button onClick={() => navigate("edit")}>EDIT</Button>
          <Button onClick={() => deleteMovie()}>DELETE</Button>
        </div>
      </div>
    </div>
  );
};
