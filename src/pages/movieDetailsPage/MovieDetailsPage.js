import axios from "axios";
import React, { Component, Suspense } from "react";
import Loader from "react-loader-spinner";
import { Route, Switch } from "react-router";
import { Link } from "react-router-dom";
import detailRoutes from "../../routes/detailRoutes";

const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;

class MovieDetailsPage extends Component {
  state = { movie: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${movieId}?api_key=${API}`
      );
      this.setState({ movie: data });
    } catch (error) {}
  }

  onHandleClick = () => {
    this.props.history.goBack()
  }

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      movie && (
        <>
          <button type="button" onClick={this.onHandleClick}>
            BACK
          </button>
          <h1>
            {movie.title} {movie.release_date}
          </h1>
          <img
            width="300"
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
          />
          <p>User score: {Math.floor(movie.popularity)}%</p>
          <h2>Overview</h2>
          <p>{movie.overview}</p>
          <strong>Genres</strong>
          <ul>
            {movie.genres?.map((genre) => (
              <li key={genre.id}>{genre.name}</li>
            ))}
          </ul>
          <h2>Additional information</h2>
          <ul>
            {detailRoutes.map((item) => (
              <li key={item.path}>
                <Link to={match.url + item.path}>{item.name}</Link>
              </li>
            ))}
          </ul>
          <Suspense fallback={<Loader />}>
            <Switch>
              {detailRoutes.map((item) => (
                <Route
                  path={match.path + item.path}
                  key={item.path}
                  component={item.component}
                />
              ))}
            </Switch>
          </Suspense>
        </>
      )
    );
  }
}

export default MovieDetailsPage;
