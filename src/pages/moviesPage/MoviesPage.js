import axios from "axios";
import React, { Component } from "react";
import { Link } from "react-router-dom";

const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class MoviesPage extends Component {
  state = {
    input: "",
    movies: [],
  };

  componentDidMount() {
    // const queryString = this.retrieveQuery() || "";
    // if (queryString.length !== 0) {
    //   this.setState({ input: queryString }, this.searchMove);
    // }
    const { search } = this.props.location;
    const str = search.replace('?query=', '').trim();
    if (search.length !== 0 ) {
       this.setState({ input: str }, this.searchMove);
    }
  }

  componentDidUpdate(prevProps) {
    if (prevProps.location.search !== this.props.location.search) {
      this.searchMove();
    }
  }

  searchMove = async () => {
    const { input } = this.state;
    const { search } = this.props.location;
    try {
      const { data } = await axios.get(
        `${URL}/3/search/movie${search}&api_key=${API}`,
      );
      this.setState({ movies: data.results });
    } catch (error) {}
  };

  handleChange = (e) => {
    this.setState({ input: e.target.value });
  };
  
  handleSumbmit = (e) => {
    e.preventDefault();
    // const qweryParams = new URLSearchParams();
    // qweryParams.set("query", this.state.input);
    this.props.history.push({ search: `query=${this.state.input}` });
  };

  // retrieveQuery = () => {
  //   const qweryParams = new URLSearchParams(this.props.location.search);
  //   return qweryParams.get("query");
  // };

  render() {
    const { movies } = this.state;
    return (
      <>
        <form onSubmit={this.handleSumbmit}>
          <label>
            <input
              type="text"
              value={this.state.input}
              onChange={this.handleChange}
            />
            <button type="submit">FIND</button>
          </label>
        </form>
        <ul>
          {movies.map((movie) => (
            <li key={movie.id}>
              <Link to={`/movies/${movie.id}`}
              >{movie.title}</Link>
            </li>
          ))}
        </ul>
      </>
    );
  }
}

export default MoviesPage;
