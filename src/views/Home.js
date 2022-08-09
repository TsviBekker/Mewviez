import React from "react";
import "../sass/home.scss";

export const Home = () => {
  return (
    <main>
      <h1>hello traveler</h1>
      <h3>
        welcome to mewvies, an app where you can keep track of your favorite
        movies
      </h3>
      <a href="linkedin.com/in/tsvi-bekker-174212235">
        <p>Made by Tsvika Bekker</p>
      </a>

      <h3>Made with:</h3>
      <ul>
        <li>React</li>
        <li>Sass</li>
      </ul>

      <h3>Functionality:</h3>
      <ul>
        <li>CRUD operations on movies</li>
        <li>Sorting movies by date/name</li>
        <li>Filtering movies by Liked/Watched</li>
        <li>Marking movies as liked/watched</li>
      </ul>
    </main>
  );
};
