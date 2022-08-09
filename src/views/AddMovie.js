import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { emptyMovie } from "../constants/constants";
import { movieService } from "../services/movieService";
import "../sass/addmovie.scss";
import { Button } from "../components/Button";

export const AddMovie = () => {
  const [newMovie, setNewMovie] = useState(emptyMovie);
  const navigate = useNavigate();
  const service = new movieService();

  const addMovie = async (e) => {
    e.preventDefault();
    if (
      !newMovie.name ||
      !newMovie.description ||
      newMovie?.name?.length < 2 ||
      newMovie?.description?.length < 10 ||
      newMovie.releaseYear < 1900
    )
      return;

    newMovie.picture = newMovie.picture ?? "/images/no-image.png";
    newMovie.releaseYear = newMovie.releaseYear ?? "unknown";
    console.log(newMovie);
    await service.postAsync(newMovie);
    navigate(-1);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>add a new movie!</h2>
        <form>
          <div className="form-group">
            <label>name</label>
            <input
              value={newMovie?.name}
              onChange={(e) =>
                setNewMovie({ ...newMovie, name: e.target.value })
              }
            ></input>
          </div>
          <div className="form-group">
            <label>year</label>
            <input
              type="number"
              value={newMovie?.releaseYear === 0 ? "" : newMovie.releaseYear}
              onChange={(e) =>
                setNewMovie({ ...newMovie, releaseYear: e.target.value })
              }
            ></input>
          </div>
          <div className="form-group">
            <label>description</label>
            <textarea
              value={newMovie?.description}
              onChange={(e) =>
                setNewMovie({ ...newMovie, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label>picture</label>
            <textarea
              value={newMovie?.picture}
              onChange={(e) =>
                setNewMovie({ ...newMovie, picture: e.target.value })
              }
            ></textarea>
          </div>
          <Button onClick={(e) => addMovie(e)}>Add Movie !</Button>
        </form>
      </div>
      <div className="center">
        <h2>Image Preview:</h2>
        <img src={newMovie.picture} />
      </div>
    </div>
  );
};
