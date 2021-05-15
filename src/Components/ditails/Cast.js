import axios from "axios";
import React, { Component } from "react";
import { CastContainer } from "./CastStyled";
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
        <CastContainer>
          <ul className="ImageGallery">
            {cast?.map(
              item =>
                item.profile_path && (
                  <li className="ImageGalleryItem" key={item.id}>
                    <div className="ImageGalleryItem-link">
                      <img
                        className="ImageGalleryItem-image"
                        width="100"
                        src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                        alt={item.original_name}
                      />
                      <p>{item.original_name}</p>
                      <p>
                        <span>In the role:</span> {item.character}
                      </p>
                    </div>
                  </li>
                ),
            )}
          </ul>
        </CastContainer>
      )
    );
  }
}

export default Cast;
