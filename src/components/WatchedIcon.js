import React, { useState } from "react";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { movieService } from "../services/movieService";
import "./WatchedIcon.scss";

export const WatchedIcon = ({ isWatched }) => {
  const [watched, setWatched] = useState(isWatched);

  return (
    <div className="watched" onClick={() => setWatched(!watched)}>
      {watched ? <AiFillEye /> : <AiFillEyeInvisible />}
    </div>
  );
};
