import axios from 'axios';
import React, { Component } from 'react'
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class Reviews extends Component {
  state = { review: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${movieId}/reviews?api_key=${API}`
      );
      this.setState({ review: data.results });
    } catch (error) {}
  }
    render() {
        const { review } = this.state;
        return review && (
          <>
            <ul>
              {review.map((item) => (
                <li>
                  <p>{item.author}</p>
                  <p>{item.content}</p>
                </li>
              ))}
            </ul>
          </>
        ) && (
          <strong>We don`t have eny reviws for this move</strong>
        );
  }
}

export default Reviews;