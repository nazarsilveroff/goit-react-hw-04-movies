import axios from 'axios';
import React, { Component, Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch } from 'react-router';
import {  NavLink } from 'react-router-dom';
import detailRoutes from '../../routes/detailRoutes';
import { MovieDetailsPageWrapper } from './MovieDetailsPageStyled';

const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;

class MovieDetailsPage extends Component {
  state = { movie: null, from: '' };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${movieId}?api_key=${API}`,
      );
      this.setState({
        movie: data,
        from: this.props.location.state?.from,
        input: this.props.location.state?.input,
      });
    } catch (error) {}
  }

  onHandleClick = () => {
    const { history } = this.props;
    const { input, from } = this.state;
    if (this.state?.input) {
      history.push({ pathname: from, search: `query=${input}` });
    } else history.push({ pathname: from });
  };

  render() {
    const { movie } = this.state;
    const { match } = this.props;
    return (
      movie && (
        <MovieDetailsPageWrapper>
          <button
            type="button"
            className="buttonBack opacity"
            onClick={this.onHandleClick}
          >
            BACK
          </button>

          <h1> 
            {movie.title} {movie.release_date}
          </h1>
          <div className="posterContainer ">
            <img
              className="poster"
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
            />
            <p className="userScore">
              User score: {Math.floor(movie.popularity)}%
            </p>
          </div>
          <div className="overviewConatiner">
            <h2>Overview</h2>
            <p className="overview">{movie.overview}</p>
            <h2>Genres</h2>
            <ul className="genresList">
              {movie.genres?.map(genre => (
                <li className="genresItems" key={genre.id}>
                  {genre.name}
                </li>
              ))}
            </ul>
          </div>
          <h2>Additional information</h2>
          <ul className="additionalList">
            {detailRoutes.map(item => (
              <li className="additionalItems" key={item.path}>
                <NavLink
                  className="link"
                  activeClassName="activeLink"
                  to={{
                    pathname: match.url + item.path,
                    state: { from: match.url },
                  }}
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
          <Suspense fallback={<Loader />}>
            <Switch>
              {detailRoutes.map(item => (
                <Route
                  path={match.path + item.path}
                  key={item.path}
                  component={item.component}
                />
              ))}
            </Switch>
          </Suspense>
        </MovieDetailsPageWrapper>
      )
    );
  }
}

export default MovieDetailsPage;
