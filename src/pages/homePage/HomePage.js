import axios from "axios";
import React, { Component } from "react";
import { NavLink,  } from "react-router-dom";
// import MovieDetailsPage from "../movieDetailsPage/MovieDetailsPage";
// https://api.themoviedb.org/3/movie/460465/external_ids?api_key=3c3f31939cc89ca41e272b4d5922ad13
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class HomePage extends Component {
  state = { muvies: [] };

  async componentDidMount() {
    try {
      const { data } = await axios.get(
        `${URL}/3/trending/movie/day?api_key=${API}`
      );
      this.setState({ muvies: data.results });
      console.log(this.state.muvies);
    } catch (error) {}
  }

  render() {
    console.log(this.props.match.url);
    const { muvies } = this.state;
    return (
      <>
        <h1>Trending today</h1>
        <ul>
          {muvies.map((muvie) => (
            <li key={muvie.id}>
              <NavLink to={`/movies/${muvie.id}`}>{muvie.title}</NavLink>
            </li>
          ))}
        </ul>
        {/* <Route path={`/movies/:muvieId`} component={MovieDetailsPage} /> */}
      </>
    );
  }
}

export default HomePage;
