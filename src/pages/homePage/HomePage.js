import axios from "axios";
import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `${URL}/3/trending/movie/day?api_key=${API}`
      );
      this.setState({ movies: data.results });
    } catch (error) {}
  }

  render() {
    const { movies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}>{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default withRouter(HomePage);
