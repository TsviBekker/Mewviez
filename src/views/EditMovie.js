import React, { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { emptyMovie } from "../constants/constants";
import { movieService } from "../services/movieService";
import "../sass/addmovie.scss";
import { Button } from "../components/Button";

export const EditMovie = () => {
  const { id } = useParams();
  const service = new movieService();
  const [movie, setMovie] = useState(emptyMovie);
  const [originalMovie, setOriginalMovie] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      const data = await service.getByIdAsync(id);
      setMovie(data);
      setOriginalMovie(data);
    })();
  }, []);

  const update = async (e) => {
    e.preventDefault();
    await service.putAsync(movie, id);
    navigate(-1);
  };

  const discard = (e) => {
    e.preventDefault();
    setMovie(originalMovie);
  };

  return (
    <div className="wrapper">
      <div className="container">
        <h2>edit "{originalMovie.name}"</h2>
        <form>
          <div className="form-group">
            <label>name</label>
            <input
              value={movie?.name}
              onChange={(e) => setMovie({ ...movie, name: e.target.value })}
            ></input>
          </div>
          <div className="form-group">
            <label>year</label>
            <input
              type="number"
              value={movie?.releaseYear === 0 ? "" : movie.releaseYear}
              onChange={(e) =>
                setMovie({ ...movie, releaseYear: e.target.value })
              }
            ></input>
          </div>
          <div className="form-group">
            <label>description</label>
            <textarea
              value={movie?.description}
              onChange={(e) =>
                setMovie({ ...movie, description: e.target.value })
              }
            ></textarea>
          </div>
          <div className="form-group">
            <label>picture</label>
            <textarea
              value={movie?.picture}
              onChange={(e) => setMovie({ ...movie, picture: e.target.value })}
            ></textarea>
          </div>
          <div className="button__container">
            <Button onClick={(e) => update(e)}>update</Button>
            <Button onClick={(e) => discard(e)}>discard</Button>
          </div>
        </form>
      </div>
      <div className="center">
        <h2>Image Preview:</h2>
        <img src={movie.picture} />
      </div>
    </div>
  );
};
