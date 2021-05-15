import axios from 'axios';
import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { HomePageWrapper } from './HomePageStyled';
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class HomePage extends Component {
  state = { movies: [] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `${URL}/3/trending/movie/day?api_key=${API}`,
      );
      this.setState({ movies: data.results });
    } catch (error) {}
  }

  render() {
    const { movies } = this.state;
    return (
      <HomePageWrapper>
        <h1>Trending today</h1>
        <ul className="ImageGallery">
          {movies.map(movie => (
            <li className="ImageGalleryItem" key={movie.id}>
              <Link
                className="ImageGalleryItem-link"
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: `/` },
                }}
              >
              
                <img
                  className="ImageGalleryItem-image"
                  width="200"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p className="ImageGalleryItem-title">{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </HomePageWrapper>
    );
  }
}

export default withRouter(HomePage);
