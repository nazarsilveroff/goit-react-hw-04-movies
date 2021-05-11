import axios from "axios";
import React, { Component } from "react";
// https://api.themoviedb.org/3/movie/460465?api_key=3c3f31939cc89ca41e272b4d5922ad13
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
// https://developers.themoviedb.org/3/movies/get-movie-details
class MovieDetailsPage extends Component {
  state = { muvie: {} };
  async componentDidMount() {
    const { muvieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${muvieId}?api_key=${API}`
      );
      this.setState({ muvie: data });
      console.log(data);
      console.log(this.state.muvie.genres)
    } catch (error) {}
  }
  render() {
    const { muvie } = this.state;
    return (
      <>
        <h1>
          {muvie.title} {muvie.release_date}
        </h1>
        <img
          width="300"
          src={`https://image.tmdb.org/t/p/w500${muvie.poster_path}`}
          alt={muvie.title}
        />
        <p>User score: {Math.floor(muvie.popularity)}%</p>
        <h2>Overview</h2>
        <p>{muvie.overview}</p>
        <strong>Genres</strong>
        <ul>
          {muvie.genres?.map(genre =>(<li>{genre.name}</li>))}
        </ul>
      </>
    );
  }
}

export default MovieDetailsPage;
