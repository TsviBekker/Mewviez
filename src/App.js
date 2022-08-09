import React from "react";
import { Route, Routes } from "react-router-dom";
import { AddMovie } from "./views/AddMovie";
import { EditMovie } from "./views/EditMovie";
import { Home } from "./views/Home";
import { MovieDetails } from "./views/MovieDetails";
import { Movies } from "./views/Movies";
import { NavBar } from "./components/NavBar";

export const App = () => {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movies" element={<Movies />}></Route>
        <Route path="movies/:id" element={<MovieDetails />}></Route>
        <Route path="movies/:id/edit" element={<EditMovie />}></Route>
        <Route path="add" element={<AddMovie />}></Route>
      </Routes>
    </>
  );
};
