import axios from "axios";
import React, { Component } from "react";
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class Cast extends Component {
  state = { cast: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${movieId}/credits?api_key=${API}`
      );
      this.setState({ cast: data.cast });
    } catch (error) {}
  }
  render() {
    const { cast } = this.state;

    return (
      cast && (
        <>
          <ul>
            {cast?.map(
              (item) =>
                item.profile_path && (
                  <li key={item.id}>
                    <img
                      width="100"
                      src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                      alt={item.original_name}
                    />
                    <p>{item.original_name}</p>
                    <p>{item.character}</p>
                  </li>
                )
            )}
          </ul>
        </>
      )
    );
  }
}

export default Cast;
