import axios from 'axios';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { MoviesPageContainer } from './MoviesPageStyled';

const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class MoviesPage extends Component {
  state = {
    input: '',
    movies: [],
  };

  componentDidMount() {
    const { search } = this.props.location;
    const searchStr = new URLSearchParams(search).get('query');
    if (search.length !== 0) {
      this.setState({ input: searchStr }, this.searchMove);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchMove();
    }
  }

  searchMove = async () => {
    const { search } = this.props.location;
    try {
      const { data } = await axios.get(
        `${URL}/3/search/movie${search}&api_key=${API}`,
      );
      this.setState({ movies: data.results });
    } catch (error) {}
  };

  handleChange = e => this.setState({ input: e.target.value });

  handleSumbmit = e => {
    e.preventDefault();
    this.props.history.push({ search: `query=${this.state.input}` });
  };

  render() {
    const { movies, input } = this.state;
    return (
      <MoviesPageContainer>
        <header className="Searchbar">
          <form className="SearchForm" onSubmit={this.handleSumbmit}>
            <button type="submit" className="SearchForm-button">
              <span className="SearchForm-button-label">Search</span>
            </button>

            <input
              onChange={this.handleChange}
              className="SearchForm-input"
              type="text"
              value={input}
              placeholder="Search your movies"
            />
          </form>
        </header>
        <ul className="ImageGallery">
          {movies.map(movie => (
            <li className="ImageGalleryItem" key={movie.id}>
              <Link
                className="ImageGalleryItem-link"
                to={{
                  pathname: `/movies/${movie.id}`,
                  state: { from: `/movies`, input },
                }}
              >
                <img
                  className="ImageGalleryItem-image"
                  src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
                  alt={movie.title}
                />
                <p>{movie.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </MoviesPageContainer>
    );
  }
}

export default MoviesPage;
