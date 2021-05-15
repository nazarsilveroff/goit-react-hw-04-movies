import axios from 'axios';
import React, { Component } from 'react';
import { ReviewContainer } from './ReviewsStyled';
const URL = `https://api.themoviedb.org`;
const API = `3c3f31939cc89ca41e272b4d5922ad13`;
class Reviews extends Component {
  state = { review: null };

  async componentDidMount() {
    const { movieId } = this.props.match.params;
    try {
      const { data } = await axios.get(
        `${URL}/3/movie/${movieId}/reviews?api_key=${API}`,
      );
      this.setState({ review: data.results });
    } catch (error) {}
  }
  render() {
    const { review } = this.state;
    return (
      <ReviewContainer>
        {review && review.length !== 0 ? (
          <ul className="reviewList">
            {review.map(item => (
              <li className="reviewItems" key={item.id}>
                <p className="nikName">{item.author}</p>
                <div className="overviewContainer">
                  <p className="overview">{item.content}</p>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <strong className="Sore">
            We don`t have eny reviws for this move
          </strong>
        )}
      </ReviewContainer>
    );
  }
}

export default Reviews;
